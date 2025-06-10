<template>
  <PageSection title="Sample Data Preview" v-if="dataset.sampleDataPreview?.length">
    <!-- Featured Sample -->
    <div v-if="firstSample" class="mb-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl shadow-lg">
      <h2 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 text-center md:text-left">Featured Sample</h2>
      <p v-if="firstSample.caption" class="text-sm text-muted-foreground mb-6 text-center md:text-left">
        {{ firstSample.caption }}
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div v-for="imageType in ['pan', 'nir', 'rgb']" :key="imageType" class="flex flex-col items-center">
          <div class="relative group w-full aspect-square rounded-xl overflow-hidden shadow-md">
            <img
              :src="getImageSrc(firstSample, imageType as ImageTypeKey)"
              :alt="getImageAlt(imageType as ImageTypeKey)"
              class="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-out group-hover:scale-105"
              @click="openModal(getImageSrc(firstSample, imageType as ImageTypeKey), getImageAlt(imageType as ImageTypeKey))"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
              <p class="text-white text-md font-semibold p-3 text-center">View {{ getImageAlt(imageType as ImageTypeKey) }}</p>
            </div>
          </div>
          <p class="text-center text-sm font-semibold text-slate-700 dark:text-slate-300 mt-2">{{ getImageAlt(imageType as ImageTypeKey) }}</p>
        </div>
      </div>

      <div v-if="firstSample.satellite" class="mt-4 pt-4 border-t border-border dark:border-slate-700 text-center md:text-right">
        <span class="text-sm text-slate-600 dark:text-slate-400">Satellite: </span>
        <strong class="font-semibold text-slate-700 dark:text-slate-300">{{ firstSample.satellite }}</strong>
      </div>
    </div>

    <!-- Additional Samples -->
    <div v-if="additionalSamples.length > 0">
      <h2 class="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100 pt-6 border-t border-border dark:border-slate-700">
        Additional Samples
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          v-for="(sample, index) in additionalSamples"
          :key="index"
          class="overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 ease-out rounded-xl bg-white dark:bg-slate-900 hover:-translate-y-1 hover:scale-[1.01]"
        >
          <CardContent class="p-0">
            <div class="grid grid-cols-3">
              <div v-for="imageType in ['pan', 'nir', 'rgb']" :key="imageType" class="relative">
                 <img
                  :src="getImageSrc(sample, imageType as ImageTypeKey)"
                  :alt="getImageAlt(imageType as ImageTypeKey)"
                  class="w-full aspect-square object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  @click="openModal(getImageSrc(sample, imageType as ImageTypeKey), getImageAlt(imageType as ImageTypeKey))"
                />
                <p class="text-center text-[11px] leading-tight font-medium text-slate-600 dark:text-slate-400 py-1.5 px-1">{{ getImageAltShort(imageType as ImageTypeKey) }}</p>
              </div>
            </div>
            <div class="px-3 pt-2 pb-3 text-xs text-center text-muted-foreground">
              <span v-if="sample.caption">{{ sample.caption }}</span>
              <span v-if="sample.satellite" class="block mt-0.5">
                Sat: <strong class="font-medium">{{ sample.satellite }}</strong>
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>

    <!-- Image Modal (same as before) -->
     <div
      v-if="showModal"
      class="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      @click.self="closeModal" 
    >
      <div class="relative bg-white dark:bg-slate-800 p-2 rounded-lg shadow-xl max-w-3xl max-h-[90vh]">
        <img :src="modalImageSrc" :alt="modalImageAlt" class="max-w-full max-h-[85vh] object-contain rounded" />
        <p class="text-center text-sm text-slate-600 dark:text-slate-300 pt-2">{{ modalImageAlt }}</p>
        <button @click="closeModal" class="absolute -top-3 -right-3 bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-full p-1.5 shadow-md hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </PageSection>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import PageSection from '@/components/shared/PageSection.vue';
import type { PanSharpeningDataset, PanDatasetSamplePreview } from '@/types'; // PanSharpeningDatasetSample
import { Card, CardContent } from '@/components/ui/card';

type ImageTypeKey = 'pan' | 'nir' | 'rgb';

const props = defineProps<{
  dataset: PanSharpeningDataset;
}>();

const firstSample = computed(() => 
  props.dataset.sampleDataPreview && props.dataset.sampleDataPreview.length > 0 
    ? props.dataset.sampleDataPreview[0] 
    : null
);

const additionalSamples = computed(() => 
  props.dataset.sampleDataPreview && props.dataset.sampleDataPreview.length > 1
    ? props.dataset.sampleDataPreview.slice(1)
    : []
);

const getImageSrc = (sample: PanDatasetSamplePreview, type: ImageTypeKey): string => {
  if (type === 'pan') return sample.panUrlOrData ?? '';
  if (type === 'nir') return sample.nirOrData ?? ''; 
  if (type === 'rgb') return sample.rgbUrlOrData ?? '';
  return ''; // Fallback
};

const getImageAlt = (type: ImageTypeKey): string => {
  if (type === 'pan') return 'PAN (High-res Grayscale)';
  if (type === 'nir') return 'NIR (Low-res Color)';
  if (type === 'rgb') return 'Sharpened RGB Output';
  return 'Image';
};
const getImageAltShort = (type: ImageTypeKey): string => {
  if (type === 'pan') return 'PAN';
  if (type === 'nir') return 'NIR';
  if (type === 'rgb') return 'RGB Output';
  return 'Image';
};


const showModal = ref(false);
const modalImageSrc = ref('');
const modalImageAlt = ref('');

const openModal = (src: string, alt: string) => {
  modalImageSrc.value = src;
  modalImageAlt.value = alt;
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = '';
};
</script>