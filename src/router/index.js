import Vue from 'vue'
import Router from 'vue-router'

const Login = (resolve) => require(['@/views/login/login.vue'], resolve)  // 登录页
const Home = (resolve) => require(['@/views/home/home.vue'], resolve)  // 首页
const CanvasPan = (resolve) => require(['@/views/canvas/canvasPan.vue'], resolve)  // canvas画板
// markdown编辑器
const MavonEditor = (resolve) => require(['@/views/markdown/mavonEditor.vue'], resolve)  
const TuiEditor = (resolve) => require(['@/views/markdown/tuiEditor.vue'], resolve)  
// addRoute 测试
const AddRoutes = (resolve) => require(['@/views/addRoutesTest/addRoutes.vue'], resolve)
const Foo = (resolve) => require(['@/views/addRoutesTest/foo.vue'], resolve)

Vue.use(Router)

export const constantRouterMap  = [
  { path: '/login', component: Login, hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/', name: '首页', component: Home, redirect: '/index', children: [
    { path: 'index', component: Home }
  ] }
]

export default new Router({
  routes: constantRouterMap
})

export const asyncRouterMap = [
  { path: '/addRoutes', name: 'addRouters', component: AddRoutes },
  { path: '/foo', name: 'foo', component: Foo },
  { path: '*', redirect: '/404', hidden: true }
]
