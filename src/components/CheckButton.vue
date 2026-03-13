<template>
  <button :class="{ capsule, checked }" @click="checked = !checked" type="button" tabindex="-1">
    <div class="check-item">
      <slot name="check-item"><k-icon id="tick" inline /></slot>
    </div>
    <slot>Button</slot>
  </button>
</template>
<script setup lang="ts">
import KIcon from './KIcon.vue';

const checked = defineModel<boolean>();

withDefaults(defineProps<{ capsule?: boolean }>(), {
  capsule: false,
});
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;

button {
  appearance: none;
  padding: 0.5em 1.2em 0.5em 0.3em;
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
  .check-item {
    opacity: 0;
  }
  &.checked > .check-item {
    opacity: 1;
  }
  @include theme.use {
    border-color: theme.get('color');
    background: transparent;
    color: theme.get('color');
  }
  &.checked {
    @include theme.use {
      background: color.mix(theme.get('active-color'), theme.get('background'), 40%);
      border-color: color.mix(theme.get('active-color'), theme.get('background'), 40%);
    }
  }
  &:focus,
  &:hover {
    @include theme.use {
      border-color: rgba(theme.get('strong-color'), 80%);
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
