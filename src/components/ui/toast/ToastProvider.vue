<template>
  <slot />
</template>

<script setup lang="ts">
// This component is a conceptual wrapper.
// In Vue, context providing is often handled by `provide` in a composable or root component.
// The `useToast` composable already manages the global state of toasts.
// This file is kept for structural similarity to some UI libraries but might not be actively doing much
// if all state management is in `useToast.ts`.
// If specific provider logic (like global configurations for toasts) were needed, it would go here.
</script>
