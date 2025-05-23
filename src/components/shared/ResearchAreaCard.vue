<template>
  <div class="group bg-card p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
    <div class="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10 mx-auto group-hover:bg-accent/20 transition-colors duration-300 ring-4 ring-primary/5 group-hover:ring-accent/10">
      <component :is="iconComponent" :class="['h-8 w-8', colorClassInternal, 'group-hover:text-accent transition-colors duration-300']" />
    </div>
    <h3 class="text-xl font-semibold text-center text-primary mb-3 group-hover:text-accent transition-colors duration-300">{{ title }}</h3>
    <p class="text-foreground/70 text-center text-sm leading-relaxed min-h-[60px]">{{ description }}</p>
    <div class="mt-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out transform group-hover:translate-y-0 -translate-y-2">
      <RouterLink :to="learnMoreLink" class="inline-flex items-center text-sm font-medium text-accent hover:underline">
        Learn More <ArrowRight class="ml-1.5 h-4 w-4" />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { 
  Brain, Satellite, Leaf, BarChart2, Atom, ShieldCheck, HelpCircle, ArrowRight 
} from 'lucide-vue-next';
import type { ResearchArea } from '@/types';


interface Props {
  title: string;
  description: string;
  iconName: ResearchArea['iconName'];
  colorClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  colorClass: '', 
});

const iconComponents: Partial<Record<ResearchArea['iconName'], any>> = {
  Brain,
  Satellite,
  Leaf,
  BarChart2,
  Atom,
  ShieldCheck,
  HelpCircle, // Fallback icon
};

const iconComponent = computed(() => {
  return iconComponents[props.iconName] || iconComponents.HelpCircle;
});

const colorClassInternal = computed(() => {
  return props.colorClass || 'text-primary';
});

const learnMoreLink = computed(() => {
  // Basic slugification, consider a more robust library for complex cases
  const slug = props.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  return `/research-areas/${slug}`;
});

</script>

<style scoped>
.min-h-\[60px\] {
  min-height: 60px;
}
</style>
