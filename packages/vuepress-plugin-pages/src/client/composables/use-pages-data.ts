import type { Ref } from 'vue'
import { ref } from 'vue'
import { pages, PagesData } from '@temp/@whats-blog/vuepress-plugin-pages'

export type PagesDataRef<T extends PagesData = PagesData> = Ref<T>

export const usePagesData = <T extends PagesData = PagesData>(): PagesDataRef<T> => ref(pages) as PagesDataRef<T>
