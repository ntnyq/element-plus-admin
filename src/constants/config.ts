/**
 * @file 环境变量
 */

const BASE_URL = import.meta.env.BASE_URL ?? '/'
const API_HOST = import.meta.env.VITE_API_HOST
const APP_PREFIX = import.meta.env.VITE_APP_PREFIX ?? 'EP_ADMIN_'
const APP_LOCALE = import.meta.env.VITE_APP_LOCALE ?? 'zh'

export const ENV = Object.freeze({
  API_HOST,
  BASE_URL,
  APP_PREFIX,
  APP_LOCALE,
})
