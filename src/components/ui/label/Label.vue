<template>
  <label :class="cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', $attrs.class ?? '')">
    <slot />
  </label>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn';

defineOptions({
  inheritAttrs: false,
});
</script>
