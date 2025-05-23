<template>
  <AppLayout>
    <PageHeader title="Our Datasets"
      description="Explore the datasets curated and utilized by our research group.">
    </PageHeader>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Search and Filter Bar -->
      <div class="mb-8 md:mb-12">
        <div class="relative max-w-2xl mx-auto">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search class="h-6 w-6 text-muted-foreground" />
          </div>
          <Input
            type="text"
            v-model="searchQuery"
            placeholder="Search datasets by name, tag, or author..."
            class="w-full h-14 pl-12 pr-4 py-3 text-lg rounded-xl shadow-md focus:ring-primary focus:border-primary"
          />
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <DatasetCardSkeleton v-for="n in 3" :key="`skeleton-${n}`" />
      </div>

      <!-- Datasets Grid -->
      <div v-else-if="filteredDatasets.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <DatasetCard v-for="dataset in filteredDatasets" :key="dataset.id" :dataset="dataset" />
      </div>

      <!-- No Results State -->
      <div v-else class="text-center py-12">
        <Search class="mx-auto h-16 w-16 text-muted-foreground mb-6" />
        <h3 class="text-2xl font-semibold text-foreground mb-2">No Datasets Found</h3>
        <p class="text-muted-foreground">
          Your search for "{{ searchQuery }}" did not match any datasets.
        </p>
        <p class="text-muted-foreground mt-1">
          Try refining your search terms or explore all datasets.
        </p>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { Dataset } from '@/types';
import { mockDatasets } from '@/data/datasets';
import DatasetCard from '@/components/datasets/DatasetCard.vue';
import DatasetCardSkeleton from '@/components/skeletons/DatasetCardSkeleton.vue';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-vue-next';
import AppLayout from '@/components/layout/AppLayout.vue';
import PageHeader from '@/components/layout/PageHeader.vue';

const datasets = ref<Dataset[]>([]);
const searchQuery = ref('');
const isLoading = ref(true);

// Simulate data fetching
onMounted(() => {
  setTimeout(() => {
    datasets.value = mockDatasets;
    isLoading.value = false;
  }, 1000); // Simulate network delay
});

const filteredDatasets = computed(() => {
  if (!searchQuery.value) {
    return datasets.value;
  }
  const lowerSearchQuery = searchQuery.value.toLowerCase();
  return datasets.value.filter((dataset: Dataset) =>
    dataset.title.toLowerCase().includes(lowerSearchQuery) ||
    dataset.authors.some((author: string) => author.toLowerCase().includes(lowerSearchQuery)) ||
    dataset.tags.some((tag: string) => tag.toLowerCase().includes(lowerSearchQuery)) ||
    dataset.shortDescription.toLowerCase().includes(lowerSearchQuery) ||
    (dataset.domain && dataset.domain.toLowerCase().includes(lowerSearchQuery))
  );
});
</script>

<style scoped>
/* Add any specific styles for this view here */
</style>