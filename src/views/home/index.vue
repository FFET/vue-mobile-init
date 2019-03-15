<template>
  <div id="app">
  <Nav title='首页'></Nav>
  <Menu />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Nav from '@/components/Nav'
import Menu from './menu'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Nav,
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:.5rem;
  // text-align: center;
  color: #2c3e50;
}
</style>