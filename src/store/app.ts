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

export const useAppStore = defineStore(StoreModule.APP, () => {
  const language = ref(storage.getLanguage() || ENV.APP_LOCALE)
  const theme = ref(storage.getTheme() || Theme.DEFAULT)
  const isSidebarOpen = ref(true)

  const setLanguage = (lang: string) => {
    storage.setLanguage(lang)
    language.value = lang
  }
  const toggleSidebar = (isOpen = !isSidebarOpen.value) => {
    isSidebarOpen.value = isOpen
  }

  return {
    language,
    theme,
    isSidebarOpen,

    setLanguage,
    toggleSidebar,
  }
})
