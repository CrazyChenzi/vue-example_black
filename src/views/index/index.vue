<template>
  <div>
    <div>目录：</div>
    <ul>
      <li v-for="(item, index) in routerList" :key="index">
        <router-link :to="item.path"> <Icon type="forward" color="#2d8cf0"></Icon>  {{item.name}}： {{item.description}} </router-link>
      </li>
    </ul>
    <share-circle></share-circle>
  </div>
</template>
<script>
import routers from '@/router/router'
import share from '../share/share'
export default {
  data () {
    return {
      routerList: routers
    }
  },
  components: {
    'share-circle': share
  }
}
</script>
<style scoped>

</style>
