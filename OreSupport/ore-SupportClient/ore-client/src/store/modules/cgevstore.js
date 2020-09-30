import CGEV_INFO from "@/utils/const"

const state = {
    access_token: "",
    api_user_secret: CGEV_INFO.api_user_secret,
    customer_api_key: CGEV_INFO.customer_api_key,
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
        state.accessToken = accessToken || ""
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
        state.data = dataObj.keys().length ? dataObj : {}
    }
}

const actions = {

}