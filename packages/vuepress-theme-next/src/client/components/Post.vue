<template>
  <div>
    <h1>{{ $page.title }}</h1>

    <article>
      <Content />
    </article>

    <nav class="post-nav">
      <span class="prev" v-if="$pagination.hasPrev">
        <span>← </span>
        <router-link :to="$pagination.prevLink">
          {{ $pagination.prevText }}
        </router-link>
      </span>
      <span class="next" v-if="$pagination.hasNext">
        <router-link :to="$pagination.nextLink">
          {{ $pagination.nextText }}
        </router-link>
        <span> →</span>
      </span>
    </nav>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Post'
  })
</script>
