import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/content/home/index.vue"),
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () => import("../views/content/detail/index.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/content/search/index.vue"),
  },
  {
    path: "/mine",
    name: "mine",
    component: () => import("../views/content/mine/index.vue"),
  },
  {
    path: "/shop",
    name: "shop",
    component: () => import("../views/content/shop/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
