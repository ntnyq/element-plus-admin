/**
 * @file logger utils
 */

import { consola } from 'consola/browser'
import { DEFAULT_CONFIG } from '@/constants/config'

/**
 * 日志工具
 */
export const logger = consola.withTag(DEFAULT_CONFIG.prefix)
