<template>
  <div class="icon" :class="{ inline }">{{ String.fromCharCode(fontelloData[id]!) }}</div>
</template>
<script setup lang="ts">
import fontelloData from '@/assets/fontello/data';
defineProps({
  id: {
    required: true,
    type: String,
  },
  inline: {
    type: Boolean,
    default: false,
  },
});
</script>
<style scoped lang="scss">
@use '@/assets/fontello/fontello.scss';
:root div.icon {
  @include fontello.fontello;
  user-select: none;
  display: block;
  width: 1em;
  height: 1em;
  line-height: 1em;
  &.inline {
    display: inline;
  }
}
</style>
