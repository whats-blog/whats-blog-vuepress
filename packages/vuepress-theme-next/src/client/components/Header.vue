<template>
  <div class="header-wrapper">
    <router-link class="title" :to="{ path: '/' }">{{ $site.title }}</router-link>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'Header'
  })
</script>
