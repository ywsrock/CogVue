
/* 
 *  ユーザプロフィール編集用ルータ定義 
 */


 import createBlog from "@/views/blog/blogCreate.vue"
//  import blogList from "@/views/blog/blog_list.vue"
//  import blogDetail from "@/views/blog/blog_detail.vue"

const blogRouter = {
    
    path:"/createBlog",
    name:"createBlog",
    components:{
        default:createBlog
        },
    };


export default blogRouter