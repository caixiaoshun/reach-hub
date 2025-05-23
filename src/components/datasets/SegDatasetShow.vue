<template>
  <PageSection title="Sample Data Preview" v-if="dataset.sampleDataPreview && dataset.sampleDataPreview.length">
    <!-- Featured Sample -->
    <div v-if="firstSample" class="mb-12 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl shadow-lg">
      <div class="grid md:grid-cols-2 gap-x-8 gap-y-6 items-start">
        <!-- Left Column: Input Image & Caption -->
        <div class="flex flex-col">
          <div class="relative group aspect-video md:aspect-square rounded-xl overflow-hidden shadow-md">
            <img
              :src="firstSample.urlOrData"
              alt="Input Image"
              class="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-out group-hover:scale-105"
              @click="openModal(firstSample.urlOrData, firstSample.caption || 'Input Image')"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
              <p class="text-white text-lg font-semibold p-4 text-center">View Input Image</p>
            </div>
          </div>
          <p class="text-center text-base font-semibold text-slate-700 dark:text-slate-300 mt-3 mb-1">Input Image</p>
          <p v-if="firstSample.caption" class="text-sm text-center text-muted-foreground px-2">
            {{ firstSample.caption }}
          </p>
        </div>

        <!-- Right Column: Mask & Legend -->
        <div class="flex flex-col space-y-6">
          <div v-if="firstSample.type === 'image' && firstSample.maskUrlOrData" class="flex flex-col">
            <div class="relative group aspect-video md:aspect-square rounded-xl overflow-hidden shadow-md">
              <img
                :src="firstSample.maskUrlOrData"
                alt="Segmentation Mask"
                class="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-out group-hover:scale-105"
                @click="openModal(firstSample.maskUrlOrData, 'Segmentation Mask')"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                <p class="text-white text-lg font-semibold p-4 text-center">View Segmentation Mask</p>
              </div>
            </div>
            <p class="text-center text-base font-semibold text-slate-700 dark:text-slate-300 mt-3">Segmentation Mask</p>
          </div>

          <div v-if="dataset.legend && dataset.legend.length" :class="{'mt-0': !(firstSample.type === 'image' && firstSample.maskUrlOrData) }">
            <h3 class="text-md font-semibold mb-3 text-slate-800 dark:text-slate-200 border-b pb-2 border-border dark:border-slate-700">Legend</h3>
            <div class="flex flex-wrap gap-x-5 gap-y-2.5">
              <div v-for="(item, i) in dataset.legend" :key="i" class="flex items-center gap-2.5">
                <div
                  class="w-4 h-4 rounded-sm border border-slate-400 dark:border-slate-600 shadow-sm"
                  :style="{ backgroundColor: item.color }"
                ></div>
                <span class="text-sm text-slate-600 dark:text-slate-300">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Samples -->
    <div v-if="additionalSamples.length > 0">
      <h2 class="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100 pt-6 border-t border-border dark:border-slate-700">
        Additional Samples
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          v-for="(sample, index) in additionalSamples"
          :key="index"
          class="overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 ease-out rounded-xl bg-white dark:bg-slate-900 hover:-translate-y-1 hover:scale-[1.01]"
        >
          <CardContent class="p-0">
            <div v-if="sample.type === 'image' && sample.maskUrlOrData" class="grid grid-cols-2">
              <div class="relative">
                <img
                  :src="sample.urlOrData"
                  alt="Input Image"
                  class="w-full aspect-square object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  @click="openModal(sample.urlOrData, 'Input Image')"
                />
                <p class="text-center text-xs font-medium text-slate-600 dark:text-slate-400 py-2 px-1">Input</p>
              </div>
              <div class="relative">
                <img
                  :src="sample.maskUrlOrData"
                  alt="Segmentation Mask"
                  class="w-full aspect-square object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                  @click="openModal(sample.maskUrlOrData, 'Segmentation Mask')"
                />
                <p class="text-center text-xs font-medium text-slate-600 dark:text-slate-400 py-2 px-1">Mask</p>
              </div>
            </div>
            <div v-else-if="sample.type === 'image'" class="flex flex-col relative">
              <img
                :src="sample.urlOrData"
                alt="Sample Preview"
                class="w-full aspect-square object-cover rounded-t-xl cursor-pointer transition-transform duration-300 group-hover:scale-105"
                @click="openModal(sample.urlOrData, 'Image Preview')"
              />
              <p class="text-center text-xs font-medium text-slate-600 dark:text-slate-400 py-2.5">Image Preview</p>
            </div>
            <div v-else class="w-full aspect-square bg-muted flex items-center justify-center rounded-xl">
              <p class="text-muted-foreground text-xs">Preview ({{ sample.type }})</p>
            </div>
            <div v-if="sample.caption" class="px-3 pt-1 pb-3 text-xs text-center text-muted-foreground">
              {{ sample.caption }}
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
import type { SegDataset } from '@/types'; // Assuming SegDatasetSample is exported
import { Card, CardContent } from '@/components/ui/card';

const props = defineProps<{
  dataset: SegDataset;
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

const showModal = ref(false);
const modalImageSrc = ref('');
const modalImageAlt = ref('');

const openModal = (src: string, alt: string) => {
  modalImageSrc.value = src;
  modalImageAlt.value = alt;
  showModal.value = true;
  document.body.style.overflow = 'hidden'; // Prevent background scroll
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = ''; // Restore background scroll
};
</script>