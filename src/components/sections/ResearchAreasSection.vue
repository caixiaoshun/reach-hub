<template>
  <section class="py-16 md:py-24 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Research Areas</h2>
        <p class="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Our group conducts research across a wide range of disciplines, pushing the
          boundaries of what's possible.
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
import { shallowRef } from 'vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChartBig, Eye, MessageSquareText, Cpu } from 'lucide-vue-next';

const researchAreas = shallowRef([
  {
    title: 'Machine Learning',
    description: 'Developing advanced machine learning algorithms to solve complex problems in various domains.',
    icon: BarChartBig,
  },
  {
    title: 'Computer Vision',
    description: 'Research focused on enabling computers to gain high-level understanding from digital images and videos.',
    icon: Eye,
  },
  {
    title: 'Natural Language Processing',
    description: 'Working on systems that can understand, interpret, and generate human language in a valuable way.',
    icon: MessageSquareText,
  },
  {
    title: 'Quantum Computing',
    description: 'Exploring computational models based on quantum physics principles for solving complex problems.',
    icon: Cpu,
  },
]);
</script>

<style scoped>
/* Add any component-specific styles here if needed */
</style>
