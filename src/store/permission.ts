/**
 * @file Store module permission
 * @module store/permission
 * @author ntnyq <https://github.com/ntnyq>
 */

import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { UserRole } from '@/constants/app'
import { StoreModule } from '@/constants/store'
import asyncRoutes from '@/router/async-routes'

export interface IPermissionStateTree {
  routes: RouteRecordRaw[]
}

export const usePermissionStore = defineStore({
  id: StoreModule.PERMISSION,

  state: () => <IPermissionStateTree>({
    routes: [],
  }),

  actions: {
    async generateRoutes (roles: string[]) {
      let routes: RouteRecordRaw[] = []

      if (roles.includes(UserRole.ADMIN)) {
        routes = asyncRoutes
      } else {
        routes = filterAsyncRoutes(asyncRoutes, roles)
      }
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.$patch({ routes })

      return routes
    },
  },
})

function filterAsyncRoutes (routes: RouteRecordRaw[], roles: string[]) {
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

function hasPermission (roles: string[], route: RouteRecordRaw) {
  if (route.meta && route.meta.roles && Array.isArray(route.meta.roles)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return roles.some(role => (route.meta!.roles as string[]).includes(role))
  } else {
    return true
  }
}
