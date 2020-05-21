
import { getToken, setToken, removeToken } from "@/utils/auth"
import { login } from "@/utils/api/user"

/*
 * ストア管理情報、全アプリケーション共有
 */
const state = {
    // ユーザ名
    userName: "",
    // 認証情報 
    token: getToken(),
    // ユーザアバター
    avatar: '',
    // ユーザ情報
    introduction: '',
    // ユーザ権限
    roles: []
}

/*
 * ストア情報取得
 */
const getters = {
    userName: state => state.user.userName,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    introduction: state => state.user.introduction,
    roles: state => state.user.roles
}

/*
 *ストア情報編集処理を行う（同期）
 *ストア情報設定処理
 */
const mutations = {
    //ユーザ名
    set_userName: (state, userName) => {
        state.userName = userName;
    },
    // Token情報
    set_token: (state, token) => {
        state.token = token;
    },
    // ユーザアバター
    set_avatar: (state, avatar) => {
        state.avatar = avatar;
    },
    // ユーザ説明情報
    set_introduction: (state, introduction) => {
        state.introduction = introduction;
    },
    //　ユーザ権限情報
    set_roles: (state, roles) => {
        state.roles = roles;
    }
}

/*
 *ストア情報編集処理を行う（非同期処理）
 */
const actions = {
    //ユーザログイン処理
    login(contxt, loginInfo) {
        const { username, password } = loginInfo;
        // return Promise.resolve("getToken" + getToken())
        login({ username: username, password: password })
            .then(res => {
                const { data } = res.data;
                //グローバル情報設定へ代入
                contxt.commit("set_token", data.token)
                //　ユーザローカルCookieへ格納
                setToken(data.token)
                resolve()
            }).catch(error => {
                reject(error)
            })
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}