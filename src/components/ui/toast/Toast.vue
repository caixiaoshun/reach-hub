<template>
  <li
    v-if="localOpen"
    :class="cn(toastVariants({ variant }), toastClass, $attrs.class ?? '')"
    role="status"
    :aria-live="variant === 'destructive' ? 'assertive' : 'polite'"
    aria-atomic="true"
  >
    <div class="grid gap-1">
      <ToastTitle v-if="title">{{ title }}</ToastTitle>
      <ToastDescription v-if="description">{{ description }}</ToastDescription>
    </div>
    <ToastClose v-if="!action" @click="handleClose" />
    <ToastAction v-if="action" :altText="action.label" @click="handleActionClick">
      {{ action.label }}
    </ToastAction>
  </li>
</template>

<script setup lang="ts">
import { ref, watch, onUnmounted, computed, defineProps, defineEmits, withDefaults } from 'vue';
import { cn } from '@/utils/cn';
import { toastVariants } from '.';
import type { ToastVariants as ToastVariantProps } from '.';
import ToastClose from './ToastClose.vue';
import ToastTitle from './ToastTitle.vue';
import ToastDescription from './ToastDescription.vue';
import ToastAction from './ToastAction.vue';
import type { ToastAction as ToastActionType } from '@/types';

interface Props {
  id: string;
  open?: boolean;
  duration?: number;
  title?: string;
  description?: string;
  variant?: ToastVariantProps['variant'];
  action?: ToastActionType;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  open: false,
  duration: 5000,
  variant: 'default',
});

const emit = defineEmits(['update:open', 'dismiss']);

const localOpen = ref(props.open);
let timer: number | undefined;

const toastClass = computed(() => {
  return localOpen.value ? 'animate-in slide-in-from-top-full sm:slide-in-from-bottom-full' : 'animate-out slide-out-to-right-full';
});


const startTimer = () => {
  if (props.duration !== Infinity) {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      handleClose();
    }, props.duration);
  }
};

const handleClose = () => {
  localOpen.value = false;
  emit('update:open', false);
  emit('dismiss', props.id); // Notify parent (Toaster) to remove
};

const handleActionClick = () => {
  if (props.action && props.action.onClick) {
    props.action.onClick();
  }
  handleClose();
};

watch(() => props.open, (newOpen) => {
  localOpen.value = newOpen;
  if (newOpen) {
    startTimer();
  } else {
    clearTimeout(timer);
  }
});


onUnmounted(() => {
  clearTimeout(timer);
});

// Initialize timer if initially open
if (props.open) {
  startTimer();
}
</script>

<style scoped>
/* Ensure Tailwind JIT picks up these animations or define them in globals.css or tailwind.config.js */
/* Basic slide-in/out for example purposes */
.animate-in { animation-duration: 0.3s; animation-fill-mode: forwards; }
.animate-out { animation-duration: 0.3s; animation-fill-mode: forwards; }

.slide-in-from-top-full { animation-name: slideInFromTop; }
.slide-in-from-bottom-full { animation-name: slideInFromBottom; }
.slide-out-to-right-full { animation-name: slideOutToRight; }


@keyframes slideInFromTop {
  from { transform: translateY(-100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes slideInFromBottom {
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes slideOutToRight {
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
}
</style>
