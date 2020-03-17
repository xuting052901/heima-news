<template>
  <div>
    <myheader>用户注册</myheader>
    <mylogo></mylogo>
    <myinput
      type="text"
      placeholder="请输入手机号"
      :rule="/^1\d{4,10}/"
      message="用户名账号格式不对"
      v-model="username"
    ></myinput>
    <myinput
      type="password"
      placeholder="请输入密码"
      :rule="/\d{1,4}/"
      message="密码格式错误"
      v-model="password"
    ></myinput>
    <myinput type="text" :rule="/^[\u4e00-\u9fa5]{3,7}$/" message="昵称必须为3-7位的中文" v-model="nickname"></myinput>
    <mybotton @click="clickfn">注册</mybotton>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: ""
    };
  },
  methods: {
    clickfn() {
      this.$axios({
        url: "/register",
        method: "post",
        data: {
          username: this.username,
          password: this.password,
          nickname: this.nickname
        }
      }).then(res => {
        console.log(res);
        if (res.data.statusCode == 200) {
          this.$router.push({
            name: "login",
            params: {
              username: this.username,
              password: this.password
            }
          });
          console.log(this.username, this.password);
          this.$toast.success(res.data.message);
        } else {
          this.$toast.fail(res.data.message);
        }
      });
    }
  }
};
</script>

<style>
</style>
