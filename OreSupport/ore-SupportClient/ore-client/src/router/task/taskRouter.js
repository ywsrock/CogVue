/*
 *  コグエボデータ表示用ルータ定義
 */

import Layout from "@/layout/index.vue";
import Summary from "@/views/task/index.vue";

const taskRouter = {
  path: "/task",
  name: "task",
  components: {
    default: Layout,
  },
  redirect: "/task",
  children: [
    {
      path: "userSummary",
      name: "userSummary",
      component: Summary,
    },
  ],
};
export default taskRouter;
