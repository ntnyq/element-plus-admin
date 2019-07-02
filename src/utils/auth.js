import Cookies from 'js-cookie'
import {
  APP_TOKEN_KEY,
  APP_USERNAME_KEY
} from '@constants/storage-key'

export function getToken () {
  return Cookies.get(APP_TOKEN_KEY)
}

export function setToken (token) {
  return Cookies.set(APP_TOKEN_KEY, token)
}

export function removeToken () {
  return Cookies.remove(APP_TOKEN_KEY)
}

export function getUsername () {
  return Cookies.get(APP_USERNAME_KEY)
}

export function setUsername (username) {
  return Cookies.set(APP_USERNAME_KEY, username)
}

export function removeUsername () {
  return Cookies.remove(APP_USERNAME_KEY)
}
