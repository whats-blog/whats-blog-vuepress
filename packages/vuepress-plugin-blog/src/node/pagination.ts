import type { App, Page } from '@vuepress/core'
import { createPage } from '@vuepress/core'
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

export function resolvePaginationConfig(
  title: string,
  indexPath: string,
  userPaginationConfig: PaginationConfig
): PaginationConfig {
  const defaultPaginationConfig: PaginationConfig = {
    lengthPerPage: 5,
    getPaginationPageTitle(index) {
      if (index === 0) {
        return title
      }
      return `Page ${index + 1} | ${title}`
    },
    getPaginationPageUrl(index) {
      if (index === 0) {
        return indexPath
      }
      return `${indexPath}page/${index + 1}`
    },
    filter: (page: Page, id: string) => {
      if (page.frontmatter.pagination) {
        return (page.frontmatter.pagination as any).id === id
      }
      return false
    },
    sorter: (prev: Page, next: Page) => {
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

    const pages = sourcePages.filter((page) => (filter as PageFilter)(page, id))
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

    const paginationPageInfos: ExtraPage[] = pagination.pages.map(({ path }, index) => {
      return {
        path,
        frontmatter: {
          title: (getPaginationPageTitle as GetPaginationPageTitle)(index, id),
          pagination: {
            type: 'page',
            id,
            index
          }
        }
      }
    })

    const paginationPages = await Promise.all(paginationPageInfos.map((pageInfo) => createPage(app, pageInfo)))
    app.pages.push(...paginationPages)

    serializedPaginations.push(pagination)
  }
  return serializedPaginations
}
