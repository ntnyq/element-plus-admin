import type { App } from 'vue'
import i18n from '@/i18n'
import router from '@/router'
import { setupRouterGuards } from '@/router/guard'
import pinia from '@/stores'

export function setupApp(app: App) {
  app.use(pinia)
  app.use(router)
  app.use(i18n)

  setupRouterGuards(router)

  return app
}
