<template>
  <div id="app">
    <router-view/>
    <share></share>
  </div>
</template>
<script>
import share from '@/views/share/share'
export default {
  name: 'App',
  components: { share }
}
</script>
<style>
  #app {
    margin: 0;
    padding: 0;
    border: none;
  }
</style>
