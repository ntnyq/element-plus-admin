import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
// import modules from './modules'
import routers from '@/router/routes'

Vue.use(Vuex)

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
  getters
})

export default store
