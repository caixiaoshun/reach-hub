<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
      <!-- Logo and Brand Name -->
      <router-link to="/" class="flex items-center space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          class="h-6 w-6"
          fill="currentColor"
        >
          <path
            d="M208.0001,31.99414a16.00061,16.00061,0,0,0-22.62793,0L31.99421,185.372L2.30671,170.21542a15.99942,15.99942,0,1,0-19.31383,27.4287L25.372,212.80065A15.99613,15.99613,0,0,0,48.00007,224H224a16.00005,16.00005,0,0,0,16-16V48.00007A16.00005,16.00005,0,0,0,208.0001,31.99414Zm8,176.00586H48.00007L198.62787,57.37213a.00024.00024,0,0,0,0,0L216.0001,74.7442Z"
          ></path>
        </svg>
        <span class="font-semibold text-lg">Research Hub</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-4">
        <nav class="flex space-x-1 items-center">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary hover:bg-accent/50 flex items-center gap-2"
            active-class="text-primary bg-accent/50"
          >
            <component :is="link.icon" class="h-4 w-4" />
            {{ link.name }}
          </router-link>
        </nav>
        <ThemeToggle />
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <Sheet v-model:open="isSheetOpen">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu class="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" class="w-[300px] sm:w-[400px] bg-sidebar text-sidebar-foreground">
            <SheetHeader>
              <SheetTitle class="text-sidebar-primary text-xl flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  class="h-6 w-6"
                  fill="currentColor"
                >
                  <path
                    d="M208.0001,31.99414a16.00061,16.00061,0,0,0-22.62793,0L31.99421,185.372L2.30671,170.21542a15.99942,15.99942,0,1,0-19.31383,27.4287L25.372,212.80065A15.99613,15.99613,0,0,0,48.00007,224H224a16.00005,16.00005,0,0,0,16-16V48.00007A16.00005,16.00005,0,0,0,208.0001,31.99414Zm8,176.00586H48.00007L198.62787,57.37213a.00024.00024,0,0,0,0,0L216.0001,74.7442Z"
                  ></path>
                </svg>
                <span>Research Hub</span>
              </SheetTitle>
            </SheetHeader>
            <nav class="flex flex-col space-y-3 mt-6">
              <router-link
                v-for="link in navLinks"
                :key="link.name"
                :to="link.path"
                class="px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-sidebar-primary hover:bg-sidebar-accent/20 flex items-center gap-3"
                active-class="text-sidebar-primary bg-sidebar-accent/20"
                @click="closeSheet"
              >
                <component :is="link.icon" class="h-5 w-5" />
                {{ link.name }}
              </router-link>
            </nav>
            <div class="mt-auto pt-6">
              <ThemeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ThemeToggle from "@/components/shared/ThemeToggle.vue";
import { Menu, Home, BookOpen, FolderKanban, Database, Mail } from "lucide-vue-next";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Introduction", path: "/introduction", icon: BookOpen },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Dataset", path: "/datasets", icon: Database },
  { name: "Contact", path: "/contact", icon: Mail },
];

const isSheetOpen = ref(false);

const closeSheet = () => {
  isSheetOpen.value = false;
};
</script>

<style scoped>
/* Additional custom styles if needed */
.router-link-exact-active {
  /* Ensures that active class is applied correctly for desktop */
}

/* Mobile active class might need specific sidebar colors if not covered by hover/active */
.bg-sidebar .router-link-exact-active {
   /* Example: color: hsl(var(--sidebar-primary-foreground)); */
   /* background-color: hsl(var(--sidebar-primary)); */
}
</style>
