/**
 * @file Date time utils
 * @module utils/date-time
 * @author ntnyq <https://github.com/ntnyq>
 */

import dayjs from 'dayjs'
import type { ConfigType } from 'dayjs'

export function formatTime(time: ConfigType, format: string): string {
  return dayjs(time).format(format)
}
