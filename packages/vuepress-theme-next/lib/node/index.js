const path = require('path')

const nextTheme = () => {
  return {
    name: 'vuepress-theme-next',
    layouts: {
      Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
      404: path.resolve(__dirname, '../client/layouts/404.vue')
    }
  }
}

module.exports = nextTheme
