/**
 * @file Storage utils
 * @module utils/storage
 * @author ntnyq <https://github.com/ntnyq>
 */

import Cookies from 'js-cookie'
import {
  APP_LANGUAGE_KEY,
  APP_THEME_KEY,
  APP_TOKEN_KEY,
  APP_USERNAME_KEY,
} from '@/constants/storage'

export function getToken (): Maybe<string> {
  return Cookies.get(APP_TOKEN_KEY)
}

export function setToken (token: string): Maybe<string> {
  return Cookies.set(APP_TOKEN_KEY, token)
}

export function removeToken (): void {
  return Cookies.remove(APP_TOKEN_KEY)
}

export function getTheme (): Maybe<string> {
  return Cookies.get(APP_THEME_KEY)
}

export function setTheme (theme: string): Maybe<string> {
  return Cookies.set(APP_THEME_KEY, theme)
}

export function removeTheme (): void {
  return Cookies.remove(APP_THEME_KEY)
}

export function getUsername (): Maybe<string> {
  return Cookies.get(APP_USERNAME_KEY)
}

export function setUsername (username: string): Maybe<string> {
  return Cookies.set(APP_USERNAME_KEY, username)
}

export function removeUsername (): void {
  return Cookies.remove(APP_USERNAME_KEY)
}

export function getLanguage (): Maybe<string> {
  return Cookies.get(APP_LANGUAGE_KEY)
}

export function setLanguage (language: string): Maybe<string> {
  return Cookies.set(APP_LANGUAGE_KEY, language)
}

export function removeLanguage (): void {
  return Cookies.remove(APP_LANGUAGE_KEY)
}
