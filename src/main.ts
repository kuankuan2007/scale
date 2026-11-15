import '@/styles/main.scss';

import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import { routes, setupRouter } from './router';

export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  async ({ router }) => {
    setupRouter(router);
    if (!import.meta.env.SSR) {
      await import('@kuankuan/assist-2026/init');
      console.log(`本项目为开源项目，详细信息参见: ${new URL('/about', location.origin).href}`);
    }
  }
);
