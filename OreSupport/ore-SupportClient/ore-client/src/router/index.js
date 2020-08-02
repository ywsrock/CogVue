import Vue from "vue";
import VueRouter from "vue-router";

import userRouter from "./user/userRouter";
import taskRouter from "./task/taskRouter";
// import login from "@/views/login/index.vue";
import top from "@/views/user/UserInfo.vue";
import Layout from "@/layout/index.vue";
import blogRouter from "./blog/blogRouter"
import blog_top from "@/views/blog/blog_top.vue"
import blogList from "@/views/blog/blog_list.vue"
import blogDetail from "@/views/blog/blog_detail.vue"
import blogDelete from "@/views/blog/blog_list.vue"
import blogEdit from "@/views/blog/blog_edit.vue"

Vue.use(VueRouter);

const routes = [


  {
    path: "/",
    components: {
      default: Layout,
    },
    redirect: "/blog_top",
    children: [
      {
        path: "blog_top",
        component: blog_top ,
      },
    ],
  },




  {
     path: "/",
    components: {
      default: Layout,
    },

  },
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
  blogRouter,

  {
    path:"/blogList",
    name:"blogList",
    component:blogList
},
{
  path:"/blogDetail",
  name:"blogDetail",
  component:blogDetail
},
{
  path:"/blogDelete",
  name:"blogDelete",
  component:blogDelete
},
{
  path:"/blogEdit",
  name:"blogEdit",
  component:blogEdit,
  children:[
    {
        path:"/blogEdit",
        name:"blogUpdate",
        component:() => import("@/views/blog/blog_edit.vue")
    }]
},





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
