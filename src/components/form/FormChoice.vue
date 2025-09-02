<template>
  <div class="form-item form-choice">
    <p class="question">{{ id }}. {{ config.question }}</p>
    <div class="result-list">
      <label
        class="result-item"
        :class="{ readonly }"
        v-for="(choice, index) in config.choices"
        :key="choice"
        ><input
          type="radio"
          :value="choice"
          v-model="value"
          :name="id"
          :checked="value === index"
          :data-id="index"
          @change="value = index"
          :disabled="readonly"
        />{{ choice }}</label
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import type { FormConfig } from '@/types/form';
const value = defineModel<number | undefined>();
defineProps<{
  config: FormConfig;
  id: string;
  readonly: boolean;
}>();
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;
@use 'sass:color';

.question {
  margin: 0;
}
.result-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 2em;
  * {
    margin-right: 1em;
  }
  .result-item {
    user-select: none;
    cursor: pointer;
  }
  .readonly {
    cursor: default;
    opacity: 0.7;
  }
}
input[type='radio'] {
  appearance: none;
  width: 1.2em;
  height: 1.2em;
  position: relative;
  border: 0.2em solid;
  border-radius: 50%;
  outline: none;
  @include useTheme {
    border-color: getTheme('color');
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 0.6em;
    height: 0.6em;
    opacity: 0;
    transition: 0.3s;
    @include useTheme {
      background: getTheme('active-color');
    }
  }
  &:checked {
    @include useTheme {
      border-color: getTheme('active-color');
    }
    &::before {
      opacity: 1;
    }
  }
  &:focus {
    @include useTheme {
      border-color: getTheme('active-color');
    }
  }
}
</style>
