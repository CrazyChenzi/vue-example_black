<template>
  <div>
    <div>目录：</div>
    <ul>
      <li v-for="(item, index) in routerList" :key="index">
        <router-link :to="item.path"> <Icon type="forward" color="#2d8cf0"></Icon>  {{item.name}} {{item.description}} </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import routers from '@/router/router'
export default {
  data () {
    return {
      routerList: routers
    }
  },
  mounted () {
    console.log(routers)
  }
}
</script>
<style scoped>

</style>
