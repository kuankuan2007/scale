<template>
  <main class="scale-index">
    <div class="title-line">
      <h2 class="title">量表</h2>
      <div class="tag-filter">
        <div class="trigger">
          标签 <k-icon id="funnel" inline /><span class="tag-filter-num" v-show="tagFilterNum"
            >{{ tagFilterNum }}个条件</span
          >
        </div>
        <div class="tag-list-box" ref="tagListBox">
          <div class="legend">
            <span><k-icon id="tick" inline /> 包含</span>
            <span><k-icon id="cross" inline /> 排除</span>
            <span>点击切换</span>
          </div>
          <table class="tag-groups" v-tab-group>
            <tbody>
              <tr v-for="group in TAG_GROUP_VIEWS" :key="group.key">
                <td class="group-name">{{ group.name }}</td>
                <td class="tag-list">
                  <ul>
                    <li v-for="item in group.items" :key="item.value">
                      <check-button
                        :model-value="tagFilter[item.value] === 'REQUIRED'"
                        :excluded="tagFilter[item.value] === 'EXCLUDED'"
                        @update:model-value="cycleTag(item.value)"
                        data-tab-group-item
                        >{{ item.label }}</check-button
                      >
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="search">
        <k-text-input
          placeholder="搜索"
          type="search"
          :model-value="searchText"
          @update:model-value="onSearchInput"
        />
        <k-icon id="search" />
      </div>
    </div>
    <hr />
    <div class="scale-list" ref="scaleList">
      <transition-group name="scale-list" :duration="1000" tag="ul" class="scale-item-container">
        <li class="scale-item" v-for="scale in showScale" :key="scale.id">
          <router-link class="scale-link" :to="`/scale/${scale.id}`">
            <p class="scale-name">{{ scale.name }}</p>
            <p class="scale-desc">{{ scale.description }}</p>
            <div class="tag-list" v-if="scaleTags(scale).length">
              <div class="tag tag-untrusted" v-if="!scale.trusted">置信度低</div>
              <div
                class="tag"
                v-for="i in scaleTags(scale)"
                :key="i.value"
                :class="{ 'tag-included': tagFilter[i.value] === 'REQUIRED' }"
              >
                {{ i.label }}
              </div>
            </div>
            <div class="id">{{ scale.id.toUpperCase() }}</div>
          </router-link>
        </li>
        <li class="no-result" v-show="!showScale.length" :key="'no-result'">暂无结果</li>
      </transition-group>
    </div>
  </main>
</template>
<script setup lang="ts">
import _scaleIndexData from 'visual:scales-index';
import KIcon from '@/components/KIcon.vue';
import KTextInput from '@/components/KTextInput.vue';
import CheckButton from '@/components/CheckButton.vue';
import { RouterLink } from 'vue-router';
import { windowSize } from '@kuankuan/assist-2026/ref/sizeRef';
import vTabGroup from '@/scripts/vTabGroup';
import { ALL_TAG_VALUES, TAG_GROUP_VIEWS, tagEntriesOf, tagValuesOf } from '@/types/scaleTags';
import type { TagFilterState } from '@/types/scaleTags';
import { stringifyTagQuery } from '@/scripts/tagQuery';
import type { ScaleIndexItem } from '@/types/scaleIndex';

const props = withDefaults(
  defineProps<{ includedTag?: string[]; excludedTag?: string[]; q?: string }>(),
  { includedTag: () => [], excludedTag: () => [], q: '' }
);

const route = useRoute();
const router = useRouter();
const tagListBox = useTemplateRef('tagListBox');
const scaleIndexData = reactive(_scaleIndexData);
const searchText = ref(props.q);
const scaleList = useTemplateRef('scaleList');

const scaleTags = (scale: ScaleIndexItem) => tagEntriesOf(scale.tags);

function getTextNodes(root: Node): Text[] {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!(node instanceof Text)) return NodeFilter.FILTER_SKIP;
      const value = node.nodeValue;
      if (!value) return NodeFilter.FILTER_REJECT;
      if (!value.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  } as NodeFilter);

  const res: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    res.push(current as Text);
    current = walker.nextNode();
  }
  return res;
}

