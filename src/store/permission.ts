/**
 * @file Store module permission
 * @module store/permission
 * @author ntnyq <https://github.com/ntnyq>
 */

import { defineStore } from 'pinia'
import { UserRole } from '@/constants/app'
import { StoreModule } from '@/constants/store'
import asyncRoutes from '@/router/async-routes'
import type { RouteRecordRaw } from 'vue-router'

function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]) {
  const res: RouteRecordRaw[] = []

  routes.forEach(route => {
    const tmp = { ...route }

    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }

      res.push(tmp)
    }
  })

  return res
}

function hasPermission(roles: string[], route: RouteRecordRaw) {
  if (route.meta && route.meta.roles && Array.isArray(route.meta.roles)) {
    return roles.some(role => (route.meta!.roles as string[]).includes(role))
  } else {
    return true
  }
}

export const usePermissionStore = defineStore(StoreModule.PERMISSION, () => {
  const routes = ref<RouteRecordRaw[]>([])

  const generateRoutes = async (roles: string[]) => {
    let availableRoutes: RouteRecordRaw[] = []
    if (roles.includes(UserRole.ADMIN)) {
      availableRoutes = asyncRoutes
    } else {
      availableRoutes = filterAsyncRoutes(asyncRoutes, roles)
    }

    routes.value = availableRoutes

    return availableRoutes
  }

  return {
    routes,
    generateRoutes,
  }
})
