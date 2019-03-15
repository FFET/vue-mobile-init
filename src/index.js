import Vue from "vue";
import Home from "@/views/home";
import Add from "@/views/add";
import Calendar from "@/views/calendar";
import NotFound from "@/views/notFound";
import "@/styles/index.less";

import VueRouter from "vue-router";

// 1. Use plugin.
// This installs <router-view> and <router-link>,
// and injects $router and $route to all router-enabled child components
Vue.use(VueRouter);

// 2. Define route components
// const NotFound = { template: "<div>404</div>" };

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/Add", component: Add },
    { path: "/Calendar", component: Calendar },
    { path: "*", component: NotFound }
  ]
});

Vue.config.productionTip = false;

new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>`
}).$mount("#app");
