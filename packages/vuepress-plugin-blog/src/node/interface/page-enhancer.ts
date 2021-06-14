export interface PageEnhancer {
  /**
   * Conditions for enhancer execution
   */
  filter(filePath: string): boolean;
  /**
   * frontmatter injected to matched pages
   */
  frontmatter: Record<string, any>;
}
