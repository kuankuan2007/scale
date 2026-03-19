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
  @include motion.transition(background 0.3s, color 0.3s, border-color 0.3s);

  border-radius: 0.5em;
  &.capsule {
    border-radius: 999999px;
  }

  @include theme.use {
    border-color: theme.get('color');
    background: transparent;
    color: theme.get('color');
  }
  &:focus,
  &:active {
    @include theme.use {
      border-color: theme.get('active-color');
      background: theme.get('background');
      color: theme.get('active-color');
    }
  }
  &:hover {
    @include theme.use {
      border-color: theme.get('active-color');
      background: theme.get('active-color');
      color: theme.get('background');
    }
  }
  &:disabled {
    pointer-events: none;
    user-select: none;
    @include theme.use {
      border-color: color.mix(theme.get('color'), theme.get('background'), 40%);
      color: color.mix(theme.get('color'), theme.get('background'), 40%);
    }
  }
}
</style>
