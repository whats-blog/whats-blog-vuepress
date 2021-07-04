import type { App } from '@vuepress/core'
import { createPage } from '@vuepress/core'

import { handleOptions } from "./handle-options";

const blogPlugin = (options, app: App) => {
  const {extraPages, pageEnhancers} = handleOptions(options, app);
  return {
    name: '@whats-blog/vuepress-plugin-blog',
    plugins: [require.resolve('@whats-blog/vuepress-plugin-pages')],
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
