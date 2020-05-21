import request from '@/utils/request'


/**
 * ユーザログイン
 * @param data Object
 * @returns String
 */
export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}


/**
 * ユーザ情報表示
 * @param token String
 * @returns String
 */
export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

// ログアウト
export function logout() {
  return request({
    url: 'user/logout',
    method: 'post'
  })
}
