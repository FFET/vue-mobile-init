<template>
  <div id="app">
    <Nav title="首页"></Nav>
    <Menu />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <van-button type="primary">默认按钮</van-button>
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav";
import Menu from "./menu";

export default {
  name: "app",
  components: {
    HelloWorld,
    Nav,
    Menu
  },
  data() {
    return {
      date: "",
      show: false
    };
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
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
</style>
