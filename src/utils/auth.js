import Cookies from 'js-cookie'

const TokenKey = '99CMS_HUIDU'
const UsernameKey = 'USER_NAME'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function getUsername () {
  return Cookies.get(UsernameKey)
}

export function setUsername (username) {
  return Cookies.set(UsernameKey, username)
}

export function removeUsername (username) {
  return Cookies.remove(username)
}
