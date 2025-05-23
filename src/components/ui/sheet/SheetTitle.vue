<template>
  <h2 :class="cn('text-lg font-semibold text-foreground', $attrs.class ?? '')">
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn';

defineOptions({
  inheritAttrs: false,
});
</script>
