import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './styles/style'

// Global filters
import * as filters from '@/filters'

// Global custome ui components
import Components from './components'

// Regist filters
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.use(Components)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