const tagFilter = computed<Record<string, TagFilterState>>(() => {
  const res: Record<string, TagFilterState> = {};
  for (const value of ALL_TAG_VALUES) res[value] = 'OPTIONAL';
  for (const value of props.includedTag) if (value in res) res[value] = 'REQUIRED';
  for (const value of props.excludedTag) if (res[value] === 'OPTIONAL') res[value] = 'EXCLUDED';
  return res;
});

const tagFilterNum = computed(() => props.includedTag.length + props.excludedTag.length);

const NEXT_TAG_FILTER_STATE: Record<TagFilterState, TagFilterState> = {
  OPTIONAL: 'REQUIRED',
  REQUIRED: 'EXCLUDED',
  EXCLUDED: 'OPTIONAL',
};

function writeQuery(included: Iterable<string>, excluded: Iterable<string>) {
  router.replace({
    query: {
      ...route.query,
      'included-tag': stringifyTagQuery([...included]),
      'excluded-tag': stringifyTagQuery([...excluded]),
      q: searchText.value || undefined,
    },
  });
}

function cycleTag(value: string) {
  const included = new Set(props.includedTag);
  const excluded = new Set(props.excludedTag);
  included.delete(value);
  excluded.delete(value);
  const next = NEXT_TAG_FILTER_STATE[tagFilter.value[value]];
  if (next === 'REQUIRED') included.add(value);
  if (next === 'EXCLUDED') excluded.add(value);
  writeQuery(included, excluded);
}

function onSearchInput(value: string | undefined) {
  searchText.value = value ?? '';
  writeQuery(props.includedTag, props.excludedTag);
}

watch(
  () => props.q,
  (value) => {
    if (value !== searchText.value) searchText.value = value;
  }
);

const showScale = computed(() => {
  const res: ScaleIndexItem[] = [];
  let fullList = Object.values(scaleIndexData);
  if (searchText.value) {
    fullList = fullList.filter((i) =>
      [i.name, i.id, i.description, ...scaleTags(i).map((t) => t.label)].some((i) =>
        i.toLowerCase().includes(searchText.value.toLowerCase())
      )
    );
  }
  outer: for (const i of fullList) {
    const tags = new Set(tagValuesOf(i.tags));
    for (const value of ALL_TAG_VALUES) {
      if (tagFilter.value[value] === 'REQUIRED' && !tags.has(value)) {
        continue outer;
      }
      if (tagFilter.value[value] === 'EXCLUDED' && tags.has(value)) {
        continue outer;
      }
    }
    res.push(i);
  }
  res.sort((a, b) => (a.trusted !== b.trusted ? (b.trusted ? 1 : -1) : 0));
  return res;
});
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
  watch(
    [searchText, showScale],
    ([value]) => {
      nextTick(() => {
        if (!value) {
          CSS.highlights.set('search-results', new Highlight());
          return;
        }
        if (!scaleList.value) return;
        const doms = scaleList.value.querySelectorAll(
          '.scale-item .scale-name, .scale-item .scale-desc, .scale-item .tag-list>.tag,.scale-item .id'
        );
        const ranges = Array.from(doms)
          .flatMap((el) => getTextNodes(el))
          .flatMap((i) => {
            const text = i.textContent.toLowerCase();
            const indices: number[] = [];
            let now = 0;
            while (now < text.length) {
              const index = text.indexOf(value, now);
              if (index === -1) break;
              indices.push(index);
              now = index + value.length;
            }
            return indices.map((index) => {
              const range = new Range();
              range.setStart(i, index);
              range.setEnd(i, index + value.length);
              return range;
            });
          });
        CSS.highlights.set('search-results', new Highlight(...ranges));
      });
    },
    { immediate: true }
  );
});
</script>
<style scoped lang="scss">
@use '@/styles/theme.scss' as *;

