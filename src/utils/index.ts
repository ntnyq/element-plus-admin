/**
 * @file Common utils
 */

import { DEFAULT_CONFIG } from '@/constants/config'
import type { Arrayable, Nullable } from '@/types'

/**
 * Waits for the given amount of time.
 * @param ms - The amount of time to wait in milliseconds.
 * @returns A promise that resolves after the given amount of time.
 */
export function waitFor(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Unique values in an array
 * @param val - The array to remove duplicates from.
 * @returns An array with only unique values.
 */
export function unique<T>(val: T[]) {
  return Array.from(new Set(val))
}

/**
 * Random number between min and max
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random number between min and max.
 */
export function random(min: number, max = 0) {
  if (max === 0) {
    max = min
    min = 0
  }
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Converts a value to an array.
 * @param val - The value to convert to an array.
 * @returns An array.
 */
export function toArray<T>(val?: Nullable<Arrayable<T>>) {
  val = val ?? []
  return Array.isArray(val) ? val : [val]
}

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
