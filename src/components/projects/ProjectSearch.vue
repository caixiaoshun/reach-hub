<template>
  <div class="mb-8">
    <Input
      type="text"
      :modelValue="searchTerm"
      @update:modelValue="$emit('update:searchTerm', $event)"
      placeholder="Search projects by title, author, or tag..."
      class="w-full max-w-lg mx-auto text-base p-3"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { Input } from '@/components/ui/input';

defineProps({
  searchTerm: String,
});

defineEmits(['update:searchTerm']);
</script>
