<template>
  <Card class="flex flex-col h-full overflow-hidden rounded-lg shadow-lg animate-pulse">
    <div class="relative">
      <div class="w-full h-48 bg-muted"></div>
    </div>

    <CardHeader class="flex-grow">
      <div class="h-6 w-3/4 bg-muted rounded mb-2"></div>
      <div class="h-4 w-1/2 bg-muted rounded mb-3"></div>
      <div class="flex flex-wrap gap-2 mb-3">
        <div v-for="n in 3" :key="n" class="h-5 w-16 bg-muted rounded-full"></div>
      </div>
      <div class="space-y-2">
        <div class="h-4 bg-muted rounded"></div>
        <div class="h-4 w-5/6 bg-muted rounded"></div>
      </div>
    </CardHeader>

    <CardFooter class="mt-auto pt-0 pb-4 px-6">
      <div class="h-10 w-full bg-muted rounded"></div>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardHeader, CardFooter } from '@/components/ui/card';
</script>
