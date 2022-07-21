/**
 * @file Router guard permission
 * @module router/guard/permission
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { Router } from 'vue-router'
import * as storage from '@/utils/storage'
import { RouteName } from '@/constants/route'
import { useUserStore } from '@/store/user'
import { usePermissionStore } from '@/store/permission'

export const PERMISSION_WHITELIST: string[] = [
  `/sign-in`,
]

export function usePermissionGuard (router: Router) {
  router.beforeEach(async (to, from, next) => {
    if (storage.getToken()) {
      if (to.name === RouteName.SIGN_IN) {
        next({ name: RouteName.DASHBOARD })
      } else {
        const userStore = useUserStore()
        const hasRoles = userStore.roles && userStore.roles.length
        if (hasRoles) {
          next()
        } else {
          const permissionStore = usePermissionStore()
          const { roles } = await userStore.getUserInfo()
          const routes = await permissionStore.generateRoutes(roles)

          routes.forEach(route => router.addRoute(route))
          next({ ...to, replace: true })
        }
      }
    } else {
      if (PERMISSION_WHITELIST.includes(to.path)) {
        next()
      } else {
        next({ name: RouteName.SIGN_IN, query: { redirect: to.fullPath } })
      }
    }
  })
}
