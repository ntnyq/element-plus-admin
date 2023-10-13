/**
 * @file Store module app
 * @module store/app
 * @author ntnyq <https://github.com/ntnyq>
 */

import { defineStore } from 'pinia'
import { StoreModule } from '@/constants/store'
import { languageStorage, themeStorage } from '@/utils/storage'

export const useAppStore = defineStore(StoreModule.APP, () => {
  const language = ref(languageStorage.get())
  const theme = ref(themeStorage.get())
  const isSidebarOpen = ref(true)

  const setLanguage = (lang: string) => {
    languageStorage.set(lang)
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
