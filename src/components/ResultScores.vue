<template>
  <component :is="componentMap[config.type as never]" :config="config" />
</template>
<script setup lang="ts">
import type { ScoreShower } from '@/types/form';
import componentMap from './score';
defineProps<{
  config: ScoreShower;
}>();
</script>
<style scoped lang="scss"></style>
