import { saveAction, queryAction, destroyAction } from "@/utils/api/action"
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
    /* eslint-disable */
    saveAction: function ({ commit, state }, formActonDate) {
        return new Promise((resolve, reject) => {
            saveAction(formActonDate).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    // 行動検索
    queryAction: ({ commit }) => {
        return new Promise((resolve, reject) => {
            queryAction().then(res => {
                commit("set_actionData", res.data)
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    //アクション削除
    deleteAction: ({ commit }, id) => {
        return new Promise((resolve, reject) => {
            destroyAction(id).then(res => {
                resolve(res.data.rowNum)
            }).catch(error => {
                reject(error)
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