import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './plugins/element.js'
import './styles/style'
import './icons'
import VueClipboard from 'vue-clipboard2'

// Global filters
import * as filters from '@/filters'

// Global custome ui components
import Components from './components'

Vue.use(VueClipboard)

// Regist filters
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(Components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  ...App
}).$mount('#app')
