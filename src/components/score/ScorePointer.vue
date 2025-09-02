<template>
  <div class="score-pointer">
    <div class="part-list">
      <div
        class="part"
        v-for="(item, index) in config.part"
        :key="index"
        :style="{
          background: item.color,
          left: ((item.start - range.min) / (range.max - range.min)) * 100 + '%',
          width: ((item.end - item.start) / (range.max - range.min)) * 100 + '%',
        }"
      ></div>
    </div>
    <div
      class="now"
      :style="{ left: ((config.value - range.min) / (range.max - range.min)) * 100 + '%' }"
    >
      <div class="pointer"></div>
      <div class="score-number" :style="{ background: nowColor }">
        {{ config.value }}
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
  let min = Infinity;
  let max = -Infinity;
  props.config.part.forEach((item) => {
    min = Math.min(min, item.start);
    max = Math.max(max, item.end);
  });
  return { min, max };
});
const nowColor = computed(() => {
  const part = props.config.part.find(
    (item) => props.config.value >= item.start && props.config.value <= item.end
  );
  return part?.color;
});
</script>
<style scoped lang="scss">
@use 'sass:color';
@use '@/styles/theme' as *;

.score-pointer {
  height: 1.5em;

  position: relative;
  margin: 1.8em 1em;

  .part-list {
    border-radius: 99999999px;
    overflow: hidden;
    inset: 0;
    position: absolute;
    @include useTheme {
      background: color.mix(getTheme('color'), getTheme('active-color'), 50%);
    }
    .part {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
  .now {
    position: absolute;
    height: 100%;
    .pointer {
      position: absolute;
      height: 1.5em;
      width: 1.5em;
      top: 0;
      transform: translate(-50%, -100%);
      clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
      @include useTheme {
        background: rgba(getTheme('color'), 0.5);
      }
    }
    .score-number {
      position: absolute;
      top: 110%;
      left: 50%;
      transform: translate(-50%, 0);
      font-size: 0.8em;
      font-size: 1.3em;
      padding: 0 1em;
      border-radius: 999999px;
    }
  }
}
</style>
