<template>
  <div>
    <ul class="post-list">
      <li v-for="post of $pagination.posts" :key="post.key">
        <div>
          <router-link :to="post.path" class="title">{{ post.title }}</router-link>
          <span class="date">{{ post.date }}</span>
        </div>
      </li>
    </ul>
    <nav class="page-nav" v-if="$pagination.pages.length > 1">
      <router-link v-for="(page, index) of $pagination.pages" :key="index" :to="page.path" class="nav-item">
        {{ index + 1 }}
      </router-link>
    </nav>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Page'
  })
</script>
