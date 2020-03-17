<template>
  <div>
    <myheader>登录</myheader>
    <mylogo></mylogo>
    <myinput
      type="text"
      placeholder="请输入手机号或用户"
      v-model="username"
      :rule="/^1\d{4,10}$/"
      message="用户输入不正确"
      ref="username"
    ></myinput>
    <myinput
      type="password"
      placeholder="请输入密码"
      v-model="password"
      :rule="/\d{1,4}$/"
      message="密码输入不正确"
      ref="password"
    ></myinput>
    <mybotton @click="login">登录</mybotton>
    <div class="links">
      <router-link to="/register">没有账号？去注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {
    this.username = this.$route.params.username;
    this.password = this.$route.params.password;
    console.log(this.$route.params);
  },
  methods: {
    login() {
      console.log(this.$refs);
      const result1 = this.$refs.username.validate(this.username);
      const result2 = this.$refs.password.validate(this.password);
      if (!result1 || !result2) {
        this.$toast.fail("用户名或密码格式有误");
        return;
      }
      this.$axios({
        url: "/login",
        method: "post",
        data: {
          username: this.username,
          password: this.password
        }
      }).then(res => {
        if (res.data.statusCode == 200) {
          this.$toast.success(res.data.message);
          this.$router.push("/user");
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.links {
  text-align: right;
  padding: 10px 10px;
}
</style>

