<template>
  <div :class="cn('text-sm opacity-90', $attrs.class ?? '')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn';
defineOptions({
  inheritAttrs: false,
});
</script>
