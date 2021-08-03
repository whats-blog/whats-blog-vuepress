import type { App } from '@vuepress/core'
import { path } from '@vuepress/utils'

const TEMP_MODULE_DIR = '@whats-blog/vuepress-plugin-pages'

export const pagesPlugin = () => {
  return {
    name: '@whats-blog/vuepress-plugin-pages',
    clientAppEnhanceFiles: path.resolve(__dirname, '../client/client-app-enhance.js'),
    async onPrepared(app: App) {
      const { pages } = app
      await app.writeTemp(`${TEMP_MODULE_DIR}/pages.js`, `export const pages = ${JSON.stringify(pages)};`)
      await app.writeTemp(`${TEMP_MODULE_DIR}/index.js`, `export * from './pages.js'`)
    }
  }
}
