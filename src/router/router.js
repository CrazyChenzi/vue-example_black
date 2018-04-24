const addRoutes = () => import('@/views/addRoutes/addRoutes')
const renderVModel = () => import('@/views/render/renderVModel')
const registerModule = () => import('@/views/registerModule/registerModule')

let routerList = [
  { path: '/addRoutes', component: addRoutes, name: 'addRoutes', description: '使用addRouters动态添加路由，常用于权限分配！' },
  { path: '/renderVModel', component: renderVModel, name: 'renderVModel', description: '使用render函数实现v-model！' },
  { path: '/registerModule', component: registerModule, name: 'registerModule', description: '动态注册vuex模块，对于自定义生成组件很有用！' }
]

export default routerList