<template>
  <div>
    源路由js：<div>{{routerList}} </div>
    <Button type="primary" size="small" @click="addRoutes">addRoutes</Button>
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
  methods: {
    addRoutes () {
      let router = [
        {
          path: '*', component: (resolve) => require(['@/views/addRoutes/404.vue'], resolve), name: '404', description: '这是addRoutes出来的404页面'
        },
        {
          path: '/foo', component: (resolve) => require(['@/views/addRoutes/foo.vue'], resolve), name: 'foo', description: '这是addRoutes出来的foo页面'
        }
      ]
      // addRoutes
      this.$router.addRoutes(router)
      this.$Notice.success({
        title: '添加成功，快去试试跳转路由吧',
        render: h => {
          return h('div', [
            h('a', {
              style: {
                display: 'block',
                marginBottom: '10px'
              },
              on: {
                click: () => {
                  this.$router.push({path: '/foo'})
                }
              }
            }, '跳转到foo页面'),
            h('a', {
              style: {
                display: 'block'
              },
              on: {
                click: () => {
                  this.$router.push({path: '/404'})
                }
              }
            }, '跳转到404页面')
          ])
        }
      })
    }
  }
}
</script>

