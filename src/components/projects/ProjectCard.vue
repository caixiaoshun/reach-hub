<template>
  <Card class="group relative flex flex-col h-full bg-card text-card-foreground rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden border-transparent hover:border-primary/30">
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

    <CardContent class="flex flex-col flex-grow p-5">
      <h3 
        class="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2"
        :title="project.title"
      >
        {{ project.title }}
      </h3>
      
      <p class="text-xs text-muted-foreground mb-3">
        By {{ project.authors.join(', ') }}
      </p>

      <p class="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
        {{ project.shortDescription }}
      </p>

      <div v-if="project.tags && project.tags.length" class="flex flex-wrap gap-2 mb-5">
        <Badge 
          v-for="tag in project.tags.slice(0, 3)" 
          :key="tag" 
          variant="outline"
          class="text-xs font-medium border-border/70 bg-secondary/50 text-secondary-foreground/80"
        >
          {{ tag }}
        </Badge>
      </div>
      
      <div class="mt-auto pt-4 border-t border-border/20">
        <RouterLink :to="`/projects/${project.id}`" class="w-full">
          <Button variant="outline" class="w-full group/button text-primary border-primary/50 hover:bg-primary/10">
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
