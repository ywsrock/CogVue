import { saveAction, queryAction } from "@/utils/api/action"
const state = {
    actionData: {}
}

const mutations = {
    set_actionData: function (state, actionData) {
        state.actionData = actionData
    }
}

const getters = {
    actionData: (state) => { return state.actionData }

}

const actions = {

    saveAction: async function ({ commit, state }, formActonDate) {
        try {
            let UserID = ""
            if (this._vm.$session.has("UserID")) {
                UserID = this._vm.$session.get("UserID")
            }
            // ユーザIDセット
            await Object.assign(formActonDate, { 'UserID': UserID })
            let res = await saveAction(formActonDate)
            return formActonDate

        } catch (error) {
        }
    },

    queryAction: async ({ commit, state }, formActonDate) => {
        try {
            let res = await queryAction(formActonDate)

        } catch (error) {
        }

    }


}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}