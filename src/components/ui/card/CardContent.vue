<template>
  <div :class="cn('pt-0', $attrs.class as string)"> <!-- Default padding top removed, can be added via class -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn';

defineOptions({
  inheritAttrs: false,
});
</script>
