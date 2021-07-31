import { ref, Ref } from 'vue'
import { paginations } from '@temp/@whats-blog/vuepress-plugin-blog/pagination'

export function usePaginationData(): Ref<any[]> {
  return ref(paginations)
}
