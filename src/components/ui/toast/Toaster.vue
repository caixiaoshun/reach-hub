<template>
  <ToastProvider>
    <template v-for="toast in toasts" :key="toast.id">
       <Toast
        :id="String(toast.id)"
        :open="toast.open"
        :variant="toast.variant"
        :title="toast.title"
        :description="toast.description"
        :duration="toast.duration"
        :action="toast.action"
        @update:open="(isOpen) => handleOpenChange(String(toast.id), isOpen)"
        @dismiss="() => dismiss(String(toast.id))"
      >
        <!-- If you had custom component logic for toasts, it would be handled here -->
      </Toast>
    </template>
    <ToastViewport />
  </ToastProvider>
</template>

<script setup lang="ts">
import { useToast } from '@/composables/useToast';
import ToastProvider from './ToastProvider.vue';
import ToastViewport from './ToastViewport.vue';
import Toast from './Toast.vue';
// Import other toast parts if they are directly used or for type inference
// import ToastTitle from './ToastTitle.vue';
// import ToastDescription from './ToastDescription.vue';
// import ToastClose from './ToastClose.vue';
// import ToastAction from './ToastAction.vue';

const { toasts, dismiss } = useToast();

const handleOpenChange = (id: string, isOpen: boolean) => {
  if (!isOpen) {
    dismiss(id);
  }
};
</script>
