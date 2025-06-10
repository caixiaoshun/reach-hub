<template>
  <div :class="cn('flex items-center p-6 pt-0', $attrs.class ?? '')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn';

defineOptions({
  inheritAttrs: false,
});
</script>
