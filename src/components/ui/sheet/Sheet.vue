<template>
  <slot :open="isOpen" :onOpenChange="handleOpenChange" />
</template>

<script setup lang="ts">
import { ref, provide, watch, toRefs } from 'vue';

const props = defineProps<{
  open?: boolean;
  modal?: boolean; // if true, clicking outside closes (typical behavior)
}>();

const emit = defineEmits(['update:open']);

// Use local ref synced with prop for internal control, allowing v-model
const isOpen = ref(props.open || false);

watch(() => props.open, (newValue) => {
  isOpen.value = newValue ?? false;
});

const handleOpenChange = (value: boolean) => {
  isOpen.value = value;
  emit('update:open', value);
};

// Provide state and control to children (SheetTrigger, SheetContent, SheetClose)
provide('sheetState', {
  isOpen,
  openSheet: () => handleOpenChange(true),
  closeSheet: () => handleOpenChange(false),
  isModal: toRefs(props).modal
});
</script>
