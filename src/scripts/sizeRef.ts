import type { Ref } from 'vue';

export const devicePixelRatioRef = ref(window.devicePixelRatio);
const dprMatcher = computed(() =>
  window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
);
function updateDPR() {
  console.log('DPR changed', window.devicePixelRatio);
  devicePixelRatioRef.value = window.devicePixelRatio;
}
watch(
  dprMatcher,
  (matcher, oldMatcher) => {
    matcher.addEventListener('change', updateDPR);
    oldMatcher?.removeEventListener('change', updateDPR);
  },
  { immediate: true }
);
export function sizeRef(dom: HTMLElement, refValue?: Ref<{ width: number; height: number }>) {
  const size = refValue || ref<{ width: number; height: number }>({ width: 0, height: 0 });
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      size.value.width = entry.contentRect.width;
      size.value.height = entry.contentRect.height;
    }
  });
  resizeObserver.observe(dom);
  return size;
}
export const windowSize = ref({
  width: window.innerWidth,
  height: window.innerHeight,
  min: Math.min(window.innerWidth, window.innerHeight),
  max: Math.max(window.innerWidth, window.innerHeight),
});
window.addEventListener('resize', () => {
  windowSize.value.width = window.innerWidth;
  windowSize.value.height = window.innerHeight;
  windowSize.value.min = Math.min(window.innerWidth, window.innerHeight);
  windowSize.value.max = Math.max(window.innerWidth, window.innerHeight);
});
