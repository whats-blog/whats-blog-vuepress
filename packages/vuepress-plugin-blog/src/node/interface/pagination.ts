import type { BlogPage } from '../../types/vuepress-blog'
import { ClassifierTypeEnum } from './classifier'

/**
 * prev and next page link text
 */
interface LinkText {
  /**
   * Text for previous links.
   */
  prevText: string
  /**
   * Text for next links.
   */
  nextText: string
}

export type PageFilter = (page: BlogPage, id: string) => boolean

export type PageSorter = (prev: BlogPage, next: BlogPage) => boolean | number

export type GetPaginationPageUrl = (index: number) => string

export type GetPaginationPageTitle = (index: number, id: string) => string

/**
 * Pagination config options for users.
 */
export interface PaginationConfig extends Partial<LinkText> {
  /**
   * Filter for matched pages.
   */
  filter?: PageFilter
  /**
   * Sorter for matched pages.
   */
  sorter?: PageSorter
  /**
   * Maximum number of posts per page.
   */
  lengthPerPage?: number
  /**
   * Layout for pagination Page (Except the index page.)
   */
  layout?: string
  /**
   * A function to get the url of pagination page dynamically.
   */
  getPaginationPageUrl?: GetPaginationPageUrl
  /**
   * A function to get the title of pagination page dynamically.
   */
  getPaginationPageTitle?: GetPaginationPageTitle
}

export interface PaginationIdentity {
  /**
   * Narrow ID
   */
  id: string
}

/**
 * Internally used fields.
 */
export interface InternalPagination extends PaginationConfig, PaginationIdentity {
  /**
   * Record which classfier create this pagination.
   */
  classifierType: ClassifierTypeEnum
}

/**
 * Auto-generated pagination page
 */
interface PaginationPage {
  /**
   * Path of current pagination page
   */
  path: string
  /**
   * Store the first and last page index matched
   */
  interval: Array<number>
}

/**
 * Serialized pagination, generated for front-end use
 */
export interface SerializedPagination extends PaginationIdentity, LinkText {
  /**
   * Stringified filter function
   */
  filter: string
  /**
   * Stringified sorter function
   */
  sorter: string
  /**
   * Details under current pagination
   */
  pages: PaginationPage[]
}
