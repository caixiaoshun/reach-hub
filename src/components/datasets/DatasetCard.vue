<template>
  <Card
    class="group flex h-full flex-col overflow-hidden rounded-xl bg-card text-foreground shadow-lg hover:shadow-primary/20 hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-[1.02] border border-border/60 dark:border-slate-700/50 hover:border-primary/70 dark:hover:border-primary/70"
  >
    <div class="relative h-48 w-full overflow-hidden">
      <img
        :src="dataset.imageUrl || 'https://picsum.photos/seed/placeholder-dataset/600/400'"
        :alt="`Image for ${displayTitle}`"
        :data-ai-hint="dataset.imageAiHint || 'dataset abstract'"
        class="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
      ></div>
    </div>
    <CardHeader class="flex-grow px-4 py-5 md:p-5">
      <CardTitle class="mb-2 text-xl font-semibold leading-tight text-foreground group-hover:text-primary">
        {{ displayTitle }}
      </CardTitle>
      <p class="mb-3 line-clamp-2 text-base sm:text-sm text-muted-foreground leading-relaxed">
        {{ displayDescription }}
      </p>
    </CardHeader>
    <CardFooter class="border-t border-border/60 dark:border-slate-700/60 px-4 py-5 md:p-5">
      <div class="flex w-full flex-col">
        <div v-if="displayTags.length" class="mb-3 flex flex-wrap gap-2">
          <Badge
            v-for="tag in displayTags"
            :key="tag"
            class="text-xs font-medium border-primary/20 bg-primary/10 text-primary/80 hover:bg-primary/20 hover:text-primary dark:bg-primary/15 dark:text-primary/70 dark:hover:bg-primary/25 dark:hover:text-primary/90 px-2.5 py-0.5 rounded-full transition-colors duration-200"
          >
            {{ tag }}
          </Badge>
        </div>
        <router-link :to="`/datasets/${dataset.id}`" class="w-full mt-auto">
          <Button variant="outline" class="w-full group/button text-primary border-primary/70 hover:bg-primary/15 dark:hover:bg-primary/20">
            {{ $t('viewMore') }}
            <ChevronRight class="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
          </Button>
        </router-link>
      </div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import type { Dataset } from '@/types';
import { Card, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button'; // Added Button import
import { ChevronRight } from 'lucide-vue-next';

const props = defineProps<{
  dataset: Dataset;
}>();

const { locale } = useI18n();

const displayTitle = computed(() => {
  if (locale.value === 'zh') return props.dataset.titleZh || props.dataset.title;
  if (locale.value === 'bo') return props.dataset.titleBo || props.dataset.title;
  return props.dataset.title;
});

const displayDescription = computed(() => {
  if (locale.value === 'zh') return props.dataset.shortDescriptionZh || props.dataset.shortDescription;
  if (locale.value === 'bo') return props.dataset.shortDescriptionBo || props.dataset.shortDescription;
  return props.dataset.shortDescription;
});

const MAX_TAGS_DISPLAYED = 3;

const displayTags = computed(() => {
  if (!props.dataset.tags) return [];
  if (locale.value === 'zh' && props.dataset.tagsZh) return props.dataset.tagsZh.slice(0, MAX_TAGS_DISPLAYED);
  if (locale.value === 'bo' && props.dataset.tagsBo) return props.dataset.tagsBo.slice(0, MAX_TAGS_DISPLAYED);
  return props.dataset.tags.slice(0, MAX_TAGS_DISPLAYED);
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
