/**
 * @file Store module app
 * @module store/app
 * @author ntnyq <https://github.com/ntnyq>
 */

import { defineStore } from 'pinia'
import * as storage from '@/utils/storage'

const { VUE_APP_FALLBACK_LANGUAGE = `zh` } = process.env

export const useAppStore = defineStore({
  id: `app`,

  state: () => ({
    language: storage.getLanguage() || VUE_APP_FALLBACK_LANGUAGE,
    theme: storage.getTheme() || `theme-default`,
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
