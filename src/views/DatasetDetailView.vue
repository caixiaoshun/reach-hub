<template>
  <AppLayout>
    <PageHeader v-if="dataset" :title="displayTitle" :showBackButton="true"
      :breadcrumbs="[{ text: 'Datasets', to: '/datasets' }, { text: displayTitle, to: route.fullPath }]" class="pb-6 md:pb-8" />
    <div v-else-if="!isLoading" class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <PageHeader title="Dataset Not Found" :showBackButton="true"
        :breadcrumbs="[{ text: 'Datasets', to: '/datasets' }, { text: 'Not Found', to: route.fullPath }]" />
    </div>
    <div v-else class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <PageHeader title="Loading Dataset..." :showBackButton="true"
        :breadcrumbs="[{ text: 'Datasets', to: '/datasets' }, { text: 'Loading...', to: route.fullPath }]" />
    </div>

    <!-- Back button floating style REMOVED -->
    <!--
    <div class="fixed top-20 left-6 z-50">
      <RouterLink to="/datasets">
        <Button variant="default" size="sm"
          class="flex items-center space-x-1 shadow-xl hover:shadow-2xl hover:scale-105 transition-all bg-primary text-primary-foreground rounded-full px-4 py-2">
          <ArrowLeft class="w-4 h-4" />
          <span>Back All Datasets</span>
        </Button>
      </RouterLink>
    </div>
    -->

    <div v-if="dataset" class="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
      <!-- 1. Dataset Overview (Abstract/Short Description) - Enhanced -->
      <section class="mb-10 md:mb-16 py-8 px-6 bg-slate-50 dark:bg-slate-800/60 rounded-xl shadow-md">
        <p class="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed text-center">
          {{ displayShort || dataset.abstract }}
        </p>
      </section>

      <div class="grid lg:grid-cols-12 gap-x-8 xl:gap-x-12 items-start">
        <!-- Main content area (Description, Sample Data) -->
        <div class="lg:col-span-8 xl:col-span-9 space-y-10 md:space-y-12">
          <PageSection title="Full Description" v-if="dataset.longDescription" class="pt-0">
            <!-- Added title styling -->
            <h2 class="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">
              About this Dataset
            </h2>
            <div class="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed"
              v-html="displayLong"></div>
          </PageSection>

          <!-- Dynamic Dataset Preview Components -->
          <!-- The SegDatasetShow/PanSharpeningDatasetShow already include PageSection, so we don't wrap them again -->
          <SegDatasetShow v-if="dataset.type == 'seg'" :dataset="dataset as SegDataset" />
          <PanSharpeningDatasetShow v-else-if="dataset.type == 'pan'" :dataset="dataset as PanSharpeningDataset" />
        </div>

        <!-- 2. Basic Information Panel (Sidebar) - Enhanced & Sticky -->
        <aside class="lg:col-span-4 xl:col-span-3 space-y-6 mt-10 lg:mt-0 lg:sticky lg:top-24">
          <Card
            class="bg-card text-card-foreground p-5 md:p-6 rounded-xl shadow-lg border border-border/70 dark:border-slate-700/50">
            <h3
              class="text-lg font-bold text-foreground mb-5 border-b border-border/60 dark:border-slate-700 pb-3 flex items-center">
              <Info class="w-5 h-5 mr-2.5 text-primary" />
              Dataset Information
            </h3>
            <div class="space-y-5 text-sm">
              <div class="flex items-start space-x-3">
                <LinkIcon class="w-4 h-4 mt-0.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <div>
                  <h4 class="font-semibold text-foreground/90 mb-0.5">Source</h4>
                  <a v-if="dataset.article_link" :href="dataset.article_link" target="_blank" rel="noopener noreferrer"
                    class="text-sky-600 dark:text-sky-400 hover:underline break-all"
                    :title="`Read article: ${dataset.article}`">{{ dataset.article || 'View Source' }}</a>
                  <p v-else class="text-muted-foreground">{{ dataset.article || 'Not specified' }}</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <CalendarDays class="w-4 h-4 mt-0.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <div>
                  <h4 class="font-semibold text-foreground/90 mb-0.5">Year</h4>
                  <p class="text-muted-foreground">{{ dataset.year }}</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <GlobeIcon class="w-4 h-4 mt-0.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <div>
                  <h4 class="font-semibold text-foreground/90 mb-0.5">Domain</h4>
                  <p class="text-muted-foreground">{{ dataset.domain }}</p>
                </div>
              </div>
              <div v-if="displayTags.length > 0">
                <div class="flex items-start space-x-3">
                  <TagIcon class="w-4 h-4 mt-1 text-purple-600 dark:text-purple-400 shrink-0" />
                  <div>
                    <h4 class="font-semibold text-foreground/90 mb-1.5">Tags</h4>
                    <div class="flex flex-wrap gap-2">
                      <Badge v-for="tag in displayTags" :key="tag" variant="outline"
                        class="cursor-pointer transition-all duration-200 ease-in-out hover:shadow-md hover:scale-105 hover:bg-primary/10 dark:hover:bg-primary/20 group border-border hover:border-primary/70 dark:border-slate-600 dark:hover:border-primary/50"
                        :title="`View '${tag}' on Wikipedia (opens new tab)`" @click="openWikiLink(tag)">
                        <span class="group-hover:text-primary transition-colors text-xs">{{ tag }}</span>
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </aside>
      </div>

      <!-- 3. Download Section - Enhanced -->
      <PageSection v-if="dataset.downloadLinks && dataset.downloadLinks.length > 0"
        class="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-border/50 dark:border-slate-700/50">
        <div class="text-center mb-8 md:mb-10">
          <h2 class="text-2xl md:text-3xl font-bold text-foreground">
            <DownloadCloud class="inline-block w-8 h-8 mr-3 text-primary align-[-0.125em]" />
            Access Dataset
          </h2>
          <p class="mt-2 text-muted-foreground max-w-2xl mx-auto">
            Download the dataset files or access them through the provided links.
          </p>
        </div>

        <div :class="[
          'grid gap-4 md:gap-6 max-w-4xl mx-auto',
          dataset.downloadLinks.length === 1 ? 'grid-cols-1' :
            dataset.downloadLinks.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
              'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
        ]">
          <Button v-for="link in dataset.downloadLinks" :key="link.url" as="a" :href="link.url" target="_blank"
            rel="noopener noreferrer" variant="default" size="lg"
            class="w-full flex items-center justify-center space-x-2.5 !py-3.5 bg-primary text-primary-foreground rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.03] transition-all duration-250 ease-in-out group focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            :title="`${link.label} (opens new tab)`">
            <component :is="getIconForLink(link.icon)" class="w-5 h-5 group-hover:animate-bounce-sm shrink-0" />
            <span class="truncate font-medium">{{ link.label }}</span>
            <ExternalLinkIcon class="w-4 h-4 ml-auto opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
          </Button>
        </div>
        <p class="mt-8 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          All links open in a new tab. Please refer to the source for licensing information and usage terms.
        </p>
      </PageSection>

      <!-- Optional: Separator if there's content below downloads -->
      <!-- <hr class="my-12 md:my-16 border-border/30 dark:border-border/15"> -->

    </div>
    <div v-else-if="!isLoading && !dataset"
      class="text-center py-20 min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center px-4">
      <HelpCircle class="w-20 h-20 text-destructive mb-6" />
      <h2 class="text-3xl font-bold mb-3 text-slate-800 dark:text-slate-100">Dataset Not Found</h2>
      <p class="text-muted-foreground mb-8 max-w-md">
        We couldn't find the dataset you were looking for. It might have been moved or removed.
      </p>
      <RouterLink to="/datasets">
        <Button variant="outline" size="lg">
          <ArrowLeft class="w-5 h-5 mr-2" />
          Back to All Datasets
        </Button>
      </RouterLink>
    </div>
    <div v-else class="text-center py-20 min-h-[calc(100vh-20rem)] flex flex-col items-center justify-center">
      <svg aria-hidden="true"
        class="inline w-12 h-12 text-muted-foreground animate-spin dark:text-gray-600 fill-primary"
        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><!-- SVG path data --></svg>
      <p class="text-xl text-muted-foreground mt-6">Loading dataset details...</p>
    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, RouterLink } from 'vue-router'; // RouterLink for explicit import
