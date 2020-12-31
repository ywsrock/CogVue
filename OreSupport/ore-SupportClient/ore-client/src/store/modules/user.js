/* eslint-disable */
import { getToken, setToken, removeToken } from "@/utils/auth";
import {
    login,
    getInfo,
    singUp,
    logout,
    getProfileInfo,
    updateUser,
    imageUp,
    restPassword,
    varousSetting,
    passwordSetting,
    showUserPower
} from "@/utils/api/user";
import { resetRouter } from "@/router";

/*
 * ストア管理情報、全アプリケーション共有
 */
const state = {
    // ユーザ名
    userName: "",
    // ユーザ
    dataInfo: [],
    // 認証情報
    token: getToken(),
    // ユーザアバター
    avatar: "",
    // ユーザ情報
    introduction: "",
    // ユーザ権限
    roles: [],
};

/*
 * ストア情報取得
 */
const getters = {
    userName: (state) => state.userName,
    info: (state) => state.dataInfo,
    token: (state) => state.token,
    avatar: (state) => state.avatar,
    introduction: (state) => state.introduction,
    roles: (state) => state.roles,
};

/*
 *ストア情報編集処理を行う（同期）
 *ストア情報設定処理
 */
const mutations = {
    //ユーザ名
    set_userName: (state, userName) => {
        state.userName = userName;
    },
    // データ
    set_info: (state, data) => {
        state.dataInfo = data;
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
    },
};

/*
 *ストア情報編集処理を行う（非同期処理）
 */
const actions = {
    // ユーザログイン処理
    login(context, loginInfo) {
        const { username, password, userId, type } = loginInfo;
        var that = this;
        return new Promise((resolve, reject) => {
            login({
                username: username,
                password: password,
                userId: userId,
                type: type,
            })
                .then((res) => {
                    const data = res.data;
                    //ログインタイプ
                    that._vm.$session.set("loginType", type)
                    //グローバル情報設定へ代入
                    context.commit("set_token", data.token);
                    // //ユーザ名
                    // context.commit("set_userName",data.userName)
                    //　ユーザローカルCookieへ格納
                    setToken(data.token);
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // パスワードリセット
    restPassword(context, userInfo) {
        return new Promise((resolve, reject) => {
            restPassword(userInfo).then(res => {
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },

    // ユーザ新規登録
    singUp(context, registInfo) {
        const { email, password } = registInfo;
        return new Promise((resolve, reject) => {
            singUp({ email, password })
                .then((res) => {
                    const data = res.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // ユーザ情報取得
    getInfo(context) {
        //　コンテキストインスタンス保存
        var that = this;
        //ログインタイプ
        var loginType = this._vm.$session.get("loginType")
        // セッション処理開始
        that._vm.$session.start();
        return new Promise((resolve, reject) => {
            getInfo(context.state.token, loginType)
                .then((res) => {
                    const data = res.data;
                    if (!data) {
                        reject("認証失敗しました。再ログインしてください。");
                    }
                    const { roles, name, dataInfo, type } = data;
                    // 権限チェック
                    if (!roles || roles.length <= 0) {
                        reject("権限がありません。");
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
                    that._vm.$session.set("jwt", context.state.token);
                    // ユーザID保存
                    that._vm.$session.set("UserID", dataInfo.UserID);
                    // ユーザ名
                    that._vm.$session.set("UserName", name);
                    // ユーザ名(表示)
                    that._vm.$session.set(
                        "DisplayUserName",
                        dataInfo.basicInfo.lastName + dataInfo.basicInfo.firstName
                    );
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // ユーザ情報取得
    getProfileInfo(context) {
        //　コンテキストインスタンス保存
        var that = this;
        // セッション処理開始
        that._vm.$session.start();
        return new Promise((resolve, reject) => {
            getProfileInfo(context.state.token)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // ユーザプロフィール変更 
    UpdateUser(context, userInfo) {
        return new Promise((resolve, reject) => {
            updateUser(userInfo)
                .then((res) => {
                    const data = res.data;
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    imageUp(context, userInfo) {
        return new Promise((resolve, reject) => {
            imageUp(userInfo)
                .then((res) => {
                    var data = res.data;
                    //　ユーザアバター
                    context.commit("set_avatar", data.imgUrl);
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    },

    // user logout
    logout({ commit, state, dispatch }) {
        var that = this;
        return new Promise((resolve, reject) => {
            logout(state.token)
                .then(() => {
                    commit("set_token", "");
                    commit("set_roles", []);
                    // ユーザ権限
                    // ユーザ名
                    commit("set_userName", "");
                    //　ユーザアバター
                    commit("set_avatar", "");
                    //　ユーザ紹介
                    commit("set_introduction", "");
                    //　詳細情報
                    commit("set_info", "");
                    // ユーザID保存
                    that._vm.$session.set("UserID", "");
                    // ユーザ名
                    that._vm.$session.set("UserName", "");

                    // セッション廃棄
                    that._vm.$session.clear();
                    that._vm.$session.destroy();
                    removeToken();
                    resetRouter();
                    resolve();
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },

    // トークン削除
    resetToken({ commit }) {
        var that = this;
        return new Promise((resolve) => {
            commit("set_token", "");
            commit("set_roles", []);
            // ユーザ権限
            // ユーザ名
            commit("set_userName", "");
            //　ユーザアバター
            commit("set_avatar", "");
            //　ユーザ紹介
            commit("set_introduction", "");
            //　詳細情報
            commit("set_info", "");
            // ユーザID保存
            that._vm.$session.set("UserID", "");
            // ユーザ名
            that._vm.$session.set("UserName", "");

            // セッション廃棄
            that._vm.$session.clear();
            that._vm.$session.destroy();
            removeToken();
            resolve();
        });
    },

    // 各種設定(権限設定)
    varousSetting({ }, settingData) {
        return new Promise((resolve, reject) => {
            varousSetting(settingData)
                .then((res) => {
                    resolve(res)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    // 各種設定(パスワード設定)
    passwordSetting({ }, data) {
        return new Promise((resolve, reject) => {
            passwordSetting(data)
                .then((res) => {
                    resolve(res)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    // 各種設定(画面初期表示)
    showUserPower({ }) {
        return new Promise((resolve, reject) => {
            showUserPower()
                .then((res) => {
                    resolve(res)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }

};

export default {
    // NameSpace有効
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
