<template>
  <component :is="tag" :class="computedClasses" v-bind="linkOrButtonProps" @click="handleClick">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { buttonVariants } from './index'; // Imports variants from the same directory's index.ts
import type { ButtonVariants } from './index';
import { cn } from '@/utils/cn';

interface Props {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
  class?: string;
  as?: 'button' | 'a' | 'RouterLink';
  to?: string | object; // For RouterLink or <a> href
  href?: string; // For <a> tag
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'default',
  size: 'default',
  type: 'button',
  disabled: false,
});

const emit = defineEmits(['click']);

const computedClasses = computed(() =>
  cn(
    buttonVariants({ variant: props.variant, size: props.size }),
    props.class
  )
);

const tag = computed(() => {
  if (props.as === 'RouterLink' && props.to) {
    return RouterLink;
  }
  if (props.as === 'a' || props.href) {
    return 'a';
  }
  return 'button';
});

const linkOrButtonProps = computed(() => {
  if (tag.value === RouterLink && props.to) {
    return { to: props.to };
  }
  if (tag.value === 'a') {
    return { href: props.href || (typeof props.to === 'string' ? props.to : undefined) };
  }
  // For button element
  return { type: props.type, disabled: props.disabled };
});

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  emit('click', event);
};
</script>
