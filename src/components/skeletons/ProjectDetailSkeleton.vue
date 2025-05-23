<template>
  <div class="animate-pulse">
    <!-- Back Button Skeleton -->
    <div class="mb-6">
      <div class="h-10 w-40 bg-muted rounded-md"></div>
    </div>

    <!-- Hero Image Skeleton -->
    <div class="mb-8">
      <div class="w-full h-96 bg-muted rounded-lg"></div>
    </div>

    <!-- Title and Short Description Skeleton -->
    <div class="mb-8 text-center">
      <div class="h-10 bg-muted rounded w-3/4 mx-auto mb-4"></div>
      <div class="h-6 bg-muted rounded w-1/2 mx-auto"></div>
    </div>

    <!-- Meta Info Card Skeleton -->
    <div class="mb-8 p-6 bg-card border border-border rounded-lg shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div class="h-5 bg-muted rounded w-3/5 mb-3"></div>
          <div class="h-5 bg-muted rounded w-1/2"></div>
        </div>
        <div class="md:text-right">
          <div class="h-4 bg-muted rounded w-1/4 mb-2 ml-auto md:ml-0"></div>
          <div class="flex flex-wrap gap-2 justify-start md:justify-end">
            <div class="h-6 w-20 bg-muted rounded-full"></div>
            <div class="h-6 w-24 bg-muted rounded-full"></div>
            <div class="h-6 w-16 bg-muted rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section Skeleton (repeated for description, demo, etc.) -->
    <div v-for="i in 3" :key="`section-${i}`" class="mb-8 p-6 bg-card border border-border rounded-lg shadow-sm">
      <div class="h-8 bg-muted rounded w-1/3 mb-6"></div>
      <div class="space-y-3">
        <div class="h-4 bg-muted rounded w-full"></div>
        <div class="h-4 bg-muted rounded w-full"></div>
        <div class="h-4 bg-muted rounded w-3/4"></div>
        <div class="h-4 bg-muted rounded w-5/6 mt-4"></div>
        <div class="h-4 bg-muted rounded w-full"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props or logic needed for this simple skeleton
</script>
