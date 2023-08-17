import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"


const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path:"/home",
    name:"home",
    component: () => import("@/pages/home/index.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/pages/login/index.vue")
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router