const addRoutes = () => import('@/views/addRoutes/addRoutes')

let routerList = [
  { path: '/addRoutes', component: addRoutes, name: 'addRoutes', description: '使用addRouters动态添加路由，常用于权限分配！' }
]

export default routerList