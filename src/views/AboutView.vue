<template>
  <article class="about-view">
    <h1>关于</h1>
    <p>
      一个用于提供简易心理测评的在线网站，传播并推广心理精神类疾病的相关知识，同时也提供了一个简单的测评工具，<span
        class="bold"
        >以免TM老子填量表还得先扫码付个费</span
      >
    </p>
    <details class="build-info">
      <summary>构建信息</summary>
      <div class="build-info-list">
        <component
          v-for="info in showBuildInfo"
          :key="info.title"
          :is="info.url ? 'a' : 'div'"
          :href="info.url"
          target="_blank"
          class="build-info-item"
        >
          <div class="title">{{ info.title }}</div>
          <div class="content">{{ info.content }}</div>
          <k-icon v-if="info.url" id="link" class="link-icon" />
        </component>
      </div>
    </details>
    <h2>作者的话</h2>
    <div class="content-box">
      <p>
        这个项目最开始是因为有人大量的联系心理精神类疾病患者，在其视频下挂指向付费测评的二维码或链接，并承诺进行利益分配
      </p>
      <p class="bold">这在我看来，是极其不妥当且危险的，对于利益分配问题更是充满诱惑的</p>
      <p>
        心理精神类疾病患者，普遍存在自我价值感不足，分辨力地下，且容易受到外界影响，尤其是大量的低龄甚至未成年人患者，社会阅历不足，很容易被诱导
      </p>
      <p>
        这在我看来，是变相的诈骗甚至是伴有极富针对性的传销行为，无论是对于舆论环境还是患者的病情，都是危险的。
      </p>
      <p>
        与此同时，在没有任何相关学术研究和专业评估的情况下，刻意利用患者的身份和其作品的共鸣，吸引流量并进行商业行为，甚至刻意诱导观众在非专业环境下，仅通过所谓，甚至是付费的量表，就对自己的心理状态下定论，已经严重超出了道德乃至法律的底线
      </p>
    </div>
    <h2><k-icon id="warn" inline /> 免责声明</h2>
    <div class="content-box">
      <p>
        本网站提供之量表仅供个人参考使用，不能代替专业心理咨询师或精神科医生诊断，如有心理健康问题，请及时求助专业医疗机构的帮助
      </p>
      <p>
        专业机构接诊后，由于测评的不可控性和非专业性，不应参考本网站提供的任何结果。应使用独立可控的测评工具进行专业诊断
      </p>
      <p class="bold">本网站做出的任何结果请勿用于任何专业用途！</p>
      <div class="quote">
        <k-icon id="quote-left" class="quote-left" />
        <div>我们不创造量表，我们只是量表的搬运工</div>
        <k-icon id="quote-right" class="quote-right" />
      </div>
    </div>
    <h2><k-icon id="link" inline /> 仓库链接</h2>
    <div class="content-box">
      <p>kuankuan2007/scale</p>
      <div class="repo-box">
        <div class="repo-link">
          <a href="https://github.com/kuankuan2007/scale" class="github">
            <img
              v-if="theme === 'dark'"
              src="@/assets/third-party-logo/github-mark-white.svg"
              alt="GitHub"
            />
            <img v-else src="@/assets/third-party-logo/github-mark-black.svg" alt="GitHub" />
            <div class="link-text">GitHub</div>
          </a>
        </div>
        <div class="repo-link">
          <a href="https://gitee.com/kuankuan2007/scale" class="gitee">
            <img src="@/assets/third-party-logo/logo_gitee_g_red.svg" alt="Gitee" />
            <div class="link-text">Gitee</div>
          </a>
        </div>
      </div>
    </div>
    <h2>开源许可</h2>
    <div class="content-box">
      <p>
        本项目基于
        <a class="bold" href="https://opensource.org/license/mpl-2-0">MPL-2.0</a>
        协议开源，这意味着：
      </p>
      <div class="content-box">
        <p><k-icon id="tick" inline /> 商业用途，修改，分发，专利使用，私人使用</p>
        <p>
          <k-icon id="warn" inline /> 注明来源，许可证和版权声明，使用相同许可证分发修改后的代码
        </p>
        <p><k-icon id="cross" inline /> 责任，商标，保证</p>
      </div>
    </div>
  </article>
</template>
<script setup lang="ts">
import KIcon from '@/components/KIcon.vue';
import { theme } from '@/scripts/theme';
import { show as showBuildInfo } from 'visual:k-build-info';
</script>
<style scoped lang="scss">
@use '@/styles/theme.scss' as *;
@use 'sass:color';

.about-view {
  padding: 1em;
}
.quote {
  border: none;
  border-left: solid 0.5em;
  padding: 0.5em;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  @include useTheme {
    background: color.mix(getTheme('active-color'), getTheme('background'), 10%);
    border-color: color.mix(getTheme('active-color'), getTheme('background'), 20%);
  }
  .quote-left {
    opacity: 0.5;
    margin-bottom: auto;
  }
  .quote-right {
    opacity: 0.5;
    margin-top: auto;
  }
}
.build-info {
  opacity: 0.5;
  &:open {
    opacity: 1;
  }
  summary {
    cursor: pointer;
  }
  .build-info-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    $size: 8em;
    grid-template-columns: repeat(auto-fit, $size);
    grid-auto-rows: $size;
    gap: 1em;
    padding: 1em;
    .build-info-item {
      text-decoration: none;
      border: 0.1em solid transparent;
      display: flex;
      border-radius: 1em;
      padding: 1em;
      flex-direction: column;
      row-gap: 1em;
      position: relative;
      overflow: hidden;
      transition: background 0.3s;
      @include useTheme {
        background-color: color.mix(getTheme('active-color'), getTheme('background'), 10%);
        color: getTheme('color');

        @media print {
          border-color: getTheme('color');
        }
      }
      .title {
        text-align: center;
        font-size: 1.2em;
        font-weight: bold;
      }
      .content {
        flex: 1 0 auto;
        white-space: pre;
        text-align: center;
      }
      .link-icon {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.1em 0.5em;
        border-radius: 0.3em;

        @include useTheme {
          background: color.mix(getTheme('background'), getTheme('active-color'), 50%);
        }
      }
      &:hover,
      &:focus {
        @include useTheme {
          background: color.mix(getTheme('background'), getTheme('active-color'), 60%);
        }
      }
    }
  }
}
.content-box {
  padding-left: 2em;
}
.repo-box {
  display: flex;
  gap: 0.5em;
  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    border: 0.1em solid;
    padding: 0.3em 1em;
    border-radius: 0.3em;
    vertical-align: middle;
    transition: 0.3s;
    outline: none;

    @include useTheme {
      color: getTheme('color');
      border-color: getTheme('color');
    }

    img {
      height: 1em;
      display: block;
    }
    &:focus,
    &:active {
      @include useTheme {
        border-color: getTheme('active-color');
        color: getTheme('active-color');
      }
    }
    &:hover {
      @include useTheme {
        background: getTheme('active-color');
        color: getTheme('background');
        border-color: getTheme('active-color');
      }
    }
  }
}
</style>
