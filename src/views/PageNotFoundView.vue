<template>
  <div class="not-found">
    <div class="content-box">
      <div class="title">
        <span class="error-code">404</span><span class="error-message">Not Found</span>
      </div>
      <div class="description">此页面不存在，请检查你的URL</div>
      <div class="url">
        <div class="url-tip">您当前访问的URL为:</div>
        <div class="page-url">{{ url }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const url = ref(location.href);
</script>
<style scoped lang="scss">
@use '@/styles/theme.scss' as *;
@use 'sass:color';

.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-box {
  margin-top: 2em;
  padding: 2em;
  text-align: center;
  border-radius: 1em;
  @include useTheme {
    background: color.mix(getTheme('strong-color'), getTheme('background'), 10%);
  }
  p {
    margin: 0.5em 0;
  }
  h1 {
    margin: 0;
  }
  .title {
    font-size: 1.4em;
    font-weight: bold;
    .error-code {
      font-size: 2em;
    }
  }
}
.url {
  margin-top: 1em;
}
</style>
