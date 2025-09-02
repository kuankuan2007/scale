<template>
  <div class="score-radar">
    <div class="score-radar-box">
      <div>
        <canvas ref="canvas" width="400" height="400" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { RadarMapScore } from '@/types/form';
import { sizeRef, devicePixelRatioRef } from '@/scripts/sizeRef';
const canvas = useTemplateRef('canvas');
const props = defineProps<{
  config: RadarMapScore;
}>();
const size = ref<{
  width: number;
  height: number;
}>({ width: 0, height: 0 });
function getPoint(
  center: { x: number; y: number },
  size: number,
  values: number[],
  valueFull: number
) {
  return values.map((v, i) => {
    const angle = (i / values.length) * Math.PI * 2;
    const len = (v / valueFull) * size;
    return {
      x: center.x + len * Math.sin(angle),
      y: center.y + len * Math.cos(angle),
    };
  });
}
function drawPoints(
  ctx: CanvasRenderingContext2D,
  center: { x: number; y: number },
  size: number,
  values: number[],
  valueFull: number,
  radius: number = 5
) {
  const points = getPoint(center, size, values, valueFull);
  points.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, radius * devicePixelRatioRef.value, 0, Math.PI * 2);
    ctx.fill();
  });
}
function drawPolygon(
  ctx: CanvasRenderingContext2D,
  center: { x: number; y: number },
  size: number,
  values: number[],
  valueFull: number
) {
  const points = getPoint(center, size, values, valueFull);
  ctx.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.lineTo(points[0].x, points[0].y);
}
function drawLines(
  ctx: CanvasRenderingContext2D,
  center: { x: number; y: number },
  size: number,
  lineNums: number
) {
  const points = getPoint(center, size, Array.from({ length: lineNums }).fill(1) as number[], 1);
  points.forEach((p) => {
    ctx.moveTo(center.x, center.y);
    ctx.lineTo(p.x, p.y);
  });
}
onMounted(() => {
  sizeRef(canvas.value!, size);
  watchEffect(() => {
    const ctx = canvas.value?.getContext('2d');
    const datas = props.config.values;
    if (!ctx || !datas.length) return;
    const width = size.value.width * devicePixelRatioRef.value;
    const height = size.value.height * devicePixelRatioRef.value;
    canvas.value!.width = width;
    canvas.value!.height = height;
    const center = {
      x: width / 2,
      y: height / 2,
    };
    const s = width * 0.4;
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 2 * devicePixelRatioRef.value;
    ctx.fillStyle = 'rgba(0, 0, 255, 0.1)';
    ctx.beginPath();
    drawPolygon(ctx, center, s, Array.from({ length: datas.length }).fill(5) as number[], 5);

    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#888';
    drawPoints(ctx, center, s, Array.from({ length: datas.length }).fill(5) as number[], 5);

    ctx.beginPath();
    ctx.strokeStyle = 'rgba(128, 128, 128, 0.2)';
    ctx.fillStyle = 'transparent';
    drawPolygon(ctx, center, s, Array.from({ length: datas.length }).fill(4) as number[], 5);
    drawPolygon(ctx, center, s, Array.from({ length: datas.length }).fill(3) as number[], 5);
    drawPolygon(ctx, center, s, Array.from({ length: datas.length }).fill(2) as number[], 5);
    drawPolygon(ctx, center, s, Array.from({ length: datas.length }).fill(1) as number[], 5);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(128, 128, 128, 0.4)';
    ctx.beginPath();
    drawLines(ctx, center, s, datas.length);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = '#fff';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
    drawPolygon(
      ctx,
      center,
      s,
      datas.map((i) => i.value),
      5
    );
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = '#fff';
    drawPoints(
      ctx,
      center,
      s,
      datas.map((i) => i.value),
      5,
      7
    );
  });
});
</script>
<style scoped lang="scss">
.score-radar {
  position: relative;
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  .score-radar-box {
    width: min(100%, 40em);
    overflow: auto;

    div {
      padding: 0 100% 100% 0;
      position: relative;
    }
  }
}
canvas {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
