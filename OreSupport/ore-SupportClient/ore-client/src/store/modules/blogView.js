/* eslint-disable */
import { getToken, setToken, removeToken } from "@/utils/auth"
import { viewBlog} from "@/utils/api/blog"
import { resetRouter } from '@/router'


/*
 * ストア管理情報、全アプリケーション共有
 */
const state = {
    // ユーザ名
    id: "",
    userid:"",
    title:"",
    // ユーザ
    content: [],

}

/*
 * ストア情報取得
 */
const getters = {

    get_id: state => state.id,
    get_userid: state => state.userid,
    get_title: state => state.title,
    get_content: state => state.content,

}

/*
 *ストア情報編集処理を行う（同期）
 *ストア情報設定処理
 */
const mutations = {
    //ユーザ名
    set_title: (state, title) => {
        state.title = title;
    },
    // データ
    set_content: (state, data) => {
        state.content = data
    },
}

/*
 *ストア情報編集処理を行う（非同期処理）
 */
const actions = {
   // ユーザ情報取得
    viewBlog(context) {
    //　コンテキストインスタンス保存
    var that = this;
    // セッション処理開始
    that._vm.$session.start();
    return new Promise((resolve, reject) => {
        viewBlog(context.state.token).then(res => {
            const data = res.data;
            if (!data) {
                reject("認証失敗しました。再ログインしてください。");
            }
            const { roles, name, dataInfo } = data
            // 権限チェック
            if (!roles || roles.length <= 0) {
                reject('権限がありません。')
            }
            // ユーザ権限
            context.commit("set_roles", roles);
            // ユーザ名
            context.commit("set_userName", name);
            // //　ユーザアバター
            // context.commit("set_avatar", avatar);
            // //　ユーザ紹介
            // context.commit("set_introduction", introduction);
            //　ユーザアバター
            context.commit("set_avatar", dataInfo.basicInfo.avatar);
            //　ユーザ紹介
            context.commit("set_introduction", dataInfo.basicInfo.aboutMe);
            //　詳細情報
            context.commit("set_info", dataInfo);
            //トークン保存
            that._vm.$session.set('jwt', context.state.token);
            // ユーザID保存
            that._vm.$session.set("UserID", dataInfo.UserID)
                // ユーザ名
            that._vm.$session.set("UserName", name)
                // ユーザ名(表示)
            that._vm.$session.set("DisplayUserName", dataInfo.basicInfo.lastName +
                dataInfo.basicInfo.firstName)
            resolve(data)
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