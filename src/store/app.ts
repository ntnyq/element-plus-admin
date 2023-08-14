/**
 * @file Store module app
 * @module store/app
 * @author ntnyq <https://github.com/ntnyq>
 */

import { defineStore } from 'pinia'
import * as storage from '@/utils/storage'
import { Theme } from '@/constants/app'
import { StoreModule } from '@/constants/store'
import { ENV } from '@/constants/config'

export interface IAppStateTree {
  language: string
  theme: string
  sidebar: {
    isOpen: boolean
    withoutAnimation: boolean
  }
}

export const useAppStore = defineStore({
  id: StoreModule.APP,

  state: () =>
    ({
      language: storage.getLanguage() || ENV.APP_LOCALE,
      theme: storage.getTheme() || Theme.DEFAULT,
      sidebar: {
        isOpen: true,
        withoutAnimation: false,
      },
    }) as IAppStateTree,

  actions: {
    setLanguage(language: string) {
      storage.setLanguage(language)
      this.language = language
    },

    toggleSidebar() {
      this.sidebar.isOpen = !this.sidebar.isOpen
    },
  },
})
