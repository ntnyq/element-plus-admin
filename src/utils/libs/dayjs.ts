/**
 * @file dayjs utils
 * @module utils/libs/dayjs
 */

import dayjs from 'dayjs'
import type { ConfigType } from 'dayjs'

export function now() {
  return dayjs().unix()
}

export type FormatTimeOptions = {
  format?: string
}

export const DEFAULT_FORMAT_OPTIONS: Required<FormatTimeOptions> = {
  format: 'YYYY-MM-DD HH:mm',
}

/**
 * 格式化时间
 * @returns 格式化后时间
 */
export function formatTime(time: ConfigType, options: FormatTimeOptions = {}) {
  const opts = { ...DEFAULT_FORMAT_OPTIONS, ...options }
  return dayjs(time).format(opts.format)
}

/**
 * 禁止选择之前时间
 */
export function disableDayBefore(date: Date) {
  return dayjs(date).isBefore(dayjs(), 'day')
}

/**
 * 禁止选择之后时间
 */
export function disableDayAfter(date: Date) {
  return dayjs(date).isAfter(dayjs(), 'day')
}
