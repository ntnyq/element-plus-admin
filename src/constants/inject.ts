/**
 * @file inject global constants
 * @module constants/inject
 */

import type { TInject } from '@/types'

export const inject = {
  foo: 'bar',
}

export const APP_INJECT_KEY = Symbol('appInject') as InjectionKey<TInject>
