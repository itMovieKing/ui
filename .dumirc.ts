import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'ui-demo',
    logo: '/logo.ico',
    nav: [
      {
        title: '指南',
        link: '/guide',
      },
      {
        title: '组件',
        link: '/components',
      },
    ],
  },
});
