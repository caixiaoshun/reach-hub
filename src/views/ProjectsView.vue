<template>
  <AppLayout>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <PageHeader :title="t('projectsTitle')" :subtitle="t('projectsSubtitle')" class="mb-12 text-center" />

      <div class="mb-10 max-w-xl mx-auto">
        <div class="relative">
          <Input
            type="search"
            :placeholder="t('projectSearchPlaceholder')"
            v-model="searchQuery"
            class="w-full pl-10 pr-4 py-3 rounded-lg text-base shadow-sm focus:ring-primary focus:border-primary"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search class="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCardSkeleton v-for="n in 3" :key="`skeleton-${n}`" />
      </div>
      <div v-else-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
      <div v-else class="text-center py-12">
        <h3 class="text-xl font-semibold text-muted-foreground">{{ t('noProjectsFound') }}</h3>
        <p class="text-muted-foreground mt-2">{{ t('adjustSearch') }}</p>
      </div>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Project } from '@/types';
import { mockProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard.vue";
import ProjectCardSkeleton from "@/components/skeletons/ProjectCardSkeleton.vue";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-vue-next";
import AppLayout from '@/components/layout/AppLayout.vue';
import PageHeader from '@/components/layout/PageHeader.vue';

const { t } = useI18n();

const searchQuery = ref('');
const isLoading = ref(true);
const allProjects = ref<Project[]>([]);

onMounted(() => {
  // Simulate API call
  setTimeout(() => {
    allProjects.value = mockProjects;
    isLoading.value = false;
  }, 500);
});

const filteredProjects = computed(() => {
  if (!searchQuery.value.trim()) {
    return allProjects.value;
  }
  const lowerSearchQuery = searchQuery.value.toLowerCase();
  return allProjects.value.filter(project =>
    project.title.toLowerCase().includes(lowerSearchQuery) ||
    project.authors.some(author => author.toLowerCase().includes(lowerSearchQuery)) ||
    (project.tags && project.tags.some(tag => tag.toLowerCase().includes(lowerSearchQuery)))
  );
});
</script>

<style scoped>
/* Additional styles for subtle separators or specific spacing if needed */
.grid + .grid {
  margin-top: 2rem; /* Example for spacing between rows if not handled by gap */
}
</style>
