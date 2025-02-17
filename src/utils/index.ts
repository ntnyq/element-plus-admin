/**
 * @file Common utils
 */

import { DEFAULT_CONFIG } from '@/constants/config'

/**
 * 增加系统前缀
 */
export function withPrefix(value: string) {
  return `${DEFAULT_CONFIG.prefix}:${value}`
}

/**
 * 打开外部 URL
 * @param url - 目标URL
 */
export function openExternalURL(url: string | URL, target = '_blank') {
  window.open(url, target)
}

/**
 * Re-export common utils
 */
export {
  isDeepEqual,
  isEmptyArray,
  isEmptyString,
  isFunction,
  isInteger,
  isNonEmptyArray,
  isNonEmptyString,
  isNull,
  isNullOrUndefined,
  isString,
  isUndefined,
  join,
  randomHexColor,
  randomNumber,
  randomString,
  toArray,
  unique,
  waitFor,
} from '@ntnyq/utils'
