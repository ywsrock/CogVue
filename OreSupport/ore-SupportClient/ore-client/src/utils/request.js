import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store/index'
import { getToken } from '@/utils/auth'
import { ORE_SUPPORT_API_BASE_PATH } from "./const"

// Cookie情報ヘッダー設定許可
// axios.defaults.withCredentials=true
// axios インスタンス作成
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  // ベースURL
  baseURL: ORE_SUPPORT_API_BASE_PATH,
  // クロスドメイン許可
  withCredentials: true,
   // timeout
  // timeout: 5000
})

// 請求インターセプタ請求開始前、処理を行う
service.interceptors.request.use(
  config => {
    // if (this.$store.getters.token) {
      //認証Token設定
      config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // エラーの場合の処理
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

/* レスポンスのインターセプタ処理
 * ヘッダー情報取得
 * エラーコード設定 
 */
service.interceptors.response.use(
  response => {
    const res = response.data

    // カスタマコードを設定
    if (res.code !== 20000) {
      Message({
        message: res.message || 'エラー',
        type: 'エラー',
        duration: 5 * 1000
      })

      // 50008: 不正 token; 50012: すでにログイ; 50014: 期限切れ
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 再ログイン
        let msg = "「ログアウトしましたか、キャンセルしてこのページに留まるか」<br> 再度ログインしてください。"
        MessageBox.confirm(msg, {
          confirmButtonText: 'ログイン',
          cancelButtonText: 'キャンセル',
          type: 'warning'
        }).then(() => {
          //Token情報設定
          store.dispatch('user/resetToken').then(() => {
            //画面リロード
            location.reload();
          })
        }).catch(() =>{
         // 処理しません。 
        })
      }
      return Promise.reject(new Error(res.message || 'エラー'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
