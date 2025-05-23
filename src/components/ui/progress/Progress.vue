<template>
  <div
    ref="progressRef"
    :class="cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', $attrs.class ?? '')"
  >
    <div
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="{ transform: `translateX(-${100 - (modelValue || 0)}%)` }"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '@/utils/cn';

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  modelValue?: number; // Percentage value (0-100)
}>();

const progressRef = ref<HTMLElement | null>(null);
</script>
