
/* 
 *  ユーザプロフィール編集用ルータ定義 
 */


 import userInfo from "@/views/user/UserInfo.vue"
 import userUpdate from "@/views/user/UserUpdate.vue"

 
const userRouter = {
    path:"/userInfo",
    name:"userInfo",
    components:{
        default:userInfo,
        sub:userUpdate
    },
    children:[
        {
        path:"userRegister",
        name:"userRegister",
        component:() => import("@/views/user/UserRegister.vue")
    },
    {
        path:"userUpdate",
        name:"userUpdate",
        component:() => import("@/views/user/UserUpdate.vue")
    },
    {
        path:"userDel",
        name:"userDel",
        component:() => import("@/views/user/UserDel.vue")
    }
]
};
export default userRouter