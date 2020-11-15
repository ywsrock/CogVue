/* eslint-disable */
import { getToken, setToken, removeToken } from "@/utils/auth"
import { createBlog,getBlogList,viewBlog,getBlogDetail,blogDelete, blogUpdate,postComment,searchBlog} from "@/utils/api/blog"
import { resetRouter } from '@/router'


/*
 * ストア管理情報、全アプリケーション共有
 */
const state = {
    id:"",
    // ユーザ名
    title: "",
    // ユーザ
    content: [],

    comment: [],

    userProfile: [],

    userName:"",

    commentName:"",

    blogImg: "",
}

/*
 * ストア情報取得
 */
const getters = {
    get_id: state => state.id,
    get_title: state => state.title,
    get_content: state => state.content,
    get_comment: state => state.comment,
    get_userName: state => state.userName,
    get_userProfile: state => state.userProfile,
    get_commentName: state => state.commentName,
    get_blogImg: state => state.blogImg,
}

/*
 *ストア情報編集処理を行う（同期）
 *ストア情報設定処理
 */
const mutations = {
    set_id: (state, id) => {
        state.id = id;
    },
    //ユーザ名
    set_title: (state, title) => {
        state.title = title;
    },
    // データ
    set_content: (state, data) => {
        state.content = data
    },
    set_comment: (state, data) => {
        state.comment = data
    },
    set_userName: (state, data) => {
        state.userName = data
    },
    set_userProfile: (state, data) => {
        state.userProfile = data
    },
    set_commentName: (state, data) => {
        state.commentName = data
    },
    set_blogImg: (state, data) => {
        state.blogImg = data
    },

}

/*
 *ストア情報編集処理を行う（非同期処理）
 */
const actions = {
    // ユーザログイン処理
    createBlog(context, blogInfo) {
        return new Promise((resolve, reject) => {
            // var tile = blogInfo.title;
            // var content = blogInfo.content;
            createBlog(blogInfo)
                .then(res => {
                    const data = res.data;
                    resolve(data);
                }).catch(error => {
                    reject(error);
                })
        })
    },

        // ブログリスト
        getBlogList(context, blogInfo) {
            return new Promise((resolve, reject) => {
                getBlogList()
                    .then(res => {
                        const data = res.data;
                        // const content = data.content;

                        context.commit("set_id",data.id)
                        //ブログ名
                        context.commit("set_title",data.title)
                        //ブログ内容
                        context.commit("set_content",data.content)


                        resolve(data);
                    }).catch(error => {
                        reject(error);
                    })
            })
        },


        // ブログ詳細
        getBlogDetail(context, blogId) {
            return new Promise((resolve, reject) => {
                getBlogDetail(blogId)
                    .then(res => {
                        const data = res.data;
                        const content = data.content;

                        context.commit("set_id",data.id)
                        //ブログ名
                        context.commit("set_title",data.title)
                        //ブログ内容
                        context.commit("set_content",data.content)

                        context.commit("set_comment",data.comment)

                        context.commit("set_userProfile",data.userProfile)

                        context.commit("set_blogImg",data.blogImg)
                        resolve(data);
                    }).catch(error => {
                        reject(error);
                    })
            })
        },

        blogDelete(context, blogId) {
            return new Promise((resolve, reject) => {
                blogDelete(blogId)
                    .then(res => {
                        const data = res.data;
                        const content = data.content;

                        context.commit("set_id",data.id)
                        //ブログ名
                        context.commit("set_title",data.title)
                        //ブログ内容
                        context.commit("set_content",data.content)


                        resolve(data);
                    }).catch(error => {
                        reject(error);
                    })
            })
        },

        blogUpdate(context, blogInfo) {
            return new Promise((resolve, reject) => {
                // var tile = blogInfo.title;
                // var content = blogInfo.content;
                blogUpdate(blogInfo)
                    .then(res => {
                        const data = res.data;
                        resolve(data);
                    }).catch(error => {
                        reject(error);
                    })
            })
        },

        postComment(context, blogInfo) {
            return new Promise((resolve, reject) => {
                // var tile = blogInfo.title;
                // var content = blogInfo.content;
                postComment(blogInfo)
                    .then(res => {
                        const data = res.data;
                        resolve(data);
                    }).catch(error => {
                        reject(error);
                    })
            })
        },


        searchBlog(context, blogInfo) {
            return new Promise((resolve, reject) => {
                searchBlog()
                    .then(res => {
                        const data = res.data;
                        // const content = data.content;

                        context.commit("set_id",data.id)
                        //ブログ名
                        context.commit("set_title",data.title)
                        //ブログ内容
                        context.commit("set_content",data.content)


                        resolve(data);
                    }).catch(error => {
                        reject(error);
                    })
            })
        },
}

export default {
    // NameSpace有効
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}