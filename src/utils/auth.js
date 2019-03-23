import Cookies from 'js-cookie'

const TokenKey = process.env.VUE_APP_TOKEN_KEY || 'AMDIN_TOKEN'
const UsernameKey = process.env.VUE_APP_USERNAME_KEY || 'ADMIN_USERNAME'

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
