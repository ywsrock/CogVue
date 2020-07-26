import Vue from 'vue'
import VueRouter from 'vue-router'

import userRouter from "./user/userRouter"
import blogRouter from "./blog/blogRouter"
import viewRouter from "./blog/viewRouter"
import blogList from "@/views/blog/blog_list.vue"
import blogDetail from "@/views/blog/blog_detail.vue"
import blogDelete from "@/views/blog/blog_list.vue"
import blogEdit from "@/views/blog/blog_edit.vue"
// import login from "@/views/login/index.vue";
import top from "@/views/user/UserInfo.vue"
import  Layout  from "@/layout/index.vue"

Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      name:"",
      components:{
        default:Layout,
      },
      redirect:'/top',
      children:[{
        path: 'top',
        name: 'top',
        component: top,
        meta:{title:'ユーザログイン'}
      }],

    },
    userRouter,
    blogRouter,
    viewRouter,

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
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      hidden: true 
    },
    {
      path:"/register",
      name:"",
      component: Layout,
      redirect:"/register",
      children:[
        {
          path:"/register",
          name:"userRegiste",
          component:() => import("@/views/user/UserRegister.vue")
          // component: login
        }        
      ]
    },    
]

const createRouter =() => new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher //リセットルータ
}

export default router
