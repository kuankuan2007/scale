<template>
  <button :class="{ capsule }">
    <slot>Button</slot>
  </button>
</template>
<script setup lang="ts">
withDefaults(defineProps<{ capsule?: boolean }>(), {
  capsule: false,
});
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;
@use 'sass:color';

button {
  appearance: none;
  padding: 0.5em 2em;
  outline: none;
  border: 0.2em solid;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition:
    background 0.3s,
    color 0.3s,
    border-color 0.3s;

  border-radius: 0.5em;
  &.capsule {
    border-radius: 999999px;
  }

  @include useTheme {
    border-color: getTheme('color');
    background: getTheme('background');
    color: getTheme('color');
  }
  &:focus,
  &:active {
    @include useTheme {
      border-color: getTheme('active-color');
      background: getTheme('background');
      color: getTheme('active-color');
    }
  }
  &:hover {
    @include useTheme {
      border-color: getTheme('active-color');
      background: getTheme('active-color');
      color: getTheme('background');
    }
  }
  &:disabled {
    pointer-events: none;
    user-select: none;
    @include useTheme {
      border-color: color.mix(getTheme('color'), getTheme('background'), 40%);
      color: color.mix(getTheme('color'), getTheme('background'), 40%);
    }
  }
}
</style>
