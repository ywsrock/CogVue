import Vue from 'vue'
import VueRouter from 'vue-router'

import userRouter from "./user/userRouter"
import login from "@/views/login/index.vue";
import  Layout  from "@/layout/index.vue"

Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      name:"",
      components:{
        default:Layout,
      },
      redirect:'/login',
      children:[{
        path: 'login',
        name: 'login',
        component: login
      }]

    },
    // ユーザログイン
  //   {
  //     path:"/",
  //     name:"login",
  //     component:login
  // },
    userRouter    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
