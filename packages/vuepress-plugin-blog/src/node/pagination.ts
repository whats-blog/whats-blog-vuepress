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
import { getIntervals, mapToString } from './util'

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
      return `${indexPath}page/${index + 1}/`
    },
    filter: (page: Page, id: string) => {
      const pagination: any = page.frontmatter.pagination
      if (pagination) {
        return pagination.id === id && pagination.type === 'post'
      }
      return false
    },
    sorter: (prev: Page, next: Page) => {
      const { parseDate } = require('./util')
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

export function serializePaginations(paginations: SerializedPagination[], unstringedKeys: string[] = []) {
  return `[${paginations.map((p) => mapToString(p, unstringedKeys)).join(',\n')}]`
}
