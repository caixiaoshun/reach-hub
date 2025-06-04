<template>
  <section class="py-16 md:py-24 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ $t('ourResearchAreas') }}</h2>
        <p class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {{ $t('researchAreasIntro') }}
        </p>
         <div class="mt-4 h-1 w-24 bg-primary mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card v-for="area in researchAreas" :key="area.title" class="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
          <CardHeader class="pb-4">
            <div class="mx-auto flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10 text-primary">
              <component :is="area.icon" class="w-8 h-8" />
            </div>
            <CardTitle class="text-xl font-semibold">{{ area.title }}</CardTitle>
          </CardHeader>
          <CardContent>
            <p class="text-muted-foreground text-sm">{{ area.description }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChartBig, Eye, MessageSquareText, Cpu } from 'lucide-vue-next';

const { t } = useI18n();

const researchAreas = computed(() => [
  {
    title: t('mlTitle'),
    description: t('mlDesc'),
    icon: BarChartBig,
  },
  {
    title: t('cvTitle'),
    description: t('cvDesc'),
    icon: Eye,
  },
  {
    title: t('nlpTitle'),
    description: t('nlpDesc'),
    icon: MessageSquareText,
  },
  {
    title: t('quantumTitle'),
    description: t('quantumDesc'),
    icon: Cpu,
  },
]);
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
