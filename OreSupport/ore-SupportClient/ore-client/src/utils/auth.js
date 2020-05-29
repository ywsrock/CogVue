import Cookies from 'js-cookie'

const TokenKey = 'oresupport-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token,key=TokenKey) {
  return Cookies.set(key, token)
}

export function removeToken(key=TokenKey) {
  return Cookies.remove(key)
}
