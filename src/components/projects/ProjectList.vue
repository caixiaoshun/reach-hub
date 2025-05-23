<template>
  <div v-if="projects.length === 0" class="text-center py-10 text-muted-foreground">
    <p>No projects found matching your criteria.</p>
  </div>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :project="project"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Project } from '@/types';
import ProjectCard from './ProjectCard.vue';

defineProps({
  projects: {
    type: Array as PropType<Project[]>,
    required: true,
  },
});
</script>
