/*
 *  コグエボデータ表示用ルータ定義
 */

import Layout from "@/layout/index.vue";

const knowledgeRouter = {
  path: "/knowledge",
  name: "knowledge",
  components: {
    default: Layout,
  },
  redirect: "/knowledge",
  children: [
    {
      path: "knowledgeDetail",
      name: "knowledgeDetail",
      component: () => import("@/views/knowledge/knowledge_detail.vue")
    },
    {
      path: "knowledgeList",
      name: "knowledgeList",
      component: () => import("@/views/knowledge/knowledge_list.vue")
    },
  ],
};
export default knowledgeRouter;
