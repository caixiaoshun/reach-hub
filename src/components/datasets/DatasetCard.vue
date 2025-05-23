<template>
  <Card
    class="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg"
  >
    <div class="relative h-48 w-full overflow-hidden">
      <img
        :src="dataset.imageUrl || 'https://picsum.photos/seed/placeholder-dataset/600/400'"
        :alt="`Image for ${dataset.title}`"
        :data-ai-hint="dataset.imageAiHint || 'dataset abstract'"
        class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      ></div>
    </div>
    <CardHeader class="flex-grow p-4 md:p-5">
      <CardTitle class="mb-2 text-lg font-semibold leading-tight text-foreground group-hover:text-primary">
        {{ dataset.title }}
      </CardTitle>
      <p class="mb-3 line-clamp-2 text-sm text-muted-foreground">
        {{ dataset.shortDescription }}
      </p>
    </CardHeader>
    <CardFooter class="border-t border-border p-4 md:p-5">
      <div class="flex w-full flex-col">
        <div v-if="dataset.tags && dataset.tags.length" class="mb-3 flex flex-wrap gap-2">
          <Badge
            v-for="tag in limitedTags"
            :key="tag"
            variant="secondary"
            class="text-xs"
          >
            {{ tag }}
          </Badge>
        </div>
        <router-link :to="`/datasets/${dataset.id}`" class="w-full mt-auto">
          <Button variant="outline" class="w-full group/button text-primary border-primary/50 hover:bg-primary/10">
            View More
            <ChevronRight class="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </Button>
        </router-link>
      </div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Dataset } from '@/types';
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'; // Added Button import
import { ChevronRight } from 'lucide-vue-next';

const props = defineProps<{
  dataset: Dataset;
}>();

const MAX_TAGS_DISPLAYED = 3;

const limitedTags = computed(() => {
  if (props.dataset.tags) {
    return props.dataset.tags.slice(0, MAX_TAGS_DISPLAYED);
  }
  return [];
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
