/*
 *  商品用ルータ定義
 */

import solutionTop from "@/views/solution/Top.vue";
import solutionIndex from "@/views/solution/Index.vue";
import solutionDetail from "@/views/solution/Detail.vue";
import Layout from "@/layout/index.vue";

const solutionRouter = {
  path: "/solution",
  name: "solution",
  components: {
    default: Layout,
  },
  redirect: "/solution",
  children: [
    {
      path: "top",
      name: "solutionTop",
      component: solutionTop,
    },
    {
      path: "index",
      name: "solutionIndex",
      component: solutionIndex,
    },
    {
      path: "detail",
      name: "solutionDetail",
      component: solutionDetail,
    },
  ],
};

export default solutionRouter;
