<template>
  <input class="k-text" placeholder="请输入内容" v-model="value" />
</template>
<script setup lang="ts">
const value = defineModel<string>();
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;
@use 'sass:color';
.k-text {
  outline: none;
  padding: 0.5em 1em;
  border: none;
  background: transparent;
  transition: background 0.3s;
  border-radius: 0.5em;

  font-size: 1em;
  @include useTheme {
    color: getTheme('color');
    background: color.mix(getTheme('active-color'), getTheme('background'), 10%);
  }
  &:focus {
    @include useTheme {
      background: color.mix(getTheme('strong-color'), getTheme('background'), 10%);
    }
  }
  &:hover {
    @include useTheme {
      background: color.mix(getTheme('active-color'), getTheme('background'), 30%);
    }
  }
}
</style>
