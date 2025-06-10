<template>
  <component :is="asChild ? 'slot' : 'button'" @click="closeSheet">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { inject } from 'vue';

defineProps<{
  asChild?: boolean;
}>();

const sheetContext = inject('sheetState') as { closeSheet: () => void } | undefined;

const closeSheet = () => {
  if (sheetContext) {
    sheetContext.closeSheet();
  }
};
</script>
