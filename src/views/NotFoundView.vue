<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow">
      <div class="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center px-4">
        <TriangleAlert class="h-24 w-24 text-destructive mb-6" />
        <h1 class="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 class="text-3xl font-semibold text-foreground mb-3">{{ t('pageNotFound') }}</h2>
        <p class="text-lg text-muted-foreground max-w-md mb-8">
          {{ t('datasetMissingDesc') }}
        </p>
        <div class="flex space-x-4">
          <RouterLink to="/">
            <Button size="lg">
              <Home class="mr-2 h-5 w-5" /> {{ t('goHome') }}
            </Button>
          </RouterLink>
          <Button size="lg" variant="outline" @click="goBack">
            <ArrowLeft class="mr-2 h-5 w-5" /> {{ t('goBack') }}
          </Button>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar.vue';
import Footer from '@/components/layout/Footer.vue';
import { TriangleAlert, Home, ArrowLeft } from 'lucide-vue-next';

const { t } = useI18n();

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>
