/**
 * @file Storage utils
 * @module utils/storage
 * @author ntnyq <https://github.com/ntnyq>
 */

import { Theme } from '@/constants/app'
import { ENV } from '@/constants/config'

interface CreateStorageOptions {
  defaultValue?: string
}

const APP_TOKEN_KEY = `${ENV.APP_PREFIX}TOKEN`
const APP_USERNAME_KEY = `${ENV.APP_PREFIX}USERNAME`
const APP_LANGUAGE_KEY = `${ENV.APP_PREFIX}LANGUAGE`
const APP_THEME_KEY = `${ENV.APP_PREFIX}THEME`

/**
 * Create a storage object
 * @param key storage key
 * @param defaultValue default value
 * @returns storage object
 */
export function createStorage(key: string, options?: CreateStorageOptions) {
  return {
    get() {
      return localStorage.getItem(key) ?? options?.defaultValue
    },

    set(val: string) {
      return localStorage.setItem(key, val)
    },

    remove() {
      return localStorage.removeItem(key)
    },
  }
}

export const tokenStorage = createStorage(APP_TOKEN_KEY, { defaultValue: '' })

export const themeStorage = createStorage(APP_THEME_KEY, {
  defaultValue: Theme.DEFAULT,
})

export const usernameStorage = createStorage(APP_USERNAME_KEY)

export const languageStorage = createStorage(APP_LANGUAGE_KEY, {
  defaultValue: ENV.APP_LOCALE,
})
