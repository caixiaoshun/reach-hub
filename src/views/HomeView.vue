<template>
  <AppLayout>
    <div class="flex flex-col min-h-screen bg-background text-foreground">
      <!-- Hero Section -->
      <section id="hero"
        class="relative py-20 md:py-32 text-center bg-gradient-to-br from-sky-100 via-slate-50 to-stone-100 dark:from-sky-900/30 dark:via-slate-800/50 dark:to-stone-900/70 overflow-hidden">
        <div class="absolute inset-0 bg-repeat opacity-5 dark:opacity-[0.02]"
          style="background-image: url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20opacity%3D%22.5%22%20d%3D%22M96%2095h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm9-10v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-10%200v-9h-9v9h9zm-9-10h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9zm10%200h9v-9h-9v9z%22/%3E%3Cpath%20d%3D%22M6%205V0H5v5H0v1h5v94h1V6h94V5H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');">
        </div>
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-16" :style="{ backgroundImage: `url(${homePage})` }">
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-sky-400 dark:from-primary dark:to-sky-300">
            {{ $t('heroWelcome') }}
          </h1>
          <p class="text-lg sm:text-xl md:text-2xl text-foreground/80 dark:text-foreground/70 max-w-3xl mx-auto mb-10 text-white">
            {{ $t('heroIntro') }}
          </p>
          <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
            <RouterLink to="/projects">
              <Button size="lg"
                class="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform transition-transform duration-150 hover:scale-105">
                <Rocket class="mr-2 h-5 w-5" /> {{ $t('exploreProjects') }}
              </Button>
            </RouterLink>
            <RouterLink to="/introduction">
              <Button size="lg" variant="outline"
                class="border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20 shadow-lg transform transition-transform duration-150 hover:scale-105">
                <UsersIcon class="mr-2 h-5 w-5" /> {{ $t('learnAboutUs') }}
              </Button>
            </RouterLink>
          </div>
        </div>
        <!-- Scroll down indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown class="h-8 w-8 text-foreground/50" />
        </div>
      </section>

      <!-- What We Do Teaser Section -->
      <section id="what-we-do" class="py-16 bg-background">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-foreground mb-3">{{ $t('heroTagline') }}</h2>
            <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
              {{ $t('heroDescription') }}
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-card p-6 rounded-xl shadow-lg hover:shadow-primary/20 border border-border/60 dark:border-slate-700/50 hover:border-primary/50 dark:hover:border-primary/70 transition-all duration-300 ease-in-out group text-center">
              <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Lightbulb class="h-8 w-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground group-hover:text-primary mb-2 transition-colors duration-300">{{ $t('innovativeResearchTitle') }}</h3>
              <p class="text-base sm:text-sm text-muted-foreground leading-relaxed">{{ $t('innovativeResearchDesc') }}</p>
            </div>
            <div class="bg-card p-6 rounded-xl shadow-lg hover:shadow-primary/20 border border-border/60 dark:border-slate-700/50 hover:border-primary/50 dark:hover:border-primary/70 transition-all duration-300 ease-in-out group text-center">
              <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Send class="h-8 w-8 text-primary" />
              </div>
              <!-- Using Send as a proxy for collaboration/impact -->
              <h3 class="text-xl font-semibold text-foreground group-hover:text-primary mb-2 transition-colors duration-300">{{ $t('globalImpactTitle') }}</h3>
              <p class="text-base sm:text-sm text-muted-foreground leading-relaxed">{{ $t('globalImpactDesc') }}</p>
            </div>
            <div class="bg-card p-6 rounded-xl shadow-lg hover:shadow-primary/20 border border-border/60 dark:border-slate-700/50 hover:border-primary/50 dark:hover:border-primary/70 transition-all duration-300 ease-in-out group text-center">
              <div class="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <Target class="h-8 w-8 text-primary" />
              </div>
              <h3 class="text-xl font-semibold text-foreground group-hover:text-primary mb-2 transition-colors duration-300">{{ $t('appliedTechnologyTitle') }}</h3>
              <p class="text-base sm:text-sm text-muted-foreground leading-relaxed">{{ $t('appliedTechnologyDesc') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects -->
        <section id="featured-projects" class="py-16 bg-slate-50 dark:bg-slate-800/30">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center mb-12 text-foreground">{{ $t('featuredProjects') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project"
              class="transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]" />
          </div>
          <div class="text-center mt-12">
            <RouterLink to="/projects">
                <Button size="lg" variant="outline"
                  class="border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20">
                  {{ $t('viewAllProjects') }}
                </Button>
            </RouterLink>
          </div>
        </div>
      </section>

      <!-- Our Research Areas -->
      <section id="research-areas" class="py-16 bg-background">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold text-center mb-12 text-foreground">{{ $t('ourResearchAreas') }}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card v-for="area in researchAreas" :key="area.title"
              class="bg-card text-card-foreground shadow-lg rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:scale-105 group">
              <CardHeader class="p-6">
                <div class="flex items-center mb-4">
                  <div
                    :class="['p-3 rounded-full mr-4 bg-opacity-20', area.colorClass ? `${area.colorClass.replace('text-', 'bg-')}/20` : 'bg-primary/20']">
                    <component :is="iconComponents[area.iconName]" :class="['h-8 w-8 shrink-0', area.colorClass || 'text-primary']" />
                  </div>
                  <CardTitle class="text-xl font-semibold">{{ area.title }}</CardTitle>
                </div>
                <CardDescription class="text-sm text-muted-foreground min-h-[60px]">{{ area.description }}
                </CardDescription>
              </CardHeader>
              <CardContent class="p-6 pt-0">
                <Button variant="link" class="text-sm font-medium text-primary px-0"
                  @click.prevent="handleLearnMoreClick(area)">
                  {{ $t('learnMore') }}
                  <ArrowRight class="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <!-- Featured Datasets Section -->
      <section class="py-12 md:py-16 bg-slate-50 dark:bg-slate-800/30">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-semibold text-center mb-8 md:mb-12">
            {{ $t('ourDatasets') }}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DatasetCard v-for="dataset in featuredDatasets" :key="dataset.id" :dataset="dataset"
              class="transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.02]" />
          </div>

          <!-- Enhanced Button -->
          <div class="text-center mt-12">
            <RouterLink to="/datasets">
              <Button size="lg" variant="outline"
                class="border-primary text-primary hover:bg-primary/10 dark:hover:bg-primary/20">
                {{ $t('browseDatasets') }}
              </Button>
            </RouterLink>
          </div>

        </div>
      </section>


      <!-- Join Our Community Section -->
      <section id="join-community"
        class="py-16 md:py-24 bg-gradient-to-r from-primary to-sky-500 dark:from-primary/80 dark:to-sky-600/80 text-primary-foreground">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('joinCommunity') }}</h2>
          <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            {{ $t('joinCommunityDesc') }}
          </p>
          <RouterLink to="/contact">
            <Button size="lg" variant="outline"
              class="bg-background/10 hover:bg-background/20 text-primary-foreground border-primary-foreground hover:border-white transform transition-transform duration-150 hover:scale-105">
              {{ $t('getInTouch') }}
            </Button>
          </RouterLink>
        </div>
      </section>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink } from 'vue-router';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ProjectCard from '@/components/projects/ProjectCard.vue';
