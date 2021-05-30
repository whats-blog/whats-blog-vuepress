const path = require('path')

const nextTheme = (options) => {
  return {
    name: '@whats-blog/vuepress-theme-next',
    layouts: {
      Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
      404: path.resolve(__dirname, '../client/layouts/404.vue')
    },
    plugins: [
      require.resolve('@whats-blog/vuepress-plugin-blog'),
      [require.resolve('@vuepress/plugin-theme-data'), { themeData: options }]
    ]
  }
}

module.exports = nextTheme
