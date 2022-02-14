/**
 * @file Store module app
 * @module store/app
 * @author ntnyq <https://github.com/ntnyq>
 */

import { defineStore } from 'pinia'
import * as storage from '@/utils/storage'
import { Theme } from '@/constants/app'
import { StoreModule } from '@/constants/store'

const { VUE_APP_FALLBACK_LANGUAGE = `zh` } = process.env

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

  state: () => <IAppStateTree>({
    language: storage.getLanguage() || VUE_APP_FALLBACK_LANGUAGE,
    theme: storage.getTheme() || Theme.DEFAULT,
    sidebar: {
      isOpen: true,
      withoutAnimation: false,
    },
  }),

  actions: {
    setLanguage (language: string) {
      storage.setLanguage(language)
      this.language = language
    },

    toggleSidebar () {
      this.sidebar.isOpen = !this.sidebar.isOpen
    },
  },
})
