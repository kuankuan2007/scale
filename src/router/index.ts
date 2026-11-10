import PageNotFoundView from '@/views/PageNotFoundView.vue';
import type { RouteRecordRaw, Router } from 'vue-router';
import { parseTagQuery, parseTextQuery } from '@/scripts/tagQuery';
import { getScale, loadScale } from '@/scripts/scaleLoader';

export const routes: RouteRecordRaw[] = [
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
    props: (to) => ({
      includedTag: parseTagQuery(to.query['included-tag']),
      excludedTag: parseTagQuery(to.query['excluded-tag']),
      q: parseTextQuery(to.query.q),
    }),
  },
  {
    path: '/research/gbsq',
    name: 'research-gbsq',
    component: () => import('@/views/GbsqResearchView.vue'),
    meta: {
      title: 'GBSQ 来源考证',
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
];

const defaultTitle = 'Scale';
export function setupRouter(router: Router) {
  router.beforeEach((to) => {
    fullscreen.value = (to.meta.fullscreen as boolean) || false;
    hideHeader.value = (to.meta.hideHeader as boolean) || false;
  });
  router.beforeResolve(async (to) => {
    if (to.name === 'scale' && typeof to.params.id === 'string') {
      await loadScale(to.params.id);
    }
  });
  router.afterEach((to, _from, failure) => {
    if (failure) return;
    title.value =
      to.name === 'scale' && typeof to.params.id === 'string'
        ? (getScale(to.params.id)?.name ?? '量表加载失败')
        : (to.meta.title as string) || defaultTitle;
  });
}

export const title = ref(defaultTitle);
export const fullscreen = ref(false);
export const hideHeader = ref(false);
