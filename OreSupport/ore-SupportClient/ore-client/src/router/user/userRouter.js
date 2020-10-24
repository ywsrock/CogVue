
/* 
 *  ユーザプロフィール編集用ルータ定義 
 */


import userInfo from "@/views/user/UserInfo.vue"
import Layout from "@/layout/index.vue"


const userRouter = {
    path: "/userInfo",
    name: "userInfo",
    components: {
        default: Layout
    },
    redirect: '/',
    children: [
        {
            path: "/",
            name: "showuserInfo",
            component: userInfo
        },
        {
            path: "userUpdate",
            name: "userUpdate",
            component: () => import("@/views/user/UserUpdate.vue")
        },
        {
            path: "userDel",
            name: "userDel",
            component: () => import("@/views/user/UserDel.vue")
        }
    ]
};
export default userRouter