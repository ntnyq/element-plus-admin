/**
 * @file extend vue-router types
 * @module types/router
 */

import 'vue-router'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    activeMenu?: string

    roles?: string[]
  }
}
