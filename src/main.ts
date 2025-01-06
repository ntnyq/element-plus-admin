import '@unocss/reset/tailwind.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'uno.css'
import '@/styles/app.scss'
import App from '@/App.vue'
import i18n from '@/i18n'
import router from '@/router'
import pinia from '@/stores'
import { logger } from '@/utils/logger'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')

logger.success('App is running')
