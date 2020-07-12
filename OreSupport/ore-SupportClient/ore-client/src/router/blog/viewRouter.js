
/* 
 *  ユーザプロフィール編集用ルータ定義 
 */


 import viewBlog from "@/views/blog/blogView.vue"

const viewRouter = {
    
    path:"/viewBlog",
    name:"viewBlog",
    components:{
        default:viewBlog
    }
};


export default viewRouter