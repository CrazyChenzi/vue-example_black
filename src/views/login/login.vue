<template>
  <div class="login-bg">
    <Card class="login-card">
      <p slot="title">Login</p>
      <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
        <FormItem prop="user">
          <Input v-model="formLogin.user" placeholder="请输入账号"></Input>
        </FormItem>
        <FormItem prop="password">
          <Input v-model="formLogin.password" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem>
          <Button type="primary" long @click="login">Login</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
 export default {
    data () {
      return {
        formLogin: {
          user: '',
          password: ''
        },
        ruleLogin: {}
      }
    },
    methods: {
      login () {
        this.$store.dispatch('setToken', '111')
        this.$router.push({path: '/test'})
      }
    }
  }
</script>
<style scoped>
  .login-bg {
    height: 100vh;
    background-image: url('http://owiq5ccyd.bkt.clouddn.com/sidebar-bg.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .login-card {
    width: 400px;
  }
</style>
