import type { RouteMeta, RouteRecordRaw } from 'vue-router'

export interface DefineRoutesOptions {
  meta?: RouteMeta
}

/**
 * define routes
 *
 * @param routes - routes
 * @param options - define routes options
 * @returns routes
 */
export function defineRoutes(
  routes: RouteRecordRaw[] = [],
  options: DefineRoutesOptions = {},
) {
  if (options.meta) {
    return routes.map(route => ({
      ...route,
      meta: {
        ...(route.meta || {}),
        ...options.meta,
      },
    }))
  }
  return routes
}
