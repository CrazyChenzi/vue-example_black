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
        <FormItem prop='identify' label='验证码'>
          <div class="identify">
            <Input v-model='formLogin.identify' placeholder='请输入验证码'></Input>
            <div class='code' @click='refreshCode'>
              <s-identify :identifyCode='identifyCode'></s-identify>
            </div>
          </div>
        </FormItem>
      </Form>
      <Button type='primary' long @click='login("formLogin")'>Login</Button>
    </Card>
  </div>
</template>
<script>
import SIdentify from "../../components/identify";
export default {
  data() {
    const validateIdentify = (rule, value, callback) => {
      if (value === this.identifyCode) {
        callback()
        } else {
        callback(new Error("请输入验证码"))
      }
    }
    return {
      formLogin: {
        user: "",
        password: "",
        identify: ""
      },
      ruleLogin: {
        user: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        identify: [{ required: true, validator: validateIdentify, trigger: 'blur' }]
      },
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  components: {
    SIdentify
  },
  mounted() {
    const _this = this
    document.onkeydown = function(event) {
      event.keyCode === 13 && _this.login("formLogin")
    }
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    login(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          localStorage.setItem("setToken", "111")
          this.$store.dispatch("setToken", "111")
          this.$router.push({ path: "/index" })
        } else {
          this.$Message.error("Fail!")
        }
      })
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      this.identifyCode = ""
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
    }
  }
};
</script>
<style scoped>
.login-bg {
  height: 100vh;
  background-image: url("http://owiq5ccyd.bkt.clouddn.com/sidebar-bg.jpg");
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-card {
  width: 350px;
}
.identify {
  display: flex;
  align-items: center;
}
.code {
  margin-left: 5px;
}
</style>
