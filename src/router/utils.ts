/**
 * @file utils for router
 */

import { cloneDeep } from 'es-toolkit'
import { ROUTE_NAME } from '@/constants/route'
import type { Router, RouteRecordRaw } from 'vue-router'

/**
 * 增加路由捕获重定向
 *
 * @param router - vue-router
 */
export function addPathMatch(router: Router) {
  if (router.hasRoute(ROUTE_NAME.pathMatch)) {
    return
  }
  router.addRoute({
    path: '/:pathMatch(.*)',
    name: ROUTE_NAME.pathMatch,
    redirect: '/error/404',
  })
}

/**
 * 过滤路由中 hidden 为 true 的路由
 */
export function filterRoutesByHidden(routes: RouteRecordRaw[] = []) {
  return cloneDeep(routes).filter(route => !route.meta?.hidden)
}

/**
 * 过滤路由中 children 为空数组的路由
 */
export function filterRoutesByChildren(routes: RouteRecordRaw[] = []) {
  return routes
}

/**
 * 生成路由数据
 */
export function generateRoutes(routes: RouteRecordRaw[] = []) {
  routes = filterRoutesByHidden(routes)
  routes = filterRoutesByChildren(routes)

  return routes
}
