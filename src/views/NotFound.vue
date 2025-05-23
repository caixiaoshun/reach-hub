<template>
    <AppLayout>
      <div class="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors">
        <div class="mb-6 text-primary">
          <GhostIcon class="w-20 h-20 mx-auto animate-pulse" />
        </div>
        <h1 class="text-6xl font-extrabold tracking-tight text-primary mb-2">404</h1>
        <p class="text-lg text-muted-foreground mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <RouterLink
          to="/"
          class="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90 transition"
        >
          <ArrowLeftIcon class="w-4 h-4" />
          Go Back Home
        </RouterLink>
      </div>
    </AppLayout>
  </template>
  
  <script setup lang="ts">
  import AppLayout from '@/components/layout/AppLayout.vue'
  import { RouterLink } from 'vue-router'
  import { ArrowLeftIcon, GhostIcon } from 'lucide-vue-next'
  </script>
  