<template>
  <div id="app">
    <Nav title="日历"></Nav>
    <Menu />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import Nav from "@/components/Nav";

export default {
  name: "app",
  components: {
    HelloWorld,
    Nav
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.5rem;
  // text-align: center;
  color: #2c3e50;
}
</style>
