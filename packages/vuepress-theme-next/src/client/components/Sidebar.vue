<template>
  <aside>
    <div class="title-wrapper">
      <div class="title">{{ siteData.title }}</div>
    </div>
    <nav class="site-nav">
      <ul class="menu">
        <li class="nav-item" v-for="(navItem, index) in navItems" :key="index">
          <a :href="navItem.link" target="_blank" v-if="navItem.link.startsWith('http')">{{ navItem.text }}</a>
          <router-link :to="navItem.link" v-else>{{ navItem.text }}</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  import { computed, defineComponent } from 'vue'
  import { useSiteLocaleData } from '@vuepress/client'
  import { useThemeData } from '@vuepress/plugin-theme-data/lib/client'

  export default defineComponent({
    setup() {
      const siteData = useSiteLocaleData()
      const themeData = useThemeData()
      const navItems = computed(() =>
        themeData.value.nav.map(({ text, link }) => {
          if (link && !link.startsWith('http') && !link.endsWith('/')) {
            link = `${link}.html`
          }
          return { text, link }
        })
      )
      return {
        siteData,
        navItems
      }
    }
  })
</script>

<style scoped>
  .title-wrapper {
    background-color: #222;
    padding: 24px 0;
    color: white;
  }

  .title {
    text-align: center;
    font-weight: bold;
    font-size: 1.2em;
  }

  .menu {
    padding: 0;
  }

  .nav-item {
    cursor: pointer;
    display: block;
    height: 36px;
    padding-left: 16px;
    line-height: 36px;
  }

  .nav-item:hover {
    background-color: #f5f7f9;
  }

  .nav-item a {
    text-decoration: none;
    color: #555;
  }
</style>
