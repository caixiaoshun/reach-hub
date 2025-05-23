<template>
  <div
    :class="[
      'py-8 md:py-12',
      isPrimaryBackground ? 'bg-primary text-primary-foreground' : 'bg-card text-card-foreground border-b'
    ]"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="showBackButton" class="mb-4">
        <Button @click="goBack" variant="outline" size="sm" class="flex items-center space-x-1">
          <ArrowLeft class="w-4 h-4" />
          <span>Back</span>
        </Button>
      </div>
      <div v-if="breadcrumbs && breadcrumbs.length" class="mb-2">
        <nav class="flex" aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-1 text-sm">
            <li v-for="(crumb, index) in breadcrumbs" :key="index">
              <div class="flex items-center">
                <ChevronRight v-if="index > 0" class="h-4 w-4 text-muted-foreground shrink-0" aria-hidden="true" />
                <RouterLink
                  :to="crumb.to"
                  :class="[
                    'ml-1 text-sm font-medium',
                    index === breadcrumbs.length - 1 ? 'text-foreground pointer-events-none' : 'text-muted-foreground hover:text-foreground'
                  ]"
                  :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
                >
                  {{ crumb.text }}
                </RouterLink>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <h1 :class="['text-3xl md:text-4xl font-bold tracking-tight', titleClass]">
        {{ title }}
      </h1>
      <p v-if="subtitle" :class="['mt-2 text-lg text-muted-foreground', subtitleClass]">
        {{ subtitle }}
      </p>
      <div v-if="$slots.actions" class="mt-6">
        <slot name="actions"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter, RouterLink } from 'vue-router';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronRight } from 'lucide-vue-next';

interface BreadcrumbItem {
  text: string;
  to: string;
}

defineProps<{
  title: string;
  subtitle?: string;
  titleClass?: string;
  subtitleClass?: string;
  isPrimaryBackground?: boolean;
  showBackButton?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}>();

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>
