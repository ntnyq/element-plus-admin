/**
 * @file App getters
 * @module store/getters
 * @author ntnyq <https://github.com/ntnyq>
 */

import type { GetterTree } from 'vuex'
import type { GlobalState } from './types'

const getters: GetterTree<GlobalState, unknown> = {
  // app
  language: state => state.app.language,
  theme: state => state.app.theme,
  sidebar: state => state.app.sidebar,

  // user
  token: state => state.user.token,

  // view
  visitedViews: state => state.view.visitedViews,
  cachedViews: state => state.view.cachedViews,
}

export default getters
