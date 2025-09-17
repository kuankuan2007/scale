<template>
  <div class="scale-index">
    <div class="title-line">
      <h2 class="title">量表</h2>
      <div class="tag-filter">
        <div class="trigger" tabindex="0">标签 <k-icon id="funnel" inline /></div>
        <div class="tag-list-box" ref="tagListBox">
          <div class="required-tags tag-list-outer">
            <div class="list-name">包含</div>
            <ul class="tag-list">
              <li v-for="i in tagList" :key="i">
                <check-button
                  :model-value="tagFilter[i] === 'REQUIRED'"
                  @update:model-value="tagFilter[i] = $event ? 'REQUIRED' : 'OPTIONAL'"
                  >{{ i }}</check-button
                >
              </li>
            </ul>
          </div>
          <div class="gap"></div>
          <div class="excluded-tags tag-list-outer">
            <div class="list-name">排除</div>
            <ul class="tag-list">
              <li v-for="i in tagList" :key="i">
                <check-button
                  :model-value="tagFilter[i] === 'EXCLUDED'"
                  @update:model-value="tagFilter[i] = $event ? 'EXCLUDED' : 'OPTIONAL'"
                  >{{ i }}</check-button
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="scale-list">
      <transition-group name="scale-list">
        <div class="scale-item" v-for="scale in showScale" :key="scale.id">
          <router-link class="scale-link" :to="`/scale/${scale.id}`">
            <p class="scale-name">{{ scale.name }}</p>
            <p class="scale-desc">{{ scale.description }}</p>
            <div class="tage-list" v-if="scale.tags.length">
              <div class="tag" v-for="i in scale.tags" :key="i">{{ i }}</div>
            </div>
            <div class="id">{{ scale.id.toUpperCase() }}</div>
          </router-link>
        </div>
      </transition-group>
    </div>
  </div>
</template>
<script setup lang="ts">
import _scaleIndexData from 'visual:scales-index';
import KIcon from '@/components/KIcon.vue';
import CheckButton from '@/components/CheckButton.vue';
import { RouterLink } from 'vue-router';
import { windowSize } from '@/scripts/sizeRef';
const tagListBox = useTemplateRef('tagListBox');
const scaleIndexData = reactive(_scaleIndexData);

const tagFilter = reactive<Record<string, 'REQUIRED' | 'OPTIONAL' | 'EXCLUDED'>>({});

const showScale = computed(() => {
  const res: ScaleIndexItem[] = [];
  outer: for (const i of Object.values(scaleIndexData)) {
    for (const tag of Object.keys(tagFilter)) {
      if (tagFilter[tag] === 'REQUIRED' && !i.tags.includes(tag)) {
        continue outer;
      }
      if (tagFilter[tag] === 'EXCLUDED' && i.tags.includes(tag)) {
        continue outer;
      }
    }
    res.push(i);
  }
  return res;
});
const tagList = [
  ...new Set(
    Object.values(scaleIndexData)
      .map((i) => i.tags)
      .flat()
  ),
];

tagList.forEach((i) => (tagFilter[i] = 'OPTIONAL'));

onMounted(() => {
  watch(
    windowSize,
    () => {
      if (!tagListBox.value) return;

      tagListBox.value.style.left = 'auto';

      const rects = tagListBox.value.getBoundingClientRect();
      if (rects.left + rects.width > windowSize.value.width) {
        tagListBox.value.style.left = `${(windowSize.value.width * 0.9 - rects.left - rects.width).toFixed(2)}px`;
      }
    },
    {
      immediate: true,
      deep: true,
    }
  );
});
</script>
<style scoped lang="scss">
@use '@/styles/theme.scss' as *;
@use 'sass:color';
.scale-index {
  padding: 2em;
}
.title-line {
  border-bottom: 0.1em solid;
  font-size: 1.5em;
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 1em;
  & > h2 {
    margin: 0;
    padding: 0;
  }

  & > .tag-filter {
    position: relative;

    & > .trigger {
      outline: none;
      padding: 0.2em 0.5em;
      border-radius: 0.5em 0.5em 0 0;
      transition: background 0.3s;
    }
    &:focus-within > .trigger,
    &:hover > .trigger {
      @include useTheme {
        background: color.mix(getTheme('strong-color'), getTheme('background'), 10%);
      }
    }
    &:hover > .tag-list-box,
    &:focus-within > .tag-list-box {
      height: auto;
      @supports (height: calc-size(auto, size)) {
        height: calc-size(auto, size);
      }
    }
    & > .tag-list-box {
      font-size: 0.7em;
      z-index: 1;
      position: absolute;
      overflow: hidden;
      display: flex;

      flex-direction: column;

      transition: height 0.3s;
      justify-content: center;
      align-items: stretch;
      border-radius: 0 0.5em 0.5em 0.5em;
      width: 30em;
      max-width: 90vw;
      height: 0;
      @include useTheme {
        background: color.mix(getTheme('strong-color'), getTheme('background'), 10%);
      }
      .gap {
        border: none;
        border-right: 0.1em solid;
        border-bottom: 0.1em solid;
        margin: 1em;
        @include useTheme {
          border-color: getTheme('color');
        }
      }
      & > .tag-list-outer {
        padding: 0.5em;

        .list-name {
          text-align: center;
          margin-bottom: 0.5em;
        }
        .tag-list {
          padding: 0;
          margin: 0;
          list-style: none;
          justify-content: center;
          align-items: center;

          display: flex;
          flex-wrap: wrap;
          & > li {
            font-size: 0.5em;
            padding: 0.2em 0.3em;
          }
        }
      }
    }
  }
}
.scale-list {
  overflow: hidden;
  margin-top: 1em;
}
.scale-item {
  margin: 1em 0;
  padding: 1em;
  border-radius: 1em;
  transition: background 0.3s;
  break-inside: avoid;
  flex: 1 1 auto;
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
@media print {
  .scale-item {
    border: 0.2em solid;
    @include useTheme {
      border-color: rgba(getTheme('color'), 1);
    }
    .tag {
      border: 0.1em solid;
      @include useTheme {
        border-color: rgba(getTheme('color'), 1);
      }
    }
  }
}
.scale-link {
  text-decoration: none;
  outline: none;
  position: relative;
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
  .tage-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1em;
    gap: 1em;
    .tag {
      padding: 0.2em 0.5em;
      border-radius: 0.4em;

      @include useTheme {
        background: color.mix(getTheme('active-color'), getTheme('background'), 50%);
      }
    }
  }
  .id {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    opacity: 0.3;
  }
}
.scale-list-enter-active,
.scale-list-leave-active,
.scale-list-move {
  transition: all 0.5s ease;
}
.scale-list-leave-to {
  z-index: -1;
  opacity: 0;
  transform: scale(0.5);
}
.scale-list-enter-from {
  opacity: 0;
  transform: scale(0.5);
}
.scale-list-leave-active {
  position: absolute;
}
</style>
