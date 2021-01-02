/**
 * @file App enhancer
 * @module enhancers/index
 * @author ntnyq <https://github.com/ntnyq>
 */

// import { computed } from 'vue'
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import { createStore } from '@/store'

type IRootStore = ReturnType<typeof createStore>

export const useEnhancer = (): $TODO => {
  const store = useStore<IRootStore>()
  const route = useRoute()
  const router = useRouter()
  const i18n = useI18n()

  return {
    store,
    route,
    router,
    i18n,
  }
}
