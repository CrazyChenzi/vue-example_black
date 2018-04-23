import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'
Vue.use(Router)

const index = () => import('@/views/index/index')

export default new Router({
  routes: [
    { path: '/', component: index },
    ...routers
  ]
})
