import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import type {} from 'vite-ssg';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import autoImport from 'unplugin-auto-import/vite';
import Inspect from 'vite-plugin-inspect';
import { visualizer } from 'rollup-plugin-visualizer';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import VitePluginScaleIndex, { getScaleIndex } from './vite-plugin/scales-index.js';
import VitePluginBuildInfo from '@kuankuan/assist-2026/plugins/buildInfo';
import Sitemap from 'vite-plugin-sitemap';
import VitePluginInlineThemeInit from '@kuankuan/assist-2026/plugins/inlineThemeInit';

const sassAddition = `
@use '@/styles/theme.scss';
@use '@kuankuan/assist-2026/styles/motion.scss';
@use 'sass:math';
@use 'sass:color';
`;

const scaleIndex = await getScaleIndex();

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes: () => [
      '/',
      '/404',
      '/about',
      '/scale',
      '/research/gbsq',
      ...Object.keys(scaleIndex).map((key) => `/scale/${key}`),
    ],
    htmlFileName: (filename) => filename.replace(/^404[/\\]index\.html$/, '404.html'),
    concurrency: 1,
  },
  plugins: [
    VitePluginInlineThemeInit(),
    vue(),
    vueDevTools(),
    Inspect(),
    autoImport({
      imports: ['vue', 'vue-router'],
      dts: 'src/types/auto-imports.d.ts',
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: './temp/test.html',
      open: true,
    }),
    VitePluginScaleIndex(),
    VitePluginBuildInfo(true, command === 'build'),
    Sitemap({
      hostname: 'https://scale.kuankuan.site',
      dynamicRoutes: [
        '/about',
        '/scale',
        '/research/gbsq',
        ...Object.keys(scaleIndex).map((key) => `/scale/${key}`),
      ],
      generateRobotsTxt: true,
      changefreq: {
        '*': 'daily',
        '/about': 'weekly',
        '/scale': 'weekly',
        '/research/gbsq': 'weekly',
        '/': 'weekly',
      },
      priority: {
        '*': 1.0,
        '/about': 0.8,
        '/research/gbsq': 0.8,
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv(),
        autoprefixer({
          overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8'],
          grid: true,
        }),
        cssnano(),
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: sassAddition,
      },
      sass: {
        additionalData: sassAddition,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  ssr: {
    noExternal: ['@kuankuan/assist-2026'],
  },
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: function (chunk) {
          for (const modules of chunk.moduleIds) {
            if (modules.includes('src/scales')) {
              return 'scales/[name]-[hash].js';
            }
          }
          return 'script/[name]-[hash].js';
        },
      },
    },
  },
}));
