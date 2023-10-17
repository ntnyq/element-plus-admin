/**
 * @file App entry
 * @module src/main
 * @author ntnyq <https://github.com/ntnyq>
 */

import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n'
import '@/styles/style.scss'
import { setupRouterGuard } from '@/router/guard'
import { setupApp } from './setup'

const app = createApp(App)
const store = createPinia()

app.use(store)
app.use(router)
app.use(i18n)
setupApp(app)

router.isReady().then(() => {
  setupRouterGuard(router)
  app.mount('#app')
})
