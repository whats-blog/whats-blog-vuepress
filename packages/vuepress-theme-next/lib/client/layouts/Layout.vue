<template>
  <div class="theme-container">
    <div class="content-container">
      <Content />
    </div>
    <div class="side-container">
      <Sidebar />
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'

  import Sidebar from '../components/Sidebar.vue'

  export default defineComponent({
    name: 'Layout',

    components: {
      Sidebar
    }
  })
</script>

<style scoped>
  .theme-container {
    width: 80%;
    max-width: 1200px;
    margin: auto;
    display: flex;
  }

  .content-container {
    flex: 1;
    background-color: white;
    padding: 64px;
    margin-right: 20px;
  }

  .side-container {
    width: 240px;
    background-color: white;
  }
</style>

<style>
  body {
    background-color: #f5f7f9;
  }
</style>
