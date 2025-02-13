/**
 * @file useNav
 */

import { useAppStore } from '@/stores/app'

export function useNav() {
  const route = useRoute()
  const appStore = useAppStore()

  const isSidebarCollapse = computed(() => !appStore.isSidebarOpened)

  function toggleSidebar() {
    appStore.setIsSidebarOpened()
  }

  return {
    route,

    isSidebarCollapse,
    toggleSidebar,
  }
}
