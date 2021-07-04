import type { Page } from '@vuepress/core'

export type PagesData = Page[]

declare module '@temp/@whats-blog/vuepress-plugin-pages' {
  export const pages: PagesData
}
