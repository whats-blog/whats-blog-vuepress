import { ref } from 'vue'
import { paginations } from '@temp/@whats-blog/vuepress-plugin-blog/pagination'

export function usePaginationData() {
  return ref(paginations)
}