.scale-index {
  padding: 2em;
}
.title-line {
  font-size: 1.5em;
  display: flex;
  justify-content: start;
  align-items: end;
  gap: 1em;
  position: relative;
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
      @include motion.transition(background 0.3s);
      span.tag-filter-num {
        font-size: 0.6em;
        opacity: 0.5;
      }
      &:focus {
        @include theme.use {
          color: theme.get('active-color');
        }
      }
    }
    &:focus-within > .trigger,
    &:hover > .trigger {
      @include theme.use {
        background: color.mix(theme.get('strong-color'), theme.get('background'), 10%);
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

      @include motion.transition(height 0.3s);
      justify-content: center;
      align-items: stretch;
      border-radius: 0 0.5em 0.5em 0.5em;
      width: 26em;
      max-width: 90vw;
      height: 0;
      @include theme.use {
        background: color.mix(theme.get('strong-color'), theme.get('background'), 10%);
      }
      & > .legend {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5em;
        padding: 0.6em 0.5em 0;
        font-size: 0.5em;
        opacity: 0.6;
      }
      & > .tag-groups {
        border-spacing: 0.1em 0.5em;
        margin: 0 0.5em;
        tr {
          td.group-name {
            font-size: 0.8em;
            white-space: nowrap;
            text-wrap: nowrap;
            vertical-align: middle;
            text-align: right;
          }
          td.tag-list {
            ul {
              padding: 0;
              margin: 0;
              list-style: none;
              display: flex;
              gap: 0.2em;
              flex-wrap: wrap;
            }
          }
        }
      }
    }
  }
  & > .search {
    margin-right: 0;
    display: flex;
    justify-content: end;
    gap: 0.5em;
    align-items: center;
    flex: 1 0 auto;
    height: 1.6em;
    input {
      flex: 1 1 0;
      display: block;
      font-size: 0.8em;
      padding: 0.5em 1em;
      height: 1em;
    }
    .icon {
      z-index: 1;
      pointer-events: none;
      padding-right: 0.2em;
    }
    @media screen and (max-width: 50em) {
      input {
        position: absolute;
        box-sizing: border-box;
        opacity: 0;
        right: 0;
        bottom: 0;
        height: 1em;
        @include motion.transition(0.3s);
        width: 2em;
        padding: 1em 0.5em;

        &:focus {
          position: absolute;
          opacity: 1;
          width: 100%;
        }
      }
    }
  }
}
.scale-list {
  margin-top: 1.2em;
  overflow-y: hidden;
  .scale-item-container {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
    overflow-x: hidden;
    overflow-y: visible;
    .scale-item {
      margin: 1em 0;
      padding: 1em;
      border-radius: 1em;
      @include motion.transition(background 0.3s);
      break-inside: avoid;
      flex: 1 1 auto;
      width: 100%;
      box-sizing: border-box;
      @include theme.use {
        background: color.mix(theme.get('active-color'), theme.get('background'), 10%);
      }
      &:focus-within {
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
    .no-result {
      text-align: center;
      font-size: 1.5em;

      padding: 1em 0;
      @include theme.use {
        color: theme.mix('color', 'background', 50%);
      }
    }
    .scale-list-enter-active,
    .scale-list-leave-active,
    .scale-list-move {
      @include motion.transition(all 0.3s cubic-bezier(0.55, 0, 0.1, 1));
    }
    .scale-list-leave-active {
      position: absolute;
    }
    .scale-list-leave-to {
      z-index: -1;
      opacity: 0;
      transform: translate(20%, 0);
    }
    .scale-list-enter-from {
      opacity: 0;
      transform: translate(-20%, 0);
    }
  }
  @media print {
    .scale-item {
      border: 0.2em solid;
      @include theme.use {
        border-color: rgba(theme.get('color'), 1);
      }
      .tag {
        border: 0.1em solid;
        @include theme.use {
          border-color: rgba(theme.get('color'), 1);
        }
        &.tag-untrusted {
          border: 0.2em solid;
        }
        &.tag-included {
          border: 0.2em solid;
          @include theme.use {
            border-color: rgba(theme.get('strong-color'), 1);
          }
        }
      }
    }
  }
}
.scale-link {
  text-decoration: none;
  outline: none;
  position: relative;
  @include theme.use {
    color: theme.get('color');
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
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 1em;
    gap: 1em;
    .tag {
      padding: 0.2em 0.5em;
      border-radius: 0.4em;
      @include motion.transition(background 0.3s, color 0.3s);

      @include theme.use {
        background: color.mix(theme.get('active-color'), theme.get('background'), 50%);
      }
      &.tag-untrusted {
        @include theme.use {
          background: color.mix(theme.get('strong-color'), theme.get('background'), 30%);
        }
      }
      &.tag-included {
        font-weight: bold;
        @include theme.use {
          background: theme.mix('strong-color', 'background', 30%);
        }
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
.scale-list *::highlight(search-results) {
  @include theme.use {
    color: yellow;
  }
}
</style>
