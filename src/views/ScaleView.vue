<template>
  <div class="scale-view">
    <div class="scale" v-if="state === 'success'">
      <h1>{{ data?.name }}</h1>
      <div class="privacy-protection">
        <k-icon id="info" inline />
        测试全程离线进行，页面不会上报任何数据，请放心填写
      </div>
      <div class="disclaimer">
        <k-icon id="warn" inline />
        本网站免费提供量表测试仅供参考，不具有临床意义，如有需要请线下就医
      </div>

      <p>{{ data?.description }}</p>
      <form class="form" @submit.prevent="submit">
        <div class="question-list" ref="questionList">
          <div
            class="question"
            v-for="question in data!.questions"
            :key="question.id"
            :class="{ required: question.id === requiredId }"
            :data-id="question.id"
          >
            <form-config-view
              :config="question.form"
              :id="question.id"
              :readonly="readonly"
              v-model="formResult[question.id as never]"
            />
          </div>
        </div>

        <k-button type="submit" class="submit-button" :disabled="readonly">提交</k-button>
      </form>
      <div class="result" v-if="result" ref="resultElement">
        <h2>结果：</h2>
        <div class="tip">
          <k-icon id="warn" inline />
          量表结果仅供参考，如有需要请线下就医。一般线下就医时，会要求重新在医院进行测试，故本结果不具备临床意义。
        </div>
        <div class="chart" v-if="result.score">
          <result-scores v-for="(item, index) in result.score" :key="index" :config="item" />
        </div>
        <div class="result-content">
          <p class="title">{{ result.title }}</p>
          <p class="description">{{ result.description }}</p>
        </div>
      </div>
      <k-button
        v-show="result"
        class="to-result-button"
        :class="{
          hide: resultIntersectionData?.isIntersecting,
        }"
        type="button"
        capsule
        @click="resultElement?.scrollIntoView({ behavior: 'smooth', block: 'center' })"
        ><k-icon id="down" />查看结果</k-button
      >
    </div>
    <div class="loading" v-if="state === 'loading'">
      <div class="content-box">
        <h1>加载中</h1>
        <p>稍等片刻，数据在来的路上了~</p>
      </div>
    </div>
    <div class="error" v-if="state === 'error'">
      <div class="content-box">
        <h1>Oops!</h1>
        <p>这个量表不存在或无法被正常加载</p>
        <router-link to="/scale/">返回量表列表</router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Scale, ScaleErrorResult, ScaleOKResult } from '@/types/form';
import FormConfigView from '@/components/FormConfigView.vue';
import ResultScores from '@/components/ResultScores.vue';
import KButton from '@/components/KButton.vue';
import KIcon from '@/components/KIcon.vue';
import { RouterLink } from 'vue-router';
import intersectionRef, { type intersectionData } from '@/scripts/intersectionRef';
const props = defineProps<{
  id: string;
}>();
const questionList = useTemplateRef('questionList');
const title = defineModel<string>('titleValue');
const data = ref<Scale>();
const state = ref<'loading' | 'error' | 'success'>('loading');
const formResult = ref({});
const result = ref<ScaleOKResult>();
const requiredId = ref<string>();
const readonly = ref(false);
const resultElement = useTemplateRef('resultElement');
const resultIntersectionData = ref<intersectionData>({});

if (import.meta.env.DEV) {
  // @ts-expect-error DEV
  window.loadTestData = (data: string) => {
    fetch(`/temp/test-datas/${data}.json`)
      .then((res) => res.json())
      .then((data) => (formResult.value = data))
      .then(() => console.log('test data loaded:', data), console.error);
  };
}
function showRequired(id: string) {
  requiredId.value = id;
  const dom = questionList.value?.querySelector(`.question[data-id='${id}']`);
  console.log(dom);
  if (dom) {
    dom.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
function updateData() {
  state.value = 'loading';
  import(`../scales/${props.id}.ts`).then(
    (scale) => {
      data.value = scale.default;
      state.value = 'success';
    },
    () => {
      state.value = 'error';
      title.value = '量表加载失败';
    }
  );
}
async function submit() {
  let res: ScaleOKResult | ScaleErrorResult;
  try {
    res = data.value!.result(formResult.value);
  } catch (err) {
    res = {
      ok: false,
      message: `System Error: ${(err as Error).message}`,
    };
  }

  if (res?.ok) {
    readonly.value = true;
    result.value = res;
    setTimeout(() => {
      resultElement.value?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  } else {
    if (res?.require) {
      showRequired(res.require);
    }
  }
}
onMounted(() => {
  watch(() => props.id, updateData, { immediate: true });
  watch(
    data,
    () => {
      if (data.value?.name) {
        title.value = data.value.name;
      }
    },
    { immediate: true }
  );
  watch(resultElement, () => {
    if (!resultElement.value) return;
    intersectionRef(resultElement.value, resultIntersectionData);
  });
});
</script>
<style scoped lang="scss">
@use '@/styles/theme' as *;
@use 'sass:color';

.scale {
  padding: 1em;
  .disclaimer,
  .privacy-protection {
    opacity: 0.5;
  }
}

.question-list {
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
  gap: 0.5em;
  justify-content: center;
  .question {
    border-radius: 0.8em;
    padding: 1em;
    transition: background 0.3s;
    &:focus-within {
      @include useTheme {
        background: color.mix(getTheme('color'), getTheme('background'), 15%);
      }
    }
    &:hover {
      @include useTheme {
        background: color.mix(getTheme('active-color'), getTheme('background'), 15%);
      }
    }
    &.required {
      @include useTheme {
        background: color.mix(getTheme('strong-color'), getTheme('background'), 15%);
      }
    }
  }
}
.submit-button {
  display: block;
  font-size: 1.5em;
  padding: 0.5em 4em;
  margin: 2em auto;
}
.result {
  padding: 2em;
  border-radius: 1em;
  @include useTheme {
    background: color.mix(getTheme('strong-color'), getTheme('background'), 10%);
  }
  .tip {
    margin: 1em;
    opacity: 0.5;
  }
  h2 {
    margin: 0;
  }
  .result-content {
    padding-left: 1em;
    p {
      margin: 0.5em 0;
      white-space: pre-wrap;
      &.title {
        font-size: 1.5em;
      }
    }
  }
}
.loading,
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1em;
}
.content-box {
  padding: 2em;
  text-align: center;
  border-radius: 1em;

  p {
    margin: 0.5em 0;
  }
  h1 {
    margin: 0;
  }
}
.loading > .content-box {
  @include useTheme {
    background: color.mix(getTheme('active-color'), getTheme('background'), 10%);
  }
}
.error > .content-box {
  @include useTheme {
    background: color.mix(getTheme('strong-color'), getTheme('background'), 10%);
  }
}
.to-result-button {
  position: fixed;
  font-size: 1.2em;
  right: 4em;
  bottom: 3em;
  transition:
    transform 0.3s cubic-bezier(0.67, 0.02, 0.34, 1.47),
    bottom 0.3s cubic-bezier(0.67, 0.02, 0.34, 1.47),
    0.3s ease;
  &.hide {
    bottom: 0;
    transform: translate(0, 110%);
  }
}
</style>
