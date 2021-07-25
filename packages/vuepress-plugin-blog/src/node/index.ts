import type { App } from '@vuepress/core'
import { path } from '@vuepress/utils'

import { handleOptions } from './handle-options'
import { SerializedPagination } from './interface/pagination'
import { registerPaginations, serializePaginations } from './pagination'
import { parseDate } from './util'

const TEMP_MODULE_DIR = '@whats-blog/vuepress-plugin-blog'

const blogPlugin = (options, app: App) => {
  const { pageEnhancers, paginations } = handleOptions(options, app)
  const paginationPages: SerializedPagination[] = []
  return {
    name: '@whats-blog/vuepress-plugin-blog',
    plugins: [require.resolve('@whats-blog/vuepress-plugin-pages')],
    clientAppEnhanceFiles: path.resolve(__dirname, '../client/client-app-enhance.js'),
    extendsPageOptions(filePath: string) {
      const frontmatter = {}
      pageEnhancers.forEach(({ filter, frontmatter: enhancerFrontmatter }) => {
        if (filter(filePath)) {
          Object.assign(frontmatter, enhancerFrontmatter)
        }
      })
      return { frontmatter }
    },
    async onInitialized() {
      paginationPages.push(...(await registerPaginations(paginations, app)))
    },
    async onPrepared() {
      await app.writeTemp(`${TEMP_MODULE_DIR}/util.js`, `export ${parseDate.toString()}`)
      await app.writeTemp(
        `${TEMP_MODULE_DIR}/pagination.js`,
        `export const paginations = ${serializePaginations(paginationPages, ['filter', 'sorter'])}`
      )
    }
  }
}

export default blogPlugin
