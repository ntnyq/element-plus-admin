import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import routers from '@router/routes'

Vue.use(Vuex)

/**
 * 引入所有的vuex modules模块
 */
function loadVuexModules () {
  const moduleCtx = require.context('./modules', false, /[A-Za-z0-9-_,\s]+\.js$/i)
  const modules = {}

  moduleCtx.keys().map(module => {
    const matched = module.match(/([A-Za-z0-9-_]+)\./i)

    if (matched && matched.length > 1) {
      const moduleName = matched[1]
      modules[moduleName] = moduleCtx(module).default
    }
  })

  return modules
}

const state = {
  isCollapse: false,
  routers
}

const actions = {
  toggleCollapse ({ commit }) {
    commit('TOGGLE_COLLAPSE')
  }
}

const mutations = {
  TOGGLE_COLLAPSE (state) {
    state.isCollapse = !state.isCollapse
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: loadVuexModules()
})

export default store
