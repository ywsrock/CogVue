import axios from "axios";

// インスタン作成
const getCgevApi = axios.create({
    baseURL: '/CgevApi',
    // クロスドメイン許可
    withCredentials: true,
    // timeout: 1000,
    headers: {}
});

getCgevApi.interceptors.request.use(config => {
    return config
}, error => {
    console.log(error)
});


export default getCgevApi