<template>
  <div id="app">
    <div id="login">
      <Input placeholder="请输入用户名" v-model="username" />
      <Input placeholder="请输入密码" v-model="password" />
      <Button v-on:click="fnLogin" type="primary">登录</Button>
    </div>
    <!-- <div id="app">
      <i-input v-model="value" placeholder="Enter something..." style="width: 300px" />
    </div>-->
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { Button, Input } from "iview";
import "iview/dist/styles/iview.css";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  components: {
    HelloWorld,
    Input,
    Button
  },
  methods: {
    fnLogin() {
      console.log("login");
      const { username, password } = this;
      console.log(username, password);
      // call api
      sessionStorage.setItem("token", username);
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.5rem;
  color: #2c3e50;
}
#login {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
</style>