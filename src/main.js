import Vue from 'vue'
import App from './App'
import router from '@router'
import store from '@store'
import i18n from '@i18n'

import '@plugins/element'
import '@styles/style'
import '@icons'
import '@components'
import * as filters from '@filters'

/**
 * Regist global filters
 */
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  ...App
}).$mount('#app')
