import { CGEV_INFO } from "@/utils/const";
import { raddarChart } from "../cgevModel/categories";
import { authenticate, recordsCategories } from "../../utils/api/cgevapi";

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
        state.data = dataObj
    }
}

const actions = {
    // CustomerAPIKeyとApiUserSecretを利用して認証を行う
    authenticate: ({ commit, state }) => {
        return new Promise((resolve, reject) => {
            authenticate({
                customer_api_key: state.customer_api_key,
                api_user_secret: state.api_user_secret
            }).then((res) => {
                commit("setAccessToken", res.data.access_token)
                commit("setStatus", res.data.status)
                commit("setError", res.data.error)
                resolve(res)
            }).catch((error) => {
                commit("setAccessToken", "")
                commit("setStatus", "")
                commit("setError", "")
                reject(error)
            })
        })
    },

    // ・CogEvoサイトの「記録」ページの「傾向」チャートの「現在」の内容
    recordsCategories: ({ commit, state }) => {
        // チャートコンポーネント
        return new Promise((resolve, reject) => {
            recordsCategories({
                access_token: state.access_token,
                customer_api_key: state.customer_api_key,
                api_user_secret: state.api_user_secret
            }).then(res => res.data).then(cgevData => {
                commit("setAccessToken", cgevData.access_token)
                commit("setStatus", cgevData.status)
                commit("setError", cgevData.error)
                commit("setData", cgevData.data)
                // 現在の値
                raddarChart.raddarChartData[0].value = cgevData.data.chart_data
                // 3ヶ月前の値 
                raddarChart.raddarChartData[1].value = [0, 0, 0, 0, 0]
                resolve(raddarChart)
            }).catch((error) => {
                commit("setAccessToken", "")
                commit("setStatus", "")
                commit("setError", "")
                commit("setData", {})
                raddarChart.raddarChartData[0].value = [0, 0, 0, 0, 0]
                raddarChart.raddarChartData[1].value = [0, 0, 0, 0, 0]
                reject(error)
            })
        })
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
