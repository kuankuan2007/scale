<template>
  <component :is="form[config.type as never]" :config="config" :id="id" />
</template>
<script setup lang="ts">
import type { FormConfig } from '@/types/form';
import form from './form';
defineProps<{
  config: FormConfig;
  id: string;
}>();
</script>
<style scoped lang="scss"></style>
