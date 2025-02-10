import pinia from '@/stores'

export const useUserStore = defineStore('user', () => {
  const accessToken = ref('')
  const permissions = ref<string[]>([])
  const isSuperAdmin = ref(true)

  function clearToken() {
    accessToken.value = ''
  }

  return {
    accessToken,
    permissions,
    isSuperAdmin,

    clearToken,
  }
})

export const useUserStoreWithOut = () => useUserStore(pinia)
