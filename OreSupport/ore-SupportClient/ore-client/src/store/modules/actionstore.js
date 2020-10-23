import { saveAction, queryAction } from "@/utils/api/action"
const state = {
    actionData: []
}

const mutations = {
    set_actionData: function (state, actionData) {
        state.actionData = actionData || []
    }
}

const getters = {
    actionData: (state) => { return state.actionData }
}

const actions = {
    // アクション新規作成
    saveAction: function ({ commit, state }, formActonDate) {
        // let UserID = ""
        // if (this._vm.$session.has("UserID")) {
        //     UserID = this._vm.$session.get("UserID")
        // }
        // ユーザIDセット
        // Object.assign(formActonDate, { 'UserID': UserID })
        return new Promise((resolve, reject) => {
            saveAction(formActonDate).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    
    // 行動検索
    queryAction: ({commit }) => {
        return new Promise((resolve,reject) => {
            queryAction().then(res => {
                commit("set_actionData", res.data)
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}