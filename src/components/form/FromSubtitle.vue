<template>
  <component :is="`h${titleLevel}`">{{ config.title }}</component>
</template>
<script setup lang="ts">
import type { SubTitleFormConfig } from '@/types/form';
const value = defineModel<number | undefined>();
void value.value;
const props = defineProps<{
  config: SubTitleFormConfig;
  id: string;
  readonly: boolean;
}>();
const titleLevel = computed(() => {
  if (props.config.level === void 0) {
    return 2;
  }
  if (props.config.level > 6) {
    return 6;
  }
  if (props.config.level < 2) {
    return 2;
  }
  return Math.floor(props.config.level);
});
</script>
<style scoped lang="scss">
h1,
h2,
h3,
h4,
h5,
h6 {
  padding: 0;
  margin: 0;
  font-weight: bold;
}
h2 {
  font-size: 1.5em;
}
h3 {
  font-size: 1.3em;
}
h4 {
  font-size: 1.1em;
}
h5,
h6 {
  font-size: 1em;
}
</style>
