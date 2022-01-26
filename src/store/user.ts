/**
 * @file Store user
 * @module store/user
 * @author ntnyq <https://github.com/ntnyq>
 */

import { defineStore } from 'pinia'
import * as storage from '@/utils/storage'
import { resetRouter } from '@/router'

export const useUserStore = defineStore({
  id: `user`,

  state: () => ({
    token: storage.getToken() || ``,
  }),

  actions: {
    setToken (token: string) {
      storage.setToken(token)
      this.$patch({ token })
    },

    signOut () {
      console.log('User signed out')
      storage.removeToken()
      resetRouter()
      this.$patch({ token: `` })
    },
  },
})
