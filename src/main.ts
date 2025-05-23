import '@/styles/app.scss'
import '@unocss/reset/tailwind.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/index.css'
import 'uno.css'
import App from '@/App.vue'
import { setupApp } from '@/setup'
import { logger } from '@/utils/logger'

const app = createApp(App)

setupApp(app)

app.mount('#app')

logger.success('App is running')
