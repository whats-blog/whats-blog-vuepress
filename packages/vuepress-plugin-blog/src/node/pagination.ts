import type { App } from '@vuepress/core'
import { createPage } from '@vuepress/core'
import { BlogPage } from '../types/vuepress-blog'
import { ExtraPage } from './interface/extra-page'
import {
  GetPaginationPageTitle,
  GetPaginationPageUrl,
  InternalPagination,
  PageFilter,
  PaginationConfig,
  SerializedPagination
} from './interface/pagination'
import { getIntervals, parseDate } from './util'

export function resolvePaginationConfig(indexPath: string, userPaginationConfig: PaginationConfig): PaginationConfig {
  const defaultPaginationConfig: PaginationConfig = {
    lengthPerPage: 5,
    getPaginationPageUrl(index) {
      if (index === 0) {
        return indexPath
      }
      return `${indexPath}page/${index + 1}`
    },
    filter(page: BlogPage, id: string) {
      return page.id === id
    },
    sorter(prev: BlogPage, next: BlogPage) {
      const prevDate = parseDate(prev.frontmatter.date!)
      const nextDate = parseDate(next.frontmatter.date!)
      return prevDate - nextDate
    }
  }

  return Object.assign({}, defaultPaginationConfig, userPaginationConfig)
}

export async function registerPaginations(paginations: InternalPagination[], app: App) {
  const serializedPaginations: SerializedPagination[] = []
  for (const {
    id,
    lengthPerPage,
    prevText = 'Prev',
    nextText = 'Next',
    getPaginationPageTitle,
    getPaginationPageUrl,
    filter,
    sorter
  } of paginations) {
    const { pages: sourcePages } = app

    const pages = sourcePages.filter((page) => (filter as PageFilter)(page as BlogPage, id))
    const intervals = getIntervals(pages.length, lengthPerPage!)

    const pagination: SerializedPagination = {
      id,
      prevText,
      nextText,
      filter: filter!.toString(),
      sorter: sorter!.toString(),
      pages: intervals.map((interval, index) => {
        const path = (getPaginationPageUrl as GetPaginationPageUrl)(index)
        return { path, interval }
      })
    }

    if (pagination.pages.length > 1) {
      const paginationPageInfos: ExtraPage[] = pagination.pages.slice(1).map(({ path }, index) => {
        const pageNumber = index + 2
        return {
          path,
          frontmatter: {
            title: (getPaginationPageTitle as GetPaginationPageTitle)(pageNumber, id),
            id
          }
        }
      })

      const paginationPages = await Promise.all(paginationPageInfos.map((pageInfo) => createPage(app, pageInfo)))
      app.pages.push(...paginationPages)
    }

    serializedPaginations.push(pagination)
  }
  return serializedPaginations
}
