/**
 * @file App entry
 * @module src/main
 * @author ntnyq <https://github.com/ntnyq>
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from '@/router'
import i18n from '@/i18n'

import 'element-plus/theme-chalk/index.css'
import '@/styles/style.scss'

import ElementPlus from 'element-plus'
import { setupRouterGuard } from '@/router/guard'

const app = createApp(App)
const store = createPinia()

app.use(store)
app.use(router)
app.use(i18n)
app.use(ElementPlus, { size: `large` })

await router.isReady()
setupRouterGuard(router)
app.mount('#app')
