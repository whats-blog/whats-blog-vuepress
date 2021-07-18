import type { App } from '@vuepress/core'
import { createPage } from '@vuepress/core'

import { handleOptions } from './handle-options'
import { SerializedPagination } from './interface/pagination'
import { registerPaginations } from './pagination'

const TEMP_MODULE_DIR = '@whats-blog/vuepress-plugin-blog'

const blogPlugin = (options, app: App) => {
  const { extraPages, pageEnhancers, paginations } = handleOptions(options, app)
  const paginationPages: SerializedPagination[] = []
  return {
    name: '@whats-blog/vuepress-plugin-blog',
    plugins: [require.resolve('@whats-blog/vuepress-plugin-pages')],
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
      const { pages } = app
      for (let pageInfo of extraPages) {
        const extraPage = await createPage(app, pageInfo)
        pages.push(extraPage)
      }
      for (let page of pages) {
        const data = {}
        pageEnhancers.forEach(({ filter, data: enhancerData }) => {
          if (filter(page.filePathRelative)) {
            Object.assign(data, enhancerData)
          }
        })
        Object.assign(page, data)
      }
      paginationPages.push(...(await registerPaginations(paginations, app)))
    },
    async onPrepared() {
      await app.writeTemp(
        `${TEMP_MODULE_DIR}/pagination.js`,
        `export const paginations = ${JSON.stringify(paginationPages)}`
      )
    }
  }
}

export default blogPlugin
