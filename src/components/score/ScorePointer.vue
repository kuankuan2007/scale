<template>
  <div class="score-pointer">
    <div class="draw-box">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computedSizeRef } from '@/scripts/sizeRef';
import type { PointerScore } from '@/types/form';

const props = defineProps<{
  config: PointerScore;
}>();
const canvas = useTemplateRef('canvas');
const size = computedSizeRef(canvas);

onMounted(() => {
  watchEffect(() => {
    const ctx = canvas.value?.getContext('2d');
    const datas = props.config;
    const canvasSize = size.value;
    if (!ctx || !datas || !canvasSize) return;
    canvas.value!.width = canvasSize.width;
    canvas.value!.height = canvasSize.height;
    const boxHeight = canvasSize.height / 3;
    const nowColor =
      datas.part.find((i) => i.start <= datas.value && i.end >= datas.value)?.color || '#888';

    const min = datas.part[0]!.start,
      max = datas.part[datas.part.length - 1]!.end;

    ctx.beginPath();
    ctx.fillStyle = datas.part[0]!.color;
    ctx.arc(boxHeight / 2, boxHeight * 1.5, boxHeight / 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = datas.part[datas.part.length - 1]!.color;
    ctx.arc(canvasSize.width - boxHeight / 2, boxHeight * 1.5, boxHeight / 2, 0, Math.PI * 2);
    ctx.fill();

    const boxRange = canvasSize.width - boxHeight;
    for (const i of datas.part) {
      ctx.beginPath();
      ctx.fillStyle = i.color;
      ctx.fillRect(
        ((i.start - min) / (max - min)) * boxRange + boxHeight / 2,
        boxHeight,
        ((i.end - i.start) / (max - min)) * boxRange,
        boxHeight
      );
    }
    const now = ((datas.value - min) / (max - min)) * boxRange + boxHeight / 2;
    ctx.beginPath();
    ctx.fillStyle = nowColor;
    ctx.lineWidth = 0;
    ctx.moveTo(now, boxHeight * 0.8);
    ctx.lineTo(now - boxHeight / 2, 0);
    ctx.lineTo(now + boxHeight / 2, 0);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';
    ctx.font = `${boxHeight * 0.8}px sans-serif`;
    ctx.fillText(
      datas.value % 1 === 0 ? datas.value.toFixed(0) : datas.value.toFixed(2),
      now,
      boxHeight * 2.1
    );
  });
});
</script>
<style scoped lang="scss">
@use 'sass:color';
@use '@/styles/theme' as *;

.score-pointer {
  padding: 2em;
}
.draw-box {
  display: flex;
  justify-content: stretch;
  canvas {
    flex: 1 1 0;
    height: 6em;
    width: 100%;
  }
}
</style>
