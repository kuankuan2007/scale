<template>
  <div class="score-lines">
    <div class="draw-box">
      <canvas ref="canvas"></canvas>
    </div>
    <div class="names">
      <div class="name-box" v-for="item in props.config.splitLinesData" :key="item">
        <div class="name-box-inner">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computedSizeRef, devicePixelRatioRef } from '@/scripts/sizeRef';
import type { LinesScore } from '@/types/form';

const props = defineProps<{
  config: LinesScore;
}>();
const canvas = useTemplateRef('canvas');
const size = computedSizeRef(canvas);

onMounted(() => {
  watchEffect(() => {
    const ctx = canvas.value?.getContext('2d');
    const datas = props.config;
    const canvasSize = size.value;
    const devicePixelRatio = devicePixelRatioRef.value;
    if (!ctx || !datas || !canvasSize) return;
    const lineWidth = 2 * devicePixelRatio;
    canvas.value!.width = canvasSize.width;
    canvas.value!.height = canvasSize.height;

    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.lineWidth = lineWidth;
    ctx.fillStyle = 'rgba(0, 0, 255, 0.1)';
    ctx.fillRect(0, 0, canvasSize.width, canvasSize.height);
    ctx.strokeStyle = '#888';

    for (let i = datas.min; i <= datas.max; i += datas.step || 1) {
      const y = ((i - datas.min) / (datas.max - datas.min)) * canvasSize.height;
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvasSize.width, y);
      ctx.stroke();
    }
    ctx.lineWidth = 2 * lineWidth;
    ctx.strokeStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(0, canvasSize.height);
    ctx.lineTo(canvasSize.width, canvasSize.height);
    ctx.stroke();
    ctx.lineWidth = lineWidth;

    ctx.strokeStyle = '#888';
    const splitLines = datas.splitLines || datas.values?.[0].values.length;
    if (splitLines) {
      for (let i = 0; i < splitLines; i++) {
        const x = (i / (splitLines - 1)) * canvasSize.width;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvasSize.height);
        ctx.stroke();
      }
    }

    for (const i of datas.values) {
      ctx.fillStyle = i.fill || 'rgba(0,0,255,0.2)';
      ctx.strokeStyle = i.stroke || '#00f';
      ctx.beginPath();
      ctx.moveTo(0, canvasSize.height);

      for (let j = 0; j < i.values.length; j++) {
        ctx.lineTo(
          (j / (i.values.length - 1)) * canvasSize.width,
          ((datas.max - i.values[j]) / (datas.max - datas.min)) * canvasSize.height
        );
      }
      ctx.stroke();
      ctx.lineTo(canvasSize.width, canvasSize.height);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = ctx.strokeStyle;
      for (let j = 0; j < i.values.length; j++) {
        ctx.arc(
          (j / (i.values.length - 1)) * canvasSize.width,
          ((datas.max - i.values[j]) / (datas.max - datas.min)) * canvasSize.height,
          3 * lineWidth,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  });
});
</script>
<style scoped lang="scss">
.score-lines {
  padding: 2em;
}
.draw-box {
  display: flex;
  justify-content: stretch;
  canvas {
    flex: 1 1 0;
    height: 15em;
    width: 100%;
  }
}
.names {
  display: flex;
  justify-content: space-between;
  & > .name-box {
    width: 0;
    height: 2.5em;
    & > .name-box-inner {
      text-align: center;
      position: absolute;
      transform: translate(-50%);
      white-space: pre-wrap;
    }
  }
}
</style>
