import { defineClientAppEnhance } from '@vuepress/client'
import { usePaginationData } from './composables'

export default defineClientAppEnhance(({ app }) => {
  const paginationData = usePaginationData()
  app.mixin({
    computed: {
      $pagination() {
        const { pagination } = this.$frontmatter
        if (!pagination) {
          return
        }
        const paginationInfo = this.$getPagination(pagination.id)
        const pages = this.$pages
          .filter((page) => paginationInfo.filter(page, pagination.id))
          .sort((a, b) => paginationInfo.sorter(b, a))
        if (pagination.type === 'page') {
          return {
            hasPrev: pagination.index > 0,
            prevLink: (paginationInfo.pages[pagination.index - 1] || {}).path,
            hasNext: pagination.index + 1 < paginationInfo.pages.length,
            nextLink: (paginationInfo.pages[pagination.index + 1] || {}).path,
            pages: paginationInfo.pages.map((item) => {
              return { path: item.path }
            }),
            posts: pages.slice(...paginationInfo.pages[pagination.index].interval)
          }
        } else if (pagination.type === 'post') {
          const index = pages.findIndex((item) => item.key === this.$page.key)
          return {
            hasPrev: index > 0,
            prevLink: (pages[index - 1] || {}).path,
            prevText: (pages[index - 1] || {}).title,
            hasNext: index + 1 < pages.length,
            nextLink: (pages[index + 1] || {}).path,
            nextText: (pages[index + 1] || {}).title
          }
        }
      }
    },
    methods: {
      $getPagination(id) {
        return paginationData.value.filter((item) => item.id === id)[0]
      }
    }
  })
})
