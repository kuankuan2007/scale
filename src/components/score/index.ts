import ScorePointer from './ScorePointer.vue';
import { defineAsyncComponent } from 'vue';

const ScoreRadar = defineAsyncComponent(() => import('./ScoreRadar.vue'));
const ScoreLines = defineAsyncComponent(() => import('./ScoreLines.vue'));

export default {
  pointer: ScorePointer,
  radar: ScoreRadar,
  lines: ScoreLines,
};
