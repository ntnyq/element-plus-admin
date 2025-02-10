import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  strict: true,
  scrollBehavior(to, from, savedPosition) {
    return new Promise(resolve => {
      if (savedPosition) {
        return savedPosition
      } else {
        if (from.meta.saveScrollTop) {
          const top =
            document.documentElement.scrollTop || document.body.scrollTop

          resolve({ left: 0, top })
        }
      }
    })
  },
})

export function resetRouter() {
  router.getRoutes().forEach(route => {
    const { name, meta } = route

    if (name && router.hasRoute(name) && meta?.backstage) {
      router.removeRoute(name)
      // TODO: create routes
      // router.options.routes =
    }
  })
}

export default router
