<template>
  <div>
    <div class="menu">
      <ul>
        <li v-for="(item, index) in menu" :key="index" class="item">
          <router-link :to="item.route">
            <div class="icon"></div>
            <div>{{ item.name }}</div>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- <div class="menu2">
      <ul>
        <li v-for="(item, index) in index_middle" :key="index" class="item">
          {{ item.name }}
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: "Menu",
  data() {
    return {
      menu: []
      //   index_middle: []
    };
  },
  created() {
    this.fnGetData();
  },
  methods: {
    fnGetData() {
      request.get("/json/home.menu.json").then((response) => {
        console.log(response.data);
        this.menu = response.data.data;
        // this.index_middle = response.data.data.index_middle;
      });
    }
  }
};
</script>

<style>
.menu {
  margin-top: 0.8rem;
  background: #015496;
  padding: 0.3rem;
}
ul {
  display: flex;
  width: 100%;
  font-size: 0.3rem;
  text-align: center;
  flex-wrap: wrap;
}
a {
  color: #fff;
  text-decoration: none;
  display: inline-block;
  width: 100%;
}
.icon {
  background: url("./img/addUser.svg") no-repeat;
  background-size: 0.64rem 0.64rem;
  height: 0.64rem;
  width: 0.64rem;
  margin: 0.3rem auto;
}
.menu li:nth-child(2) .icon {
  background: url("./img/calendar.svg") no-repeat;
  background-size: 0.64rem 0.64rem;
}
.menu li:nth-child(3) .icon {
  background: url("./img/tool.svg") no-repeat;
  background-size: 0.64rem 0.64rem;
}
.menu li:nth-child(4) .icon {
  background: url("./img/chart.svg") no-repeat;
  background-size: 0.64rem 0.64rem;
}
.item {
  width: 25%;
}
</style>
