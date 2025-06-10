<template>
  <div class="inline-flex border rounded-md overflow-hidden">
    <Button
      size="sm"
      class="rounded-none"
      :variant="$i18n.locale === 'zh' ? 'default' : 'ghost'"
      @click="$i18n.locale = 'zh'"
    >中文</Button>
    <Button
      size="sm"
      class="rounded-none border-l"
      :variant="$i18n.locale === 'bo' ? 'default' : 'ghost'"
      @click="$i18n.locale = 'bo'"
    >བོད་ཡིག</Button>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>
