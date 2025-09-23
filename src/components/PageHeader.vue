<template>
  <header class="header" :class="{ hidden: hide }">
    <p class="title">{{ title }}</p>
    <button class="theme-button clear" @click="changeToNextTheme">
      <k-icon
        :id="
          {
            auto: 'os-follow',
            light: 'light',
            dark: 'night',
          }[themeValue]!
        "
        class="theme-button-icon"
      />
    </button>
  </header>
</template>
<script setup lang="ts">
import { title } from '@/router';
import KIcon from './KIcon.vue';
import { themeValue, themeValueList } from '@/scripts/theme';

function changeToNextTheme() {
  themeValue.value =
    themeValueList[(themeValueList.indexOf(themeValue.value) + 1) % themeValueList.length];
}

defineProps<{
  hide?: boolean;
}>();
</script>
<style scoped lang="scss">
@use '@/styles/theme.scss' as *;
@use 'sass:color';

@media print {
  header {
    display: none;
    opacity: 0;
  }
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: transform 0.3s ease-in-out;
  overflow: scroll;
  scrollbar-width: none;

  @include useTheme {
    background: rgba(color.mix(getTheme('background'), getTheme('active-color'), 85%), 0.95);
  }
  @supports (backdrop-filter: blur(1em)) {
    backdrop-filter: blur(1em);
    @include useTheme {
      background: rgba(color.mix(getTheme('background'), getTheme('active-color'), 85%), 0.7);
    }
  }
  * {
    margin: 0;
  }
  .title {
    font-size: 2em;
    font-weight: bold;
    flex: 0 1 auto;
    white-space: nowrap;
    word-break: keep-all;
    margin: auto;
    overflow-x: auto;
    &::-webkit-scrollbar {
      background: transparent;
      height: 0.3em;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 99999999px;
      @include useTheme {
        background: color.mix(getTheme('color'), getTheme('background'), 60%);
      }
    }
  }
  button {
    font-size: 2em;
    &.clear {
      appearance: none;
      all: unset;
      font-size: 2em;
      cursor: pointer;
      transition: 0.3s;
      padding: 0.1em;
      border: 0.1em solid transparent;
      border-radius: 0.3em;

      &:focus {
        @include useTheme {
          border-color: getTheme('active-color');
        }
      }
      &:hover {
        @include useTheme {
          color: getTheme('active-color');
        }
      }
    }
  }

  &.hidden {
    transform: translate(0, -100%);
  }
}
</style>
