/**
 * @file Store module user
 * @module store/modules/user
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { ActionTree, MutationTree } from 'vuex'
import type { UserState } from '../types'
import * as storage from '@/utils/storage'
import {
  SET_TOKEN,
  SIGN_OUT,
} from '@/constants/store'
import { resetRouter } from '@/router'

export const state: UserState = {
  token: storage.getToken() || '',
}

export const actions: ActionTree<UserState, unknown> = {
  [SET_TOKEN.action] ({ commit }, token: string) {
    storage.setToken(token)
    commit(SET_TOKEN.mutation, token)
  },

  [SIGN_OUT.action] ({ commit }) {
    console.log('User signed out')
    storage.removeToken()
    commit(SET_TOKEN.mutation, '')
    resetRouter()
  },
}

export const mutations: MutationTree<UserState> = {
  [SET_TOKEN.mutation] (state, token: string) {
    state.token = token
  },
}

export default {
  state,
  actions,
  mutations,
}
