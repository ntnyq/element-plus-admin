/**
 * @file Base utils
 * @module utils/index
 * @author ntnyq <https://github.com/ntnyq>
 */

/**
 * Wait for a while
 * @param ms - Milliseconds
 * @returns Promise
 */
export function waitFor(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export * from './date-time'
export * from './element'
export * from './storage'
