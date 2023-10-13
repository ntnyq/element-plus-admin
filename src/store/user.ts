/**
 * @file Store user
 * @module store/user
 * @author ntnyq <https://github.com/ntnyq>
 */

import { defineStore } from 'pinia'
import { resetRouter } from '@/router'
import { UserRole } from '@/constants/app'
import { StoreModule } from '@/constants/store'
import { tokenStorage } from '@/utils/storage'

export const useUserStore = defineStore(StoreModule.USER, () => {
  const token = ref(tokenStorage.get())
  const roles = ref<string[]>([])
  const username = ref('ntnyq')

  const getUserInfo = async () => {
    roles.value = [UserRole.USER, UserRole.ADMIN]
    return { roles: roles.value }
  }
  const setToken = (val: string) => {
    token.value = val
    tokenStorage.set(val)
  }
  const setRoles = (userRoles: string[]) => {
    roles.value = userRoles
  }

  const signOut = async () => {
    console.log('User signed out')
    token.value = ''
    tokenStorage.remove()
    resetRouter()
  }

  return {
    token,
    roles,
    username,

    getUserInfo,
    setToken,
    setRoles,
    signOut,
  }
})
