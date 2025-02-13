/**
 * @file Permission store
 */

import { routes as constantRoutes } from '@/router/routes'
import { generateRoutes } from '@/router/utils'
import pinia from '@/stores'
import type { RouteRecordRaw } from 'vue-router'
import type { NavMenuItem } from '@/types'

export const usePermissionStore = defineStore('permission', () => {
  const wholeMenus = shallowRef<NavMenuItem[]>([])
  const flattedRoutes = shallowRef<NavMenuItem[]>([])

  const [isAsyncRoutesLoaded, setIsAsyncRoutesLoaded] = useToggle()

  function handleGenerateRoutes(routes: RouteRecordRaw[] = []) {
    const addedRoutes = generateRoutes([...constantRoutes, ...routes])
    wholeMenus.value = addedRoutes as NavMenuItem[]
    return addedRoutes
  }

  function confirmAsyncRoutesLoaded() {
    setIsAsyncRoutesLoaded(true)
  }

  return {
    wholeMenus,
    flattedRoutes,
    isAsyncRoutesLoaded,
    handleGenerateRoutes,
    confirmAsyncRoutesLoaded,
  }
})

export const usePermissionStoreWithOut = () => usePermissionStore(pinia)
