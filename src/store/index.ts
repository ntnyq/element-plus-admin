/**
 * @file App state store
 * @module store/index
 * @author ntnyq <https://github.com/ntnyq>
 */

import {
  ModuleTree,
  createStore as createVuexStore,
} from 'vuex'
import type { GlobalState } from './types'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import view from './modules/view'
import router from './modules/router'

const modules: ModuleTree<unknown> = {
  app,
  user,
  view,
  router,
}

export const createStore = () => createVuexStore<GlobalState>({ getters, modules })

const store = createStore()

export default store
