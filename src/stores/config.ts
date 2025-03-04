import pinia from '@/stores'

export const useConfigStore = defineStore('config', () => {})

export const useConfigStoreWithOut = () => useConfigStore(pinia)
