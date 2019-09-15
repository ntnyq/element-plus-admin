import Cookies from 'js-cookie'

const state = {
  language: Cookies.get('language') || 'zh',
}

const actions = {
  setLanguage ({ commit }, lang) {
    commit('SET_LANGUAGE', lang)
  },
}

const mutations = {
  SET_LANGUAGE (state, lang) {
    state.language = lang
    Cookies.set('language', lang)
  },
}

export default {
  state,
  actions,
  mutations,
}
