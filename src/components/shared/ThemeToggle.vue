<template>
  <Button variant="ghost" size="icon" @click="toggleTheme" aria-label="Toggle theme">
    <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  </Button>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Sun, Moon } from 'lucide-vue-next';
import { Button } from '@/components/ui/button';

const currentTheme = ref<'light' | 'dark'>('light');

const applyTheme = (theme: 'light' | 'dark') => {
  const root = window.document.documentElement;
  root.classList.remove(theme === 'light' ? 'dark' : 'light');
  root.classList.add(theme);
  localStorage.setItem('theme', theme);
  currentTheme.value = theme;
};

const toggleTheme = () => {
  applyTheme(currentTheme.value === 'light' ? 'dark' : 'light');
};

onMounted(() => {
  // Ensure this code runs only on the client
  if (typeof window !== 'undefined') {
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      applyTheme('dark');
    } else {
      applyTheme('light');
    }

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      // Apply system preference only if no theme is explicitly set by user via localStorage
      const userSetTheme = localStorage.getItem('theme');
      if (!userSetTheme) {
          applyTheme(newColorScheme);
      }
    });
  }
});
</script>