import type { SegDataset, PanSharpeningDataset, LucideIconName } from '@/types';
import { mockDatasets } from '@/data/datasets';
import { WIKIPEDIA_BASE_URL, tagToWikiMap } from '@/utils/tagMappings';

import AppLayout from '@/components/layout/AppLayout.vue';
import PageHeader from '@/components/layout/PageHeader.vue';
import PageSection from '@/components/shared/PageSection.vue'; // Used for structure, title can be overridden
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import SegDatasetShow from '@/components/datasets/SegDatasetShow.vue';
import PanSharpeningDatasetShow from '@/components/datasets/PanSharpeningDatasetShow.vue';

import {
  Tag as TagIcon,
  Github,
  FileArchive,
  Link as LinkIcon,
  FileText as FileTextIcon,
  Database as DatabaseIcon,
  Globe as GlobeIcon,
  DownloadCloud,
  ExternalLink as ExternalLinkIcon,
  Users2,
  CalendarDays,
  ArrowLeft,
  HelpCircle,
  Info, // Added for sidebar title
  // ... other icons from your iconMap
} from 'lucide-vue-next';

const route = useRoute();
const datasetId = computed(() => route.params.id as string);
const dataset = ref<SegDataset | PanSharpeningDataset | null>(null);
const isLoading = ref(true);
const { locale } = useI18n();

