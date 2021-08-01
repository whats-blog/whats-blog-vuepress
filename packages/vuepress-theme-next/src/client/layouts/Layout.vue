<template>
  <div>
    <Header></Header>
    <div class="content-wrapper">
      <div class="content-container">
        <Page v-if="contentType === 'page'" />
        <Post v-else />
      </div>
    </div>
  </div>
</template>

<script>
  import { computed, defineComponent } from 'vue'
  import { usePageData } from '@vuepress/client'

  import Page from '../components/Page.vue'
  import Post from '../components/Post.vue'
  import Header from '../components/Header.vue'

  export default defineComponent({
    name: 'Layout',
    components: {
      Page,
      Post,
      Header
    },
    setup() {
      const pageData = usePageData()
      const contentType = computed(() => {
        if (pageData.value.frontmatter.pagination) {
          return pageData.value.frontmatter.pagination.type
        }
        return 'post'
      })
      return {
        contentType
      }
    }
  })
</script>
