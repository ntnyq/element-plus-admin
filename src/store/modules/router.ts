/**
 * @file Store module router
 * @module store/modules/router
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { ActionTree, MutationTree } from 'vuex'
import type { RouteRecordRaw } from 'vue-router'
import constantsRoutes from '@/router/routes'
import asyncRoutes from '@/router/async-routes'
import { SET_ROUTES } from '@/constants/store'
import type { RouterState } from '../types'

type IPermission = Array<string | number>

function hasPermission (ownedPermissions: IPermission, route: RouteRecordRaw): boolean {
  if (route.meta && Array.isArray(route.meta.permissions)) {
    return ownedPermissions
      .some(permission => (route.meta?.permissions as IPermission).includes(permission))
  } else {
    return true
  }
}

function filterAsyncRoutes (routes: RouteRecordRaw[], permissions: IPermission = []): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = []

  routes.forEach(route => {
    const tmp = { ...route }

    if (hasPermission(permissions, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permissions)
      }

      res.push(tmp)
    }
  })

  return res
}

export const state: RouterState = {
  routes: [],
  addRoutes: [],
}

export const actions: ActionTree<RouterState, unknown> = {
  [SET_ROUTES.action] ({ commit }, permissions: string[] = []) {
    let accessedRoutes = []

    if (permissions.includes('admin')) {
      accessedRoutes = asyncRoutes || []
    } else {
      accessedRoutes = filterAsyncRoutes(asyncRoutes, permissions)
    }

    commit(SET_ROUTES.mutation, accessedRoutes)
  },
}

export const mutations: MutationTree<RouterState> = {
  [SET_ROUTES.mutation] (state, routes) {
    state.addRoutes = routes
    state.routes = constantsRoutes.concat(routes)
  },
}

export default {
  state,
  actions,
  mutations,
}
