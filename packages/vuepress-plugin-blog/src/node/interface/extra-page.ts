export interface ExtraPage {
  /**
   * Page path
   */
  path: string
  /**
   * frontmatter for the injected page
   */
  frontmatter?: Record<string, any>
}
