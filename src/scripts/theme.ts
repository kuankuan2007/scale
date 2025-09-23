import storageRef from './storageRef';

export const themeValue = storageRef('auto', 'theme', localStorage);
export const themeValueList = ['auto', 'light', 'dark'];
const matcher = window.matchMedia('(prefers-color-scheme: dark)');

export const theme = computed(() => {
  if (themeValue.value === 'auto') {
    return matcher.matches ? 'dark' : 'light';
  }
  return themeValue.value;
});
function updateDomTheme() {
  document.documentElement.dataset.theme = theme.value;
}
watch(theme, updateDomTheme, { immediate: true });
