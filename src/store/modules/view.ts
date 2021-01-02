/**
 * @file Store module view
 * @module store/modules/view
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { ActionTree, MutationTree } from 'vuex'
import type { ViewState } from '../types'

export const state: ViewState = {
  visitedViews: [],
  cachedViews: [],
}

export const actions: ActionTree<ViewState, unknown> = {
}

export const mutations: MutationTree<ViewState> = {
}

export default {
  state,
  actions,
  mutations,
}
