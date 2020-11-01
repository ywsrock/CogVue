/*
 *  コグエボデータ表示用ルータ定義
 */

import Layout from "@/layout/index.vue";
import blog_top from "@/views/blog/blog_top.vue";
import createBlog from "@/views/blog/blogCreate.vue";
import blogList from "@/views/blog/blog_list.vue";
import blogDetail from "@/views/blog/blog_detail.vue";
import blogEdit from "@/views/blog/blog_edit.vue"

const blogRouter = {
  path: "/blog",
  name: "blog",
  components: {
    default: Layout,
  },
  redirect: "/blog",
  children: [
    {
      path: "blog_top",
      name: "blog_top",
      component: blog_top,
    },
    {
      path: "blogList",
      name: "blogList",
      component: blogList
    },
    {
      path: "blogDetail",
      name: "blogDetail",
      component: blogDetail
    },
    {
      path: "createBlog",
      name: "createBlog",
      component: createBlog
    },
    {
      path: "createBlog",
      name: "createBlog",
      component: createBlog
    },
    {
      path: "blogEdit",
      name: "blogEdit",
      component: blogEdit,
      children: [
        {
          path: "blogEdit",
          name: "blogUpdate",
          component: () => import("@/views/blog/blog_edit.vue")
        }]
    },
  ],
};
export default blogRouter;
