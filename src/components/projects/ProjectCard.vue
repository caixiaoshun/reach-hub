<template>
  <Card class="group relative flex flex-col h-full bg-card text-foreground rounded-xl shadow-lg hover:shadow-primary/20 transition-all duration-300 ease-in-out overflow-hidden border border-border/60 dark:border-slate-700/50 hover:border-primary/70 dark:hover:border-primary/70">
    <div class="relative h-56 w-full overflow-hidden">
      <img 
        :src="project.imageUrl" 
        :alt="`Image for ${project.title}`" 
        class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        :data-ai-hint="project.imageAiHint || 'abstract technology'"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
      <div v-if="project.researchArea" class="absolute top-3 right-3">
        <Badge variant="secondary" class="bg-opacity-80 backdrop-blur-sm">{{ project.researchArea }}</Badge>
      </div>
    </div>

    <CardContent class="flex flex-col flex-grow px-5 py-6 sm:p-5">
      <h3 
        class="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2"
        :title="project.title"
      >
        {{ project.title }}
      </h3>
      
      <p class="text-xs text-muted-foreground mb-3">
        By {{ project.authors.join(', ') }}
      </p>

      <p class="text-base sm:text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow leading-relaxed">
        {{ project.shortDescription }}
      </p>

      <div v-if="project.tags && project.tags.length" class="flex flex-wrap gap-2 mb-5">
        <Badge 
          v-for="tag in project.tags.slice(0, 3)" 
          :key="tag"
          class="text-xs font-medium border-primary/20 bg-primary/10 text-primary/80 hover:bg-primary/20 hover:text-primary dark:bg-primary/15 dark:text-primary/70 dark:hover:bg-primary/25 dark:hover:text-primary/90 px-2.5 py-0.5 rounded-full transition-colors duration-200"
        >
          {{ tag }}
        </Badge>
      </div>
      
      <div class="mt-auto pt-4 border-t border-border/20">
        <RouterLink :to="`/projects/${project.id}`" class="w-full">
          <Button variant="outline" class="w-full group/button text-primary border-primary/70 hover:bg-primary/15 dark:hover:bg-primary/20">
            View Details
            <ArrowRight class="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </Button>
        </RouterLink>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import type { Project } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-vue-next';

interface Props {
  project: Project;
}

defineProps<Props>();
</script>

<style scoped>
/* Line clamp utility if not available globally */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
