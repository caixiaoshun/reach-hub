<template>
  <footer class="bg-background text-foreground">

    <div class="bg-foreground/90 text-background py-12">
      <div class="container mx-auto p-6 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 class="text-lg font-semibold mb-4 text-background/80">{{ t('footerResearchGroup') }}</h3>
            <p class="mb-4 text-background/70">
              {{ t('footerDescription') }}
            </p>
            <p class="text-background/60">&copy; {{ currentYear }} {{ t('footerResearchGroup') }}. {{ t('footerCopyright') }}</p>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-background/80">{{ t('footerLinks') }}</h3>
            <ul class="space-y-2">
              <li><router-link to="/" class="hover:text-primary transition-colors text-background/70">{{ t('nav.home') }}</router-link></li>
              <li><router-link to="/introduction" class="hover:text-primary transition-colors text-background/70">{{ t('nav.introduction') }}</router-link></li>
              <li><router-link to="/projects" class="hover:text-primary transition-colors text-background/70">{{ t('nav.projects') }}</router-link></li>
              <li><router-link to="/contact" class="hover:text-primary transition-colors text-background/70">{{ t('nav.contact') }}</router-link></li>
            </ul>
          </div>

          <div>
            <h3 class="text-lg font-semibold mb-4 text-background/80">{{ t('footerContact') }}</h3>
            <address class="not-italic space-y-2 text-background/70">
              <p>{{ t('footerAddressLine1') }}<br>{{ t('footerAddressLine2') }}</p>
              <p>{{ t('footerEmail') }}: <a href="mailto:info@researchgroup.org" class="hover:text-primary transition-colors">info@researchgroup.org</a></p>
              <p>{{ t('footerPhone') }}: <a href="tel:+11234567890" class="hover:text-primary transition-colors">(123) 456-7890</a></p>
            </address>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
// import { useRouter } from 'vue-router';
// import { Button } from '@/components/ui/button';
// import { ArrowRight } from 'lucide-vue-next';

// const router = useRouter();
const currentYear = ref(new Date().getFullYear());
const { t } = useI18n();

// const navigateToContact = () => {
// router.push('/contact');
// };
</script>

<style scoped>
/* Ensure the footer background covers the full width */
footer {
  width: 100%;
}
</style>
