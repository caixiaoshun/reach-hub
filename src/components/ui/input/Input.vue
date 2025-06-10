<template>
  <div class="relative w-full">
    <div v-if="hasIconSlot" class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <slot name="icon"></slot>
    </div>
    <input
      :type="type"
      :class="[
        cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          { 'pl-10': hasIconSlot }
        ),
        props.class,
      ]"
      :value="props.modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { cn } from '@/utils/cn';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  modelValue?: string | number;
  type?: string;
  class?: string;
}>(), {
  type: 'text',
  class: '',
});

defineEmits<{
  (e: 'update:modelValue', payload: string | number): void;
}>();

const slots = useSlots();
const hasIconSlot = !!slots.icon;
</script>

<style scoped>
/* Additional fine-tuning if necessary */
</style>

    