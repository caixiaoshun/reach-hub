<template>
  <section class="py-8 md:py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-card p-6 rounded-lg shadow-lg">
        <h2 v-if="title" class="text-xl font-semibold mb-4 text-card-foreground">
          {{ title }}
        </h2>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>
