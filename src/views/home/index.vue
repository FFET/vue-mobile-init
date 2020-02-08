<template>
  <div id="app">
    <Header :data="data.statistics" />
    <Detail :data="data.areaStat" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Detail from "./components/Detail";
import request from "@utils/request";

export default {
  name: "app",
  components: { Header, Detail },
  data() {
    return {
      data: {
        statistics: {},
        areaStat: []
      }
    };
  },
  created() {
    this.fnGetData();
  },
  methods: {
    async fnGetData() {
      const response = await request.get("https://m.shanghaim.net/napi/pneumonia/query");
      this.data = response.data;
    }
  }
};
</script>

<style lang="less" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.5rem;
  color: #2c3e50;
}
</style>
