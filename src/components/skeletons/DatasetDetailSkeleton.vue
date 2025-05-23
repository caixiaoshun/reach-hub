<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
    <!-- Back Button Skeleton -->
    <div class="mb-6 h-10 w-36 bg-muted rounded-md"></div>

    <!-- Page Header Skeleton -->
    <div class="space-y-3 mb-8">
      <div class="h-8 w-3/4 bg-muted rounded"></div>
      <div class="h-5 w-1/2 bg-muted rounded"></div>
    </div>

    <div class="lg:flex lg:gap-8">
      <!-- Main content skeleton -->
      <div class="lg:w-2/3 space-y-8">
        <!-- Abstract Skeleton -->
        <div class="p-6 bg-muted/50 rounded-lg space-y-3">
          <div class="h-6 w-1/4 bg-muted-foreground/20 rounded"></div>
          <div class="h-4 w-full bg-muted-foreground/20 rounded"></div>
          <div class="h-4 w-full bg-muted-foreground/20 rounded"></div>
          <div class="h-4 w-3/4 bg-muted-foreground/20 rounded"></div>
        </div>

        <!-- Full Description Skeleton -->
        <div class="space-y-3">
          <div class="h-6 w-1/3 bg-muted rounded mb-4"></div>
          <div class="h-4 w-full bg-muted rounded"></div>
          <div class="h-4 w-full bg-muted rounded"></div>
          <div class="h-4 w-full bg-muted rounded"></div>
          <div class="h-4 w-5/6 bg-muted rounded"></div>
        </div>
        
        <!-- Download Links Skeleton -->
        <div class="space-y-3">
          <div class="h-6 w-1/3 bg-muted rounded mb-4"></div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="h-16 bg-muted rounded-md"></div>
            <div class="h-16 bg-muted rounded-md"></div>
          </div>
        </div>

        <!-- Sample Data Preview Skeleton -->
        <div class="space-y-3">
          <div class="h-6 w-1/3 bg-muted rounded mb-4"></div>
           <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="rounded-lg overflow-hidden border border-muted">
              <div class="w-full h-48 bg-muted"></div>
              <div class="p-3 bg-muted/50">
                 <div class="h-4 w-2/3 bg-muted-foreground/20 rounded"></div>
              </div>
            </div>
            <div class="rounded-lg overflow-hidden border border-muted">
              <div class="w-full h-48 bg-muted"></div>
              <div class="p-3 bg-muted/50">
                 <div class="h-4 w-1/2 bg-muted-foreground/20 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar skeleton -->
      <aside class="lg:w-1/3 space-y-8 mt-8 lg:mt-0">
        <!-- Dataset Information Skeleton -->
        <div class="p-6 bg-muted/30 rounded-lg space-y-4">
          <div class="h-6 w-1/2 bg-muted-foreground/20 rounded mb-3"></div>
          <div class="space-y-2">
            <div class="h-4 w-1/3 bg-muted-foreground/20 rounded"></div>
            <div class="h-4 w-3/4 bg-muted-foreground/20 rounded"></div>
          </div>
           <div class="space-y-2">
            <div class="h-4 w-1/4 bg-muted-foreground/20 rounded"></div>
            <div class="h-4 w-1/2 bg-muted-foreground/20 rounded"></div>
          </div>
          <div class="space-y-2">
            <div class="h-4 w-1/3 bg-muted-foreground/20 rounded"></div>
            <div class="h-4 w-2/3 bg-muted-foreground/20 rounded"></div>
          </div>
           <div class="space-y-2">
            <div class="h-4 w-1/4 bg-muted-foreground/20 rounded"></div>
            <div class="h-6 w-16 bg-muted-foreground/20 rounded-full"></div>
          </div>
        </div>

        <!-- Tags Skeleton -->
        <div class="p-6 bg-muted/30 rounded-lg space-y-3">
          <div class="h-6 w-1/3 bg-muted-foreground/20 rounded mb-3"></div>
          <div class="flex flex-wrap gap-2">
            <div class="h-6 w-16 bg-muted-foreground/20 rounded-full"></div>
            <div class="h-6 w-20 bg-muted-foreground/20 rounded-full"></div>
            <div class="h-6 w-12 bg-muted-foreground/20 rounded-full"></div>
            <div class="h-6 w-24 bg-muted-foreground/20 rounded-full"></div>
          </div>
        </div>
        
        <!-- Related Publication Skeleton (if applicable) -->
        <div class="p-6 bg-muted/30 rounded-lg space-y-3">
           <div class="h-6 w-1/2 bg-muted-foreground/20 rounded mb-3"></div>
           <div class="h-10 w-full bg-muted-foreground/20 rounded-md"></div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for a pure skeleton component
</script>
