<template>
  <div class="form-item form-choice">
    <div class="questions-box">
      <div class="question-id">{{ id }}.</div>
      <div class="content-box">
        <p class="question">{{ config.question }}</p>
        <p v-if="config.questionDescription" class="question-description">
          {{ config.questionDescription }}
        </p>
      </div>
    </div>
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
import type { ChoiceFormConfig } from '@/types/form';
const value = defineModel<number | undefined>();
defineProps<{
  config: ChoiceFormConfig;
  id: string;
  readonly: boolean;
}>();
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;

.questions-box {
  display: flex;
  column-gap: 0.5em;
  margin-bottom: 0.5em;
}

.question {
  margin: 0;
}
.question-description {
  margin: 0;
  opacity: 0.6;
  font-size: 0.8em;
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
    cursor: pointer;
  }
  .readonly {
    cursor: default;
    @media screen {
      opacity: 0.7;
    }
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
  @include theme.use {
    border-color: theme.get('color');
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 0.3em solid;
    opacity: 0;
    @include motion.transition(0.3s);
    @include theme.use {
      border-color: theme.get('active-color');
    }
  }
  &:checked {
    @include theme.use {
      border-color: theme.get('active-color');
    }
    &::before {
      opacity: 1;
    }
  }
  &:focus {
    @include theme.use {
      border-color: theme.get('active-color');
    }
  }
}
</style>
