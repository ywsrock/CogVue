import Vue from "vue";
import VueRouter from "vue-router";

import userRouter from "./user/userRouter";
import taskRouter from "./task/taskRouter";
// import login from "@/views/login/index.vue";
import top from "@/views/user/UserInfo.vue";
import Layout from "@/layout/index.vue";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    components: {
      default: Layout,
    },
    redirect: "/top",
    children: [
      {
        path: "top",
        component: top,
      },
    ],
  },
  userRouter,
  {
    path: "/login",
    name: "login",
    components: {
      default: Layout,
    },
    redirect: "/userLogin",
    children: [
      {
        path: "/userLogin",
        component: () => import("@/views/login/index.vue"),
      },
    ],
    // hidden: true
  },
  {
    path: "/register",
    name: "register",
    component: Layout,
    redirect: "/register",
    children: [
      {
        path: "/register",
        name: "userRegiste",
        component: () => import("@/views/user/UserRegister.vue"),
        // component: login
      },
    ],
  },
  taskRouter,
];

const createRouter = () =>
  new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes,
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; //リセットルータ
}

export default router;