const displayTitle = computed(() => {
  if (!dataset.value) return '';
  if (locale.value === 'zh') return dataset.value.titleZh || dataset.value.title;
  if (locale.value === 'bo') return dataset.value.titleBo || dataset.value.title;
  return dataset.value.title;
});

const displayShort = computed(() => {
  if (!dataset.value) return '';
  if (locale.value === 'zh') return dataset.value.shortDescriptionZh || dataset.value.shortDescription;
  if (locale.value === 'bo') return dataset.value.shortDescriptionBo || dataset.value.shortDescription;
  return dataset.value.shortDescription;
});

const displayTags = computed(() => {
  if (!dataset.value || !dataset.value.tags) return [];
  if (locale.value === 'zh' && dataset.value.tagsZh) return dataset.value.tagsZh.slice(0, 8);
  if (locale.value === 'bo' && dataset.value.tagsBo) return dataset.value.tagsBo.slice(0, 8);
  return dataset.value.tags.slice(0, 8);
});

const displayLong = computed(() => {
  if (!dataset.value) return '';
  if (locale.value === 'zh') return dataset.value.longDescriptionZh || dataset.value.longDescription;
  if (locale.value === 'bo') return dataset.value.longDescriptionBo || dataset.value.longDescription;
  return dataset.value.longDescription;
});

// Keep your iconMap and other script logic the same
const iconMap: Record<LucideIconName | 'Default', any> = {
  Github, FileArchive, Link: LinkIcon, FileText: FileTextIcon, Database: DatabaseIcon,
  Globe: GlobeIcon, ExternalLink: ExternalLinkIcon, Default: DownloadCloud, Brain: Users2,
  Satellite: DatabaseIcon, Leaf: GlobeIcon, BarChart2: DatabaseIcon, Atom: DatabaseIcon,
  ShieldCheck: DatabaseIcon, Users: Users2, Mail: LinkIcon, MapPin: GlobeIcon,
  Phone: LinkIcon, Linkedin: LinkIcon, Twitter: LinkIcon, Lightbulb: LinkIcon,
  Scale: LinkIcon, Briefcase: LinkIcon, Target: LinkIcon, HeartHandshake: LinkIcon,
  BookOpenCheck: FileTextIcon, Search: LinkIcon, FlaskConical: LinkIcon, HelpCircle,
  DownloadCloud, Copy: LinkIcon, ChevronRight: LinkIcon, ArrowLeft, Users2, CalendarDays,
  UploadCloud: DownloadCloud, Trash2: LinkIcon, Image: LinkIcon, Filter: LinkIcon, Download: LinkIcon,
};


function loadDataset(id: string) {
  isLoading.value = true;
  // Simulate API delay for realistic loading
  setTimeout(() => {
    dataset.value = mockDatasets.find(p => p.id === id) || null;
    isLoading.value = false;
  }, 500);
}

const getIconForLink = (iconName?: LucideIconName) => {
  if (iconName && iconMap[iconName]) {
    return iconMap[iconName];
  }
  return iconMap.Default;
};

const openWikiLink = (tag: string) => {
  const wikiSlug = tagToWikiMap[tag] || tag;
  const url = `${WIKIPEDIA_BASE_URL}${encodeURIComponent(wikiSlug)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};

onMounted(() => {
  loadDataset(datasetId.value);
});

watch(() => route.params.id, (newId) => {
  if (newId && typeof newId === 'string') {
    loadDataset(newId);
  }
}, { immediate: true }); // immediate: true ensures it runs on initial load if param is present

</script>

<style scoped>
/* Keep your existing scoped styles for prose and bounce animation */
.prose :where(p):not(:where([class~="not-prose"] *)) {
  margin-top: 0.75em;
  margin-bottom: 0.75em;
}

.prose :where(h3):not(:where([class~="not-prose"] *)) {
  font-size: 1.25em;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

@keyframes bounce-sm {

  0%,
  100% {
    transform: translateY(-15%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }

  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.group-hover\:animate-bounce-sm:hover {
  animation: bounce-sm 1s infinite;
}

/* Add a class for sticky sidebar if needed, though Tailwind's `sticky` should work.
   Ensure no parent container has `overflow: hidden` that would clip the sticky element.
   The `top-24` value assumes your AppLayout's header is roughly 6rem (96px) high. Adjust as needed.
*/
/* .lg\:sticky { position: sticky; } */
/* .lg\:top-24 { top: 6rem; } */
</style>