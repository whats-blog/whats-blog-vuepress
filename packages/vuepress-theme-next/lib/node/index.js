'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const utils_1 = require('@vuepress/utils')
const nextTheme = (options) => {
  return {
    name: '@whats-blog/vuepress-theme-next',
    layouts: {
      Layout: utils_1.path.resolve(__dirname, '../client/layouts/Layout.vue'),
      404: utils_1.path.resolve(__dirname, '../client/layouts/404.vue')
    },
    plugins: [
      require.resolve('@whats-blog/vuepress-plugin-blog'),
      [require.resolve('@vuepress/plugin-theme-data'), { themeData: options }]
    ]
  }
}
exports.default = nextTheme
