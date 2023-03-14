/**
 * @file Date time utils
 * @module utils/date-time
 * @author ntnyq <https://github.com/ntnyq>
 */

import dayjs from 'dayjs'

export function formatTime(time: string, format: string): string {
  return dayjs(time).format(format)
}
