<template>
  <div :class="cn('text-sm font-semibold', $attrs.class ?? '')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn';
defineOptions({
  inheritAttrs: false,
});
</script>
