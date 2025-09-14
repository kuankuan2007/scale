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
@use 'sass:color';

.link-like-button {
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 1em;
  @include useTheme {
    color: getTheme('active-color');
  }
  &.underline {
    text-decoration: underline;
  }
  &.invisible {
    opacity: 0.5;
    @include useTheme {
      color: getTheme('color');
    }
  }
  &:hover,
  &:active,
  &:focus {
    @include useTheme {
      color: color.mix(getTheme('active-color'), getTheme('color'), 60%);
    }
  }
}
</style>
