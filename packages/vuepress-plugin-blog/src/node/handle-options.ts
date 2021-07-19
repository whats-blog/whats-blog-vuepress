import type { App, AppOptions, BundlerConfig, ThemeConfig } from '@vuepress/core'
import { chalk, fs, logger, path } from '@vuepress/utils'

import { BlogPluginOptions, DirectoryClassifier } from './interface/options'
import { PageEnhancer } from './interface/page-enhancer'
import { upperFirstChar } from './util'
import { InternalPagination, PaginationConfig } from './interface/pagination'
import { ClassifierTypeEnum } from './interface/classifier'
import { resolvePaginationConfig } from './pagination'

export function handleOptions(options: BlogPluginOptions, app: App) {
  let { directories = [] } = options

  const { pageEnhancers: directoryPageEnhancer, paginations: directoryPaginations } = handleDirectoryClassification(
    directories,
    app.options
  )

  return {
    pageEnhancers: [...directoryPageEnhancer],
    paginations: [...directoryPaginations]
  }
}

function handleDirectoryClassification(
  directories: DirectoryClassifier[],
  appOption: AppOptions<ThemeConfig, BundlerConfig>
) {
  const { source: sourceDir } = appOption

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

  const pageEnhancers: PageEnhancer[] = []
  const paginations: InternalPagination[] = []

  for (let directory of directories) {
    const {
      id,
      dirname,
      path: indexPath = `/${directory.id}/`,
      itemPermalink = '/:year/:month/:day/:slug.html',
      pagination = {} as PaginationConfig
    } = directory

    const { title = upperFirstChar(id) } = directory

    pageEnhancers.push({
      filter(filePath) {
        return Boolean(filePath) && filePath!.startsWith(`${dirname}/`)
      },
      frontmatter: {
        permalinkPattern: itemPermalink,
        pagination: {
          type: 'post',
          id
        }
      }
    })

    paginations.push({
      id,
      classifierType: ClassifierTypeEnum.DIRECTORY,
      ...resolvePaginationConfig(title, indexPath, pagination)
    })
  }

  return { pageEnhancers, paginations }
}
