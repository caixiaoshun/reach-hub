<template>
  <div class="flex flex-col min-h-screen bg-background text-foreground">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import { Toaster } from '@/components/ui/toast';
</script>
