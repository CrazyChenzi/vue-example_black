const addRoutes = () => import('@/views/addRoutes/addRoutes')
const renderVModel = () => import('@/views/render/renderVModel')

let routerList = [
  { path: '/addRoutes', component: addRoutes, name: 'addRoutes', description: '使用addRouters动态添加路由，常用于权限分配！' },
  { path: '/renderVModel', component: renderVModel, name: 'renderVModel', description: '使用render函数实现v-model！' }
]

export default routerList