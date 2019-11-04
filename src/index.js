import Vue from "vue";
import Home from "@/views/home";
import Add from "@/views/add";
import Login from "@/views/Login";
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
  mode: "hash",
  base: __dirname,
  routes: [
    { path: "/login", component: Login },
    {
      path: "/",
      meta: {
        auth: true // 用于判断当前路由是否需要登陆
      },
      component: Home
    },
    {
      path: "/Add",
      meta: {
        auth: true // 用于判断当前路由是否需要登陆
      },
      component: Add
    },
    {
      path: "/Calendar",
      meta: {
        auth: true // 用于判断当前路由是否需要登陆
      },
      component: Calendar
    },
    { path: "*", component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {
  let validator =
    typeof to.meta.auth == "undefined" ||
    !to.meta.auth ||
    sessionStorage.getItem("token");
  let result = validator
    ? {}
    : {
        path: "login" // 跳转到命名路由
        // query: {
        //   url: to.fullPath // 做一个来源页面，用于登陆成功之后跳转
        // }
      };
  next(result);
});

Vue.config.productionTip = false;

new Vue({
  router,
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>`
}).$mount("#app");
