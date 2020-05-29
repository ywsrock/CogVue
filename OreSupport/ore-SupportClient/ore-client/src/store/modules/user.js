/* eslint-disable */
import { getToken, setToken, removeToken } from "@/utils/auth"
import { login, getInfo } from "@/utils/api/user"

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
    userName: state => state.userName,
    token: state => state.token,
    avatar: state => state.avatar,
    introduction: state => state.introduction,
    roles: state => state.roles
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
    login(context, loginInfo) {
        const { username, password } = loginInfo;
        return new Promise((resolve, reject) => {
            login({ username: username, password: password })
                .then(res => {
                    const data = res.data;
                    //グローバル情報設定へ代入
                    context.commit("set_token", data.token);
                    //　ユーザローカルCookieへ格納
                    setToken(data.token);
                    resolve(data);
                }).catch(error => {
                    reject(error);
                })
        })
    },


    // ユーザ情報取得
    getInfo(context) {
        return new Promise((resolve, reject) => {
            getInfo(context.state.token).then(res => {
                const data = res;
                if (!data) {
                    reject("認証失敗しました。再ログインしてください。");
                }
                const { roles, name, avatar, introduction } = data
                // 権限チェック
                if (!roles || roles.length <= 0) {
                    reject('権限がありません。')
                }
                // ユーザ権限
                context.commit("set_roles", roles);
                // ユーザ名
                context.commit("set_userName", name);
                //　ユーザアバター
                context.commit("set_avatar", avatar);
                //　ユーザ紹介
                context.commit("set_introduction", introduction);
                resolve(data)
            }).catch(error => {
                reject(error);
            })
        })
    },

  //　ログアウト

  // トークン削除
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('set_token', '')
      commit('set_token', [])
      removeToken()
      resolve()
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