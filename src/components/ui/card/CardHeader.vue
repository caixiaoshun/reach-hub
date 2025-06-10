<template>
  <div :class="cn('flex flex-col space-y-1.5 p-6 pb-4', $attrs.class as string)"> <!-- Adjusted padding bottom -->
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn';

defineOptions({
  inheritAttrs: false,
});
</script>
