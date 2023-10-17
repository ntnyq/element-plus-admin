/**
 * @file setup App
 */

import { APP_INJECT_KEY, inject } from '@/constants/inject'
import type { TInject } from '@/types'
import type { App } from 'vue'

export function setupApp(app: App) {
  app.config.globalProperties.$inject = inject
  app.provide<TInject>(APP_INJECT_KEY, inject)

  return app
}
