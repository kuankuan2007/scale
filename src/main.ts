import '@/styles/main.scss';
import '@/scripts/theme.ts';
import '@kuankuan/assist-2026/init';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

console.log(`本项目为开源项目，详细信息参见: ${new URL('/about', location.origin).href}`);

app.mount('#app');
