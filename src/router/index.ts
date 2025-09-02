import PageNotFoundView from '@/views/PageNotFoundView.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Home',
        fullscreen: true,
        hideHeader: true,
      },
    },
    {
      path: '/scale/:id',
      name: 'scale',
      component: () => import('@/views/ScaleView.vue'),
      meta: {
        title: 'Scale',
      },
      props: true,
    },
    {
      path: '/scale',
      name: 'scale-index',
      component: () => import('@/views/ScaleIndexView.vue'),
      meta: {
        title: '量表列表',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: {
        title: '关于',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: PageNotFoundView,
      meta: {
        title: 'Not Found',
      },
    },
  ],
});

const defaultTitle = 'Scale';
router.beforeEach((to, from, next) => {
  title.value = (to.meta.title as string) || defaultTitle;
  fullscreen.value = (to.meta.fullscreen as boolean) || false;
  hideHeader.value = (to.meta.hideHeader as boolean) || false;
  next();
});

export const title = ref(defaultTitle);
export const fullscreen = ref(false);
export const hideHeader = ref(false);

watch(title, (newTitle) => {
  document.title = newTitle;
});

export default router;
