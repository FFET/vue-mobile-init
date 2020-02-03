<template>
  <div id="app">
    <Nav title="关于"></Nav>
    <div :style="{ 'margin-top': '40px' }">关于vue</div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "about",
  components: {
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
  color: #2c3e50;
}
</style>
