import Vue from "vue";
import Home from "@/views/Home";
import About from "@/views/About";
import Login from "@/views/Login";
import NotFound from "@/views/notFound";
import "@/styles/index.less";

import VueRouter from "vue-router";
Vue.use(VueRouter);

// vant
import { Button, Calendar, Cell, CellGroup } from "vant";
Vue.use(Button);
Vue.use(Calendar);
Vue.use(Cell);
Vue.use(CellGroup);

const router = new VueRouter({
  mode: "hash",
  base: __dirname,
  routes: [
    { path: "/login", component: Login },
    {
      path: "/",
      meta: {
        auth: true
      },
      component: Home
    },
    {
      path: "/about",
      meta: {
        auth: false
      },
      component: About
    },
    { path: "*", component: NotFound }
  ]
});

router.beforeEach((to, from, next) => {
  let validator =
    typeof to.meta.auth == "undefined" || !to.meta.auth || sessionStorage.getItem("token");
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
