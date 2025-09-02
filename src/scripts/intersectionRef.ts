import type { Ref } from 'vue';

export type intersectionData = {
  intersectionRatio?: number;
  isIntersecting?: boolean;
};
export default function intersectionRef(dom: HTMLElement, refValue: Ref<intersectionData>) {
  const result = refValue || ref({});
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      result.value = {
        intersectionRatio: entry.intersectionRatio,
        isIntersecting: entry.isIntersecting,
      };
    });
  });
  observer.observe(dom);
  return result;
}
