<template>
  <button class="link-like-button" :class="{ invisible, underline }"><slot>button</slot></button>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    invisible?: boolean;
    underline?: boolean;
  }>(),
  {
    invisible: false,
    underline: true,
  }
);
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;

.link-like-button {
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 1em;
  @include theme.use {
    color: theme.get('active-color');
  }
  &.underline {
    text-decoration: underline;
  }
  &.invisible {
    opacity: 0.5;
    @include theme.use {
      color: theme.get('color');
    }
  }
  &:hover,
  &:active,
  &:focus {
    @include theme.use {
      color: color.mix(theme.get('active-color'), theme.get('color'), 60%);
    }
  }
}
</style>
