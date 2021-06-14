import type { App } from '@vuepress/core'
import { chalk, fs, logger, path } from '@vuepress/utils'

import { BlogPluginOptions } from './interface/options'
import { ExtraPage } from './interface/extra-page'
import { PageEnhancer } from './interface/page-enhancer'
import { upperFirstChar } from './util'

export function handleOptions(options: BlogPluginOptions, app: App) {
  let { directories = [] } = options
  const { source: sourceDir } = app.options

  directories = directories.filter((directory) => {
    const targetDir = path.join(sourceDir, directory.path)
    if (fs.existsSync(targetDir)) {
      return true
    }

    logger.warn(
      `[@vuepress/plugin-blog] Invalid directory classifier: ${chalk.cyan(directory.id)}, ` +
        `${chalk.gray(targetDir)} doesn't exist!`
    )

    return false
  })

  const extraPages: ExtraPage[] = []
  const pageEnhancers: PageEnhancer[] = []

  for (let directory of directories) {
    const {
      id,
      dirname,
      path: indexPath = `/${directory.id}/`,
      itemPermalink = '/:year/:month/:day/:slug.html'
    } = directory

    const { title = upperFirstChar(id) } = directory

    if (indexPath) {
      extraPages.push({
        path: indexPath,
        frontmatter: {
          title
        }
      })
    }

    pageEnhancers.push({
      filter(filePath) {
        return Boolean(filePath) && filePath.startsWith(`${dirname}/`)
      },
      frontmatter: {
        permalinkPattern: itemPermalink
      }
    })
  }

  return {
    extraPages,
    pageEnhancers
  }
}
