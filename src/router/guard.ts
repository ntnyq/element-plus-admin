import { usePermissionStoreWithOut } from '@/stores/permission'
import { waitFor } from '@/utils'
import NProgress from '@/utils/libs/nprogress'
import type { Router } from 'vue-router'

const ROUTE_PATH_WHITE_LIST = new Set<string>()

export function setupRouterGuards(router: Router) {
  const permissionStore = usePermissionStoreWithOut()

  router.beforeEach(async (to, _from) => {
    if (ROUTE_PATH_WHITE_LIST.has(to.path)) {
      return true
    }
    NProgress.start()

    // TODO: remove this
    await waitFor(100)

    if (permissionStore.isAsyncRoutesLoaded) {
      return true
    }

    const routes = permissionStore.handleGenerateRoutes([])

    routes.forEach(route => {
      if (route.name && router.hasRoute(route.name)) {
        return
      }
      router.addRoute(route)
    })
    permissionStore.confirmAsyncRoutesLoaded()

    return true
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