import { mockProjects } from '@/data/projects';
// import { ElMessage } from 'element-plus'
import { useToast } from '@/composables/useToast';
import { mockDatasets } from '@/data/datasets';
import type { ResearchArea } from '@/types';
import DatasetCard from '@/components/datasets/DatasetCard.vue'
import AppLayout from '@/components/layout/AppLayout.vue';
import homePage from '@/assets/imageUrl/home_bg.jpg'
import {
  Brain, Satellite, Leaf, BarChart2, Atom, ShieldCheck, ArrowRight, Rocket, Users as UsersIcon, Send, Lightbulb, Target, ChevronDown
} from 'lucide-vue-next';

const featuredDatasets = computed(() => mockDatasets.slice(0, 3));

const featuredProjects = computed(() => mockProjects.slice(0, 3));

const { toast } = useToast();
const { t } = useI18n();

// Map icon names to actual components
const iconComponents: Record<string, any> = {
  Brain,
  Satellite,
  Leaf,
  BarChart2,
  Atom,
  ShieldCheck,
  // Add other icons if needed, or a fallback
};

const researchAreas = computed<ResearchArea[]>(() => [
  { title: t('mlTitle'), description: t('mlDesc'), iconName: 'Brain', colorClass: 'text-primary', link: '#' },
  { title: t('rsTitle'), description: t('rsDesc'), iconName: 'Satellite', colorClass: 'text-green-500', link: '#' },
  { title: t('agriTitle'), description: t('agriDesc'), iconName: 'Leaf', colorClass: 'text-teal-500', link: '#' },
  { title: t('vizTitle'), description: t('vizDesc'), iconName: 'BarChart2', colorClass: 'text-purple-500', link: '#' },
  { title: t('quantumTitle'), description: t('quantumDesc'), iconName: 'Atom', colorClass: 'text-indigo-500', link: '#' },
  { title: t('cyberTitle'), description: t('cyberDesc'), iconName: 'ShieldCheck', colorClass: 'text-red-500', link: '#' },
]);

const handleLearnMoreClick = (area: ResearchArea) => {
  toast({
    title: t('infoTitle'),
    description: t('learnMoreSoon', { title: area.title }),
    variant: 'default',
  });
};
</script>

<style scoped>
/* Scoped styles if needed, e.g., for complex animations or pseudo-elements */

.group:hover .group-hover\\:text-accent-foreground {
  color: hsl(var(--accent-foreground));
}

.group:hover .group-hover\\:underline {
  text-decoration: underline;
}

.group:hover .group-hover\\:translate-x-1 {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
</style>
