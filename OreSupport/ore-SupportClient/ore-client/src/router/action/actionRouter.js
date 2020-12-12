/*
 *  コグエボデータ表示用ルータ定義
 */

import Layout from "@/layout/index.vue";
import userAction from "@/views/user/UserAction.vue";

const taskRouter = {
    path: "/action",
    name: "action",
    components: {
        default: Layout,
    },
    redirect: "/userAction",
    children: [
        {
            path: "userAction",
            name: "userAction",
            component: userAction,
        },
    ],
};
export default taskRouter;
