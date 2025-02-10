/**
 * @file utils for router
 */

import { ROUTE_NAME } from '@/constants/route'
import type { Router } from 'vue-router'

export function addPathMatch(router: Router) {
  if (router.hasRoute(ROUTE_NAME.pathMatch)) return
  router.addRoute({
    path: '/:pathMatch(.*)',
    name: ROUTE_NAME.pathMatch,
    redirect: '/error/404',
  })
}
