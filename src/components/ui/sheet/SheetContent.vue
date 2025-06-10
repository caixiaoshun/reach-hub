<template>
  <teleport to="body">
    <transition name="sheet-overlay-fade">
      <div
        v-if="isOpen && isModal"
        class="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        @click="closeSheet"
      />
    </transition>
    <transition :name="`sheet-slide-${side}`">
      <div
        v-if="isOpen"
        ref="contentRef"
        :class="cn(sheetVariants({ side }), $attrs.class ?? '')"
        v-bind="$attrs"
      >
        <slot />
        <SheetClose v-if="showCloseButton" class="absolute top-4 right-4">
          <X class="h-5 w-5" />
          <span class="sr-only">Close</span>
        </SheetClose>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { ref, inject, computed, watch } from 'vue';
import { X } from 'lucide-vue-next';
import { cn } from '@/utils/cn';
import { sheetVariants } from '.';
import type { SheetVariants as SheetVariantProps } from '.';
import SheetClose from './SheetClose.vue';

defineOptions({
  inheritAttrs: false,
});

withDefaults(defineProps<{
  side?: SheetVariantProps['side'];
  showCloseButton?: boolean;
  class?: string; // To allow passing class from parent
}>(), {
  side: 'right',
  showCloseButton: true,
});

const sheetContext = inject('sheetState') as { 
  isOpen: { value: boolean }; 
  closeSheet: () => void;
  isModal: { value: boolean | undefined };
} | undefined;

const isOpen = computed(() => sheetContext?.isOpen.value ?? false);
const isModal = computed(() => sheetContext?.isModal.value !== false); // default to modal

const closeSheet = () => {
  if (sheetContext && isModal.value) {
    sheetContext.closeSheet();
  }
};

const contentRef = ref<HTMLElement | null>(null);

// Basic focus trapping could be added here if needed, or handle Esc key
watch(isOpen, (open) => {
  if (open) {
    // Focus management logic can go here
  }
});

</script>

<style scoped>
/* Overlay fade */
.sheet-overlay-fade-enter-active, .sheet-overlay-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.sheet-overlay-fade-enter-from, .sheet-overlay-fade-leave-to {
  opacity: 0;
}

/* Slide transitions */
/* Left */
.sheet-slide-left-enter-active, .sheet-slide-left-leave-active {
  transition: transform 0.3s ease-in-out;
}
.sheet-slide-left-enter-from, .sheet-slide-left-leave-to {
  transform: translateX(-100%);
}
/* Right */
.sheet-slide-right-enter-active, .sheet-slide-right-leave-active {
  transition: transform 0.3s ease-in-out;
}
.sheet-slide-right-enter-from, .sheet-slide-right-leave-to {
  transform: translateX(100%);
}
/* Top */
.sheet-slide-top-enter-active, .sheet-slide-top-leave-active {
  transition: transform 0.3s ease-in-out;
}
.sheet-slide-top-enter-from, .sheet-slide-top-leave-to {
  transform: translateY(-100%);
}
/* Bottom */
.sheet-slide-bottom-enter-active, .sheet-slide-bottom-leave-active {
  transition: transform 0.3s ease-in-out;
}
.sheet-slide-bottom-enter-from, .sheet-slide-bottom-leave-to {
  transform: translateY(100%);
}
</style>
