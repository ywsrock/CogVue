import { CGEV_INFO } from "@/utils/const";
import { raddarChart } from "../cgevModel/categories";
import { authenticate, recordsCategories, recordsSummary, recordsHistories, recordsTasksIdSummary } from "../../utils/api/cgevapi";

const state = {
    access_token: "",
    api_user_secret: CGEV_INFO.ApiUserSecret,
    customer_api_key: CGEV_INFO.CustomerApiKey,
    status: "",
    error: "",
    data: {}
}

const getters = {
    accessToken: (state) => state.access_token,
    apiUserSecret: (state) => state.api_user_secret,
    status: (state) => state.status,
    error: (state) => state.error,
    data: (state) => state.data
}


const mutations = {
    setAccessToken: (state, accessToken) => {
        state.access_token = accessToken || ""
    },
    setApiUserSecret: (state, userSecret) => {
        state.api_user_secret = userSecret || ""
    },
    setStatus: (state, status) => {
        state.status = status
    },
    setError: (state, error) => {
        state.error = error
    },
    setData: (state, dataObj) => {
        // state.data = dataObj.keys().length ? dataObj : {}
        state.data = Object.assign(state.data, dataObj)
    }
}

const actions = {
    // CustomerAPIKeyとApiUserSecretを利用して認証を行う
    authenticate: async ({ commit, state }) => {
        try {
            let res = await authenticate({
                customer_api_key: state.customer_api_key,
                api_user_secret: state.api_user_secret
            });
            commit("setAccessToken", res.data.access_token)
            commit("setStatus", res.data.status)
            commit("setError", res.data.error)
            return res.data.access_token
        } catch (error) {
            commit("setAccessToken", "")
            commit("setStatus", "")
            commit("setError", "")
            return error
        }
    },

    // ・CogEvoサイトの「記録」ページの「傾向」チャートの「現在」の内容
    recordsCategories: async ({ commit, state }) => {
        try {
            // let access_token = await dispatch("authenticate")
            let res = await recordsCategories({
                access_token: state.access_token,
                customer_api_key: state.customer_api_key,
                api_user_secret: state.api_user_secret
            });
            let cgevData = res.data
            commit("setAccessToken", cgevData.access_token)
            commit("setStatus", cgevData.status)
            commit("setError", cgevData.error)
            commit("setData", { 'categories': cgevData.data })
            // 現在の値
            // raddarChart.raddarChartData[0].value = cgevData.data.chart_data
            raddarChart.raddarChartData[0].value = cgevData.data.chart_data
            // 3ヶ月前の値 
            raddarChart.raddarChartData[1].value = [0, 0, 0, 0, 0]
            return raddarChart
        } catch (error) {
            commit("setAccessToken", "")
            commit("setStatus", "")
            commit("setError", "")
            commit("setData", { 'categories': {} })
            raddarChart.raddarChartData[0].value = [0, 0, 0, 0, 0]
            raddarChart.raddarChartData[1].value = [0, 0, 0, 0, 0]
            return error
        }
    },

    // ・CogEvoサイトの「記録」ページの「総合評価」の内容
    recordsSummary: async ({ commit, state }) => {
        // チャートコンポーネント
        try {
            // let access_token = await dispatch("authenticate")
            let res = await recordsSummary({
                access_token: state.access_token,
                customer_api_key: state.customer_api_key,
                api_user_secret: state.api_user_secret
            });
            let cgevData = res.data
            commit("setAccessToken", cgevData.access_token)
            commit("setStatus", cgevData.status)
            commit("setError", cgevData.error)
            commit("setData", { 'summary': cgevData.data })
            return cgevData.data
        } catch (error) {
            commit("setAccessToken", "")
            commit("setStatus", "")
            commit("setError", "")
            commit("setData", { 'summary': {} })
            return error
        }
    },

    //CogEvoサイトの「記録」ページの「トレーニング履歴」
    recordsHistories: async ({ commit, state }) => {
        // チャートコンポーネント
        try {
            // let access_token = await dispatch("authenticate")
            let res = await recordsHistories({
                access_token: state.access_token,
                customer_api_key: state.customer_api_key,
                api_user_secret: state.api_user_secret
            });
            let cgevData = res.data
            commit("setAccessToken", cgevData.access_token)
            commit("setStatus", cgevData.status)
            commit("setError", cgevData.error)
            commit("setData", { 'histories': cgevData.data })
            return cgevData.data
        } catch (error) {
            commit("setAccessToken", "")
            commit("setStatus", "")
            commit("setError", "")
            commit("setData", { 'histories': {} })
            return error
        }
    },
    // ・指定したタスクについての記録を概要を取得する
    recordsTasksIdSummary: async ({ commit, state }) => {
        // チャートコンポーネント
        try {
            let res = await recordsTasksIdSummary({
                access_token: state.access_token,
            });
            let cgevData = res.data
            commit("setAccessToken", cgevData.access_token)
            commit("setStatus", cgevData.status)
            commit("setError", cgevData.error)
            commit("setData", { 'histories': cgevData.data })
            return cgevData.data
        } catch (error) {
            commit("setAccessToken", "")
            commit("setStatus", "")
            commit("setError", "")
            commit("setData", { 'histories': {} })
            return error
        }
    }
}


export default {
    // NameSpace有効
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
