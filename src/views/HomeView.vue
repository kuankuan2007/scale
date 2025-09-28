<template>
  <div class="home-view">
    <div class="pages">
      <div class="page-1">
        <div
          class="main-icon"
          :style="{
            width: `${windowSize.min / 2}px`,
            height: `${windowSize.min / 2}px`,
          }"
        >
          <div class="icon-inner">
            <div
              class="styles"
              :style="{
                transform: `scale(${windowSize.min / 2 / 600})`,
              }"
            >
              <img src="@/assets/logo.svg" alt="icon" />
              <canvas class="wave-1 wave" ref="canvasRef1" width="1200" height="600"></canvas>
              <canvas class="wave-2 wave" ref="canvasRef2" width="1200" height="600"></canvas>
              <canvas class="wave-3 wave" ref="canvasRef3" width="1200" height="600"></canvas>
            </div>
          </div>
        </div>
        <div class="text">
          <h1 class="title">这是一个由宽宽编写的页面<br />用于提供简单的心理量表</h1>
          <p class="description">我们不创造量表，我们只是量表的搬运工</p>
          <p class="warn"><k-icon id="warn" inline /> 本页面所有量表仅供参考，不具有临床意义</p>
          <p class="start">
            <a href="/scale">Start <k-icon id="right" inline /></a>
          </p>
          <p class="links">
            <a href="/about">关于</a> | <a href="https://github.com/kuankuan2007/scale">仓库</a> |
            <a href="https://opensource.org/license/mpl-2-0">许可证</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { windowSize } from '@/scripts/sizeRef';
import KIcon from '@/components/KIcon.vue';

const hideHeader = defineModel<boolean>('hideHeader');
const fullscreen = defineModel<boolean>('fullscreen');

fullscreen.value = true;
hideHeader.value = true;
const canvasRef1 = useTemplateRef<HTMLCanvasElement>('canvasRef1');
const canvasRef2 = useTemplateRef<HTMLCanvasElement>('canvasRef2');
const canvasRef3 = useTemplateRef<HTMLCanvasElement>('canvasRef3');

function drawWave(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  heightScale: number,
  period: number,
  offset: number
) {
  ctx.beginPath();
  for (let x = 0; x < width; x++) {
    const y = height + +Math.sin(((x + offset) * Math.PI) / period) * heightScale;
    ctx.lineTo(x, y);
  }
  ctx.lineTo(ctx.canvas.width, ctx.canvas.height);
  ctx.lineTo(0, ctx.canvas.height);
  ctx.closePath();
}
function framCallback(
  refValue: Ref<HTMLCanvasElement | null>,
  height: number,
  heightScale: number,
  period: number,
  offset: number
) {
  if (refValue.value === null) {
    return false;
  }
  const ctx = refValue.value.getContext('2d');

  if (!ctx) {
    return false;
  }
  console.log('framCallback');
  const gr = ctx.createLinearGradient(0, 0, 0, 600);
  gr.addColorStop(0, 'rgb(255,255,255,0.15)');
  gr.addColorStop(1, 'rgb(255,255,255,0)');
  ctx.clearRect(0, 0, refValue.value.width, refValue.value.height);
  ctx.fillStyle = gr;
  drawWave(ctx, refValue.value.width, height, heightScale, period, offset);
  ctx.fill();
  return true;
}
function startFramCallback(
  canvasRef: Ref<HTMLCanvasElement | null>,
  height: number,
  heightScale: number,
  period: number,
  offset: number
) {
  let res = false;
  try {
    res = framCallback(canvasRef, height, heightScale, period, offset);
  } catch {
    res = false;
  }
  if (!res) {
    requestAnimationFrame(() => startFramCallback(canvasRef, height, heightScale, period, offset));
  }
}
onMounted(() => {
  startFramCallback(canvasRef1, 200, 40, 300, 0);
  startFramCallback(canvasRef2, 240, 30, 300, 200);
  startFramCallback(canvasRef3, 250, 80, 300, 200);
});
</script>
<style scoped lang="scss">
.pages {
  & > * {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
}
.main-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .icon-inner {
    position: relative;
    filter: drop-shadow(0px 0px 100px #ff1960);
    .styles {
      position: absolute;
      width: 600px;
      height: 600px;

      filter: drop-shadow(0, 0, 100px, red);

      position: relative;
      overflow: hidden;
      clip-path: path(
        'm441.7111,30.7486c-102.6737,0-141.711,73.2621-141.711,73.2621,0,0-39.0376-73.2621-141.7113-73.2621S0,121.6578,0,192.7808s23.0087,123.1699,100,211.7647c72.8969,83.883,200.0002,164.7059,200.0002,164.7059,0,0,127.103-80.8229,199.9999-164.7059,76.9912-88.5947,100-140.6417,100-211.7647S544.3851,30.7486,441.7111,30.7486Z'
      );

      img {
        width: 600px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      @keyframes wave {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(-50%, 0);
        }
      }
      @keyframes wave-interval {
        0% {
          transform: translate(-50%, 0);
        }
        100% {
          transform: translate(0, 0);
        }
      }
      .wave {
        position: absolute;
        top: 0;
        left: 0;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
      .wave-1 {
        animation-name: wave;
        animation-duration: 6s;
        opacity: 0.6;
      }
      .wave-2 {
        animation-name: wave-interval;
        animation-duration: 7s;
      }
      .wave-3 {
        animation-name: wave;
        opacity: 0.6;

        animation-duration: 10s;
      }
    }
  }
}
.page-1 {
  text-align: center;
  justify-content: space-evenly;
  .text {
    font-size: min(3vw, 2rem, 2.5vh);
    .start > a {
      text-decoration: none;
    }
    .links {
      font-size: 0.6em;
    }
  }
}
</style>
