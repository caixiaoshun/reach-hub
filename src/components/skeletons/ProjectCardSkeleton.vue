<template>
  <Card class="group relative flex flex-col h-full bg-card text-card-foreground rounded-xl shadow-lg overflow-hidden border-transparent">
    <div class="relative h-56 w-full bg-muted animate-pulse"></div>

    <CardContent class="flex flex-col flex-grow p-5">
      <div class="h-6 w-3/4 bg-muted rounded mb-3 animate-pulse"></div>
      
      <div class="h-4 w-1/2 bg-muted rounded mb-4 animate-pulse"></div>

      <div class="h-4 w-full bg-muted rounded mb-2 animate-pulse"></div>
      <div class="h-4 w-5/6 bg-muted rounded mb-5 animate-pulse"></div>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <div class="h-6 w-16 bg-muted rounded-full animate-pulse"></div>
        <div class="h-6 w-20 bg-muted rounded-full animate-pulse"></div>
        <div class="h-6 w-12 bg-muted rounded-full animate-pulse"></div>
      </div>
      
      <div class="mt-auto pt-4 border-t border-border/20">
        <div class="h-10 w-full bg-muted rounded animate-pulse"></div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card';
</script>
