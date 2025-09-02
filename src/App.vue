<template>
  <div class="app-root" :class="{ fullscreen: fullscreen }">
    <page-header :hide="hideHeader" />
    <div class="app-body">
      <router-view
        v-model:titleValue="title"
        v-model:fullscreen="fullscreen"
        v-model:hide-header="hideHeader"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { title, fullscreen, hideHeader } from './router';
import PageHeader from '@/components/PageHeader.vue';
</script>
<style scoped lang="scss">
.app-root {
  padding-top: 3.5em;
  &.fullscreen {
    padding-top: 0;
  }
  position: relative;
}
</style>
