import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'warn',
  },
  plugins: ['typescript', 'unicorn', 'oxc', 'vue'],
  rules: {
    'eslint/no-unused-vars': 'error',
  },
  ignorePatterns: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/temp/**'],
});
