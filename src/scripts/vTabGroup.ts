import type { Directive } from 'vue';

const eleMap = new WeakMap<HTMLElement, NodeListOf<HTMLElement>>();

function updateEleMap(el: HTMLElement) {
  const items = el.querySelectorAll('[data-tab-group-item]');
  items.forEach((item, index) => {
    item.setAttribute('tabindex', index === 0 ? '0' : '-1');
  });
  eleMap.set(el, items as never);
}
function focusFrom(el: HTMLElement, current: HTMLElement, offset: number) {
  const items = eleMap.get(el);
  if (!items) return;
  const itemsArr = Array.from(items);
  const index = itemsArr.indexOf(current);
  if (index === -1) return;
  let nextIndex = index + offset;
  if (nextIndex < 0) nextIndex = (nextIndex % itemsArr.length) + itemsArr.length;
  if (nextIndex >= itemsArr.length) nextIndex = nextIndex % itemsArr.length;
  itemsArr[nextIndex]!.focus();
}

const vTabGroup: Directive<HTMLElement> = {
  mounted(el) {
    updateEleMap(el);
    el.addEventListener('keydown', (e) => {
      if (
        e.key === 'ArrowDown' ||
        e.key === 'ArrowRight' ||
        e.key === 'ArrowUp' ||
        e.key === 'ArrowLeft'
      ) {
        e.preventDefault();
        e.stopPropagation();
        focusFrom(
          el,
          e.target as HTMLElement,
          e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : -1
        );
      }
      if (e.key === 'Tab' && e.shiftKey) {
        el.tabIndex = -1;
        setTimeout(() => {
          el.tabIndex = 0;
        });
      }
    });
  },
  updated(el) {
    updateEleMap(el);
  },
};
export default vTabGroup;
