<template>
  <button
    :class="{ capsule, checked, excluded }"
    @click="checked = !checked"
    type="button"
    tabindex="-1"
  >
    <div class="check-item">
      <slot name="check-item"><k-icon :id="excluded ? 'cross' : 'tick'" /></slot>
    </div>
    <div class="button-text"><slot>Button</slot></div>
  </button>
</template>
<script setup lang="ts">
import KIcon from './KIcon.vue';

const checked = defineModel<boolean>();

withDefaults(defineProps<{ capsule?: boolean; excluded?: boolean }>(), {
  capsule: false,
  excluded: false,
});
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;

button {
  appearance: none;
  padding: 0.2em 0.2em;
  outline: none;
  border: 0.1em solid;
  cursor: pointer;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.2em;
  @include motion.transition(background 0.3s, color 0.3s, border-color 0.3s);

  border-radius: 0.3em;
  &.capsule {
    border-radius: 999999px;
  }
  .check-item {
    opacity: 0;
  }
  .button-text {
    transform: translate(-0.6em, 0);
    @include motion.transition(transform 0.3s);
  }
  &.checked,
  &.excluded {
    & > .check-item {
      opacity: 1;
    }
    & > .button-text {
      transform: translate(0, 0);
    }
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
      border-color: theme.mix(theme.get('active-color'), theme.get('color'), 60%, 80%);
    }
  }

  &.excluded {
    & > .button-text {
      text-decoration: line-through;
    }
    @include theme.use {
      background: color.mix(theme.get('strong-color'), theme.get('background'), 40%);
      border-color: color.mix(theme.get('strong-color'), theme.get('background'), 40%);
    }
    &:focus,
    &:hover {
      @include theme.use {
        border-color: theme.mix(theme.get('strong-color'), theme.get('color'), 60%, 80%);
      }
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
