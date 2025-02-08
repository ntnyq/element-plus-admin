/**
 * @file logger utils
 */

import { consola } from 'consola/browser'
import { DEFAULT_CONFIG } from '@/constants/config'

/**
 * 日志工具
 */
export const logger = consola.withTag(DEFAULT_CONFIG.prefix)

export interface CreateLoggerOptions {
  withPrefix?: boolean
}

export function createLogger(scope: string, options: CreateLoggerOptions = {}) {
  const { withPrefix = true } = options
  return consola.withTag(withPrefix ? `${DEFAULT_CONFIG.prefix}:${scope}` : scope)
}
