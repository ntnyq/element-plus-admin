import pinia from '@/stores'

export const useUserStore = defineStore('user', () => {
  const accessToken = ref('')
  const permissions = ref<string[]>([])
  const isSuperAdmin = ref(true)

  return {
    accessToken,
    permissions,
    isSuperAdmin,
  }
})

export const useUserStoreWithOut = () => useUserStore(pinia)
