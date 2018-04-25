const addRoutes = () => import('@/views/addRoutes/addRoutes')
const renderVModel = () => import('@/views/render/renderVModel')
const registerModule = () => import('@/views/registerModule/registerModule')
const iterator = () => import('@/views/iterator/iterator')
const share = () => import('@/views/share/share')

let routerList = [
  { path: '/addRoutes', component: addRoutes, name: 'addRoutes', description: '使用addRouters动态添加路由，常用于权限分配！' },
  { path: '/renderVModel', component: renderVModel, name: 'renderVModel', description: '使用render函数实现v-model！' },
  { path: '/registerModule', component: registerModule, name: 'registerModule', description: '动态注册vuex模块，对于自定义生成组件很有用！' },
  { path: '/iterator', component: iterator, name: 'iterator', description: 'iterator遍历器以及对数组的操作...' },
  { path: '/share', component: share, name: 'share', description: '超炫旋转环状菜单特效' }
]

export default routerList