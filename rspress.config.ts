import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  route: {
    cleanUrls: true,
  },
  lang: 'zh',
  root: path.join(__dirname, 'docs'),
  title: 'Python教程',
  icon: '/rspress-icon.png',
  globalStyles: path.join(__dirname, 'docs/styles/index.css'),
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
});
