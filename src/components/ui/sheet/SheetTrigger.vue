<template>
  <component :is="asChild ? 'slot' : 'button'" @click="openSheet">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { inject } from 'vue';

defineProps<{
  asChild?: boolean;
}>();

const sheetContext = inject('sheetState') as { openSheet: () => void } | undefined;

const openSheet = () => {
  if (sheetContext) {
    sheetContext.openSheet();
  }
};
</script>
