<template>
  <header class="header" :class="{ hidden: hide }">
    <p class="title">{{ title }}</p>
  </header>
</template>
<script setup lang="ts">
import { title } from '@/router';
defineProps<{
  hide?: boolean;
}>();
</script>
<style scoped lang="scss">
@use '@/styles/theme.scss' as *;
@use 'sass:color';

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: transform 0.3s ease-in-out;

  @include useTheme {
    background: rgba(color.mix(getTheme('background'), getTheme('active-color'), 85%), 0.95);
  }
  @supports (backdrop-filter: blur(1em)) {
    backdrop-filter: blur(1em);
    @include useTheme {
      background: rgba(color.mix(getTheme('background'), getTheme('active-color'), 85%), 0.7);
    }
  }
  * {
    margin: 0;
  }
  .title {
    font-size: 2em;
    font-weight: bold;
  }
  &.hidden {
    transform: translate(0, -100%);
  }
}
</style>
