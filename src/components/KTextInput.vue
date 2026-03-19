<template>
  <input class="k-text" placeholder="请输入内容" v-model="value" />
</template>
<script setup lang="ts">
const value = defineModel<string>();
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;

.k-text {
  outline: none;
  padding: 0.5em 1em;
  border: none;
  background: transparent;
  @include motion.transition(background 0.3s);

  border-radius: 0.5em;

  font-size: 1em;
  @include theme.use {
    color: theme.get('color');
    background: color.mix(theme.get('active-color'), theme.get('background'), 10%);
  }
  &:focus {
    @include theme.use {
      background: color.mix(theme.get('strong-color'), theme.get('background'), 10%);
    }
  }
  &:hover {
    @include theme.use {
      background: color.mix(theme.get('active-color'), theme.get('background'), 30%);
    }
  }
}
</style>
