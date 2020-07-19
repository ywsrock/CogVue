/*
 *  コグエボデータ表示用ルータ定義
 */

import Layout from "@/layout/index.vue";
import Record from "@/views/task/Record.vue";

const taskRouter = {
  path: "/task",
  name: "task",
  components: {
    default: Layout,
  },
  redirect: "/",
  children: [
    {
      path: "userHistory",
      name: "userHistory",
      component: Record,
    },
  ],
};
export default taskRouter;
