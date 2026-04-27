<template>
  <div class="score-pointer">
    <div class="bar">
      <div
        v-for="item in config.part"
        :key="item.start"
        class="bar-item"
        :style="{
          background: item.color,
          left: `${((item.start - range.min) / (range.max - range.min)) * 100}%`,
          width: `${((item.end - item.start) / (range.max - range.min)) * 100}%`,
        }"
      ></div>
      <div class="bar-start bar-ball" :style="{ background: range.startColor }"></div>
      <div class="bar-end bar-ball" :style="{ background: range.endColor }"></div>
      <div class="pointer">
        <div
          class="line"
          :style="{ left: `${((config.value - range.min) / (range.max - range.min)) * 100}%` }"
        ></div>
        <div
          class="value"
          :style="{ left: `${((config.value - range.min) / (range.max - range.min)) * 100}%` }"
        >
          {{ config.value }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { PointerScore } from '@/types/form';

const props = defineProps<{
  config: PointerScore;
}>();

const range = computed(() => {
  let max = -Infinity,
    min = Infinity,
    startColor = '',
    endColor = '';
  for (const item of props.config.part) {
    if (item.start < min) {
      min = item.start;
      startColor = item.color;
    }
    if (item.end > max) {
      max = item.end;
      endColor = item.color;
    }
  }
  return { max, min, startColor, endColor };
});
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;

.score-pointer {
  padding: 2em;
}
.bar {
  position: relative;
  height: 2em;
  margin: 0 1em;
  .bar-item {
    top: 0;
    position: absolute;
    height: 100%;
    @media print {
      border: 0.2em solid;
      @include theme.use {
        border-color: theme.get('color');
      }
      box-sizing: border-box;
    }
  }
  .bar-ball {
    @media print {
      opacity: 0;
    }
    width: 2em;
    height: 2em;
    border-radius: 50%;
    top: 0;
    position: absolute;
    transform: translate(-50%, 0);
    &.bar-start {
      left: 0;
    }
    &.bar-end {
      left: 100%;
    }
  }
  .pointer {
    .line {
      width: 0.2em;
      height: 3em;
      @include theme.use {
        background: theme.get('color');
      }
      @media print {
        border: solid 0.2em;
        @include theme.use {
          border-color: theme.get('color');
        }
      }
      top: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
    }
    .value {
      position: absolute;
      top: 120%;
      transform: translate(-50%, 0);
      font-size: 1.5em;
      @include theme.use {
        color: theme.get('color');
      }
    }
  }
}
</style>
