<template>
  <div class='login-bg'>
    <Card class='login-card'>
      <p slot='title'>Login</p>
      <Form ref='formLogin' :model='formLogin' :rules='ruleLogin' :label-width='60'>
        <FormItem prop='user' label='账号'>
          <Input v-model='formLogin.user' placeholder='请输入账号'></Input>
        </FormItem>
        <FormItem prop='password' label='密码'>
          <Input v-model='formLogin.password' placeholder='请输入密码'></Input>
        </FormItem>
        <FormItem prop='password' label='验证码'>
          <Input v-model='formLogin.password' placeholder='请输入验证码' size="larges">
            <div class='code' @click='refreshCode' slot='append'>
              <s-identify :identifyCode='identifyCode'></s-identify>
            </div>
          </Input>
        </FormItem>
      </Form>
      <Button type='primary' long @click='login("formLogin")'>Login</Button>
    </Card>
      
  </div>
</template>
<script>
import SIdentify from '../../components/identify';
export default {
  data() {
    return {
      formLogin: {
        user: '',
        password: ''
      },
      ruleLogin: {
        user: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      identifyCodes: '1234567890',
      identifyCode: ''
    };
  },
  components: {
    SIdentify
  },
  mounted() {
    const _this = this;
    document.onkeydown = function(event) {
      event.keyCode === 13 && _this.login('formLogin')
    }
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    login(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          localStorage.setItem('setToken', '111');
          this.$store.dispatch('setToken', '111');
          this.$router.push({ path: '/index' });
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
      console.log(this.identifyCode)
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
  width: 350px;
}
.code {
}
</style>
