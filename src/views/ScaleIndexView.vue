<template>
  <div class="scale-index">
    <div class="title-line">量表</div>
    <div class="list">
      <div class="scale-item" v-for="scale in scaleIndexData" :key="scale.id">
        <router-link class="scale-link" :to="`/scale/${scale.id}`">
          <p class="scale-name">{{ scale.name }}</p>
          <p class="scale-desc">{{ scale.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import scaleIndexData from 'visual:scales-index';
import { RouterLink } from 'vue-router';
</script>
<style scoped lang="scss">
@use '@/styles/theme.scss' as *;
@use 'sass:color';
.scale-index {
  padding: 2em;
}
.title-line {
  border-bottom: 0.1em solid;
  font-size: 2em;
  @include useTheme {
    border-color: getTheme('color');
  }
}
.list {
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
  align-items: start;
}
.scale-item {
  padding: 1em;
  border-radius: 1em;
  transition: background 0.3s;
  @include useTheme {
    background: color.mix(getTheme('active-color'), getTheme('background'), 10%);
  }
  &:focus-within {
    @include useTheme {
      background: color.mix(getTheme('active-color'), getTheme('background'), 20%);
    }
  }
  &:hover {
    @include useTheme {
      background: color.mix(getTheme('active-color'), getTheme('background'), 30%);
    }
  }
}
.scale-link {
  text-decoration: none;
  outline: none;
  @include useTheme {
    color: getTheme('color');
  }
  .scale-desc {
    text-overflow: ellipsis;
    padding: 1em;
  }
  .scale-name {
    font-size: 1.8em;
    font-weight: bold;
    padding: 0.2em 0;
  }
  p {
    margin: 0;
  }
}
</style>
