<template>
  <div :class="cn(badgeVariants({ variant }), $attrs.class ?? '')">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/utils/cn';
import { badgeVariants } from '.';
import type { BadgeVariants } from '.';

defineOptions({
  inheritAttrs: false,
});

defineProps<{
  variant?: BadgeVariants['variant'];
}>();
</script>
