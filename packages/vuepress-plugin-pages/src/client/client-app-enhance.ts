import { defineClientAppEnhance } from '@vuepress/client'
import { usePagesData } from './composables'

export default defineClientAppEnhance(({ app }) => {
  const pagesData = usePagesData()
  Object.defineProperty(app.config.globalProperties, '$pages', {
    get() {
      return pagesData.value
    }
  })
})
