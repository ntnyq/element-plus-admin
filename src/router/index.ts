/**
 * @file App router
 * @module router/index
 * @author ntnyq <https://github.com/ntnyq>
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

export const ROUTE_WHITE_LIST: string[] = [
  'SignIn',
  'Dashboard',
]

/**
 * Create router
 */
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

/**
 * Reset router
 */
export function resetRouter ():void {
  router.getRoutes().forEach(route => {
    const name = route.name as string

    if (name && !ROUTE_WHITE_LIST.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default router
