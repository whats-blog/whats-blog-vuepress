import { path } from '@vuepress/utils'

export const nextTheme = (options) => {
  return {
    name: '@whats-blog/vuepress-theme-next',
    clientAppEnhanceFiles: path.resolve(__dirname, '../client/client-app-enhance.js'),
    layouts: path.resolve(__dirname, '../client/layouts/'),
    plugins: [
      [
        require.resolve('@whats-blog/vuepress-plugin-blog'),
        {
          directories: [
            {
              id: 'post',
              dirname: '_posts',
              path: '/'
            }
          ]
        }
      ],
      [require.resolve('@whats-blog/vuepress-plugin-pages')],
      [require.resolve('@vuepress/plugin-container'), { type: 'tip' }],
      [require.resolve('@vuepress/plugin-container'), { type: 'warning' }],
      [require.resolve('@vuepress/plugin-container'), { type: 'danger' }],
      [require.resolve('@vuepress/plugin-prismjs')],
      [require.resolve('@vuepress/plugin-theme-data'), { themeData: options }]
    ]
  }
}
