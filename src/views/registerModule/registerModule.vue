<template>
  <div>
    {{message}}
    <div style="color: red; font-size: 20px">注册前后store中modules对比：</div>
    <div v-for="(item, key, index) in $store.state">{{key}} {{item}}</div>
    <Button type="primary" size="small" @click="registerModule">registerModule</Button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: '动态注册vuex模块，对于自定义生成组件很有用！'
    }
  },
  methods: {
    registerModule () {
      this.$store.registerModule('registerModule', {
        state: {},
        mutations: {},
        actions: {},
        getters: {}
      })
    }
  }
}
</script>

