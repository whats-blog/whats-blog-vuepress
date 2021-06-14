import type { App } from '@vuepress/core'
import { createPage } from '@vuepress/core'

import { handleOptions } from "./handleOptions";

const blogPlugin = (options, app: App) => {
  const {extraPages, pageEnhancers} = handleOptions(options, app);
  return {
    name: '@whats-blog/vuepress-plugin-blog',
    extendsPageOptions(filePath: string) {
      const frontmatter = {};
      pageEnhancers.forEach(({filter, frontmatter: enhancerFrontmatter}) => {
        if(filter(filePath)) {
          Object.assign(frontmatter, enhancerFrontmatter);
        }
      })
      return { frontmatter }
    },
    async onInitialized() {
      const {pages} = app;
      for(let pageInfo of extraPages) {
        const extraPage = await createPage(app, pageInfo);
        pages.push(extraPage);
      }
    }
  }
}

export default blogPlugin
