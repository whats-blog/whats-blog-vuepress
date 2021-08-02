const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://vuepress.github.io/reference/config.html#base
   */
  base: '/whats-blog-vuepress/',
  /**
   * Ref：https://vuepress.github.io/reference/config.html#title
   */
  title: 'VuePress Blog Example',
  /**
   * Ref：https://vuepress.github.io/reference/config.html#description
   */
  description: description,
  /**
   * Ref：https://vuepress.github.io/reference/config.html#theme
   */
  theme: '@whats-blog/vuepress-theme-next',
  /**
   * Ref：https://vuepress.github.io/reference/config.html#themeconfig
   */
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/'
      },
      {
        text: 'Tags',
        link: '/tag/'
      }
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/whats-blog'
        }
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US'
        },
        {
          text: "MIT Licensed | Copyright © 2021-present What's Blog",
          link: ''
        }
      ]
    }
  }
}
