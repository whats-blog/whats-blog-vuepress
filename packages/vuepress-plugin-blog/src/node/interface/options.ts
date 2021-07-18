import { PaginationConfig } from './pagination'

export interface DirectoryClassifier {
  /**
   * Unique id for current classifier.
   */
  id: string
  /**
   * Matched directory name.
   */
  dirname: string
  /**
   * Entry page for current classifier.
   */
  path: string
  /**
   * Permalink for matched page.
   */
  itemPermalink?: string
  /**
   * Entry and pagination page titles for current classifier.
   */
  title?: string
  /**
   * Pagination config for current classifier.
   */
  pagination?: PaginationConfig
}

/**
 * Options for this plugin.
 */
export interface BlogPluginOptions {
  directories: DirectoryClassifier[]
}
