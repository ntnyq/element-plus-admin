/**
 * @file Store user
 * @module store/user
 * @author ntnyq <https://github.com/ntnyq>
 */

import { defineStore } from 'pinia'
import * as storage from '@/utils/storage'
import { resetRouter } from '@/router'
import { UserRole } from '@/constants/app'
import { StoreModule } from '@/constants/store'

export interface IUserStateTree {
  token: string
  roles: string[]
  username: string
}

export const useUserStore = defineStore({
  id: StoreModule.USER,

  state: () =>
    ({
      token: storage.getToken() || '',
      roles: [],
      username: 'ntnyq',
    }) as IUserStateTree,

  actions: {
    async getUserInfo() {
      const roles = [UserRole.USER, UserRole.ADMIN]

      this.$patch({ roles })

      return { roles }
    },

    setToken(token: string) {
      storage.setToken(token)
      this.$patch({ token })
    },

    setRoles(roles: string[]) {
      this.$patch({ roles })
    },

    signOut() {
      console.log('User signed out')
      storage.removeToken()
      resetRouter()
      this.$patch({ token: '' })
    },
  },
})
