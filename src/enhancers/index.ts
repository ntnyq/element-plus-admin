/**
 * @file App enhancer
 * @module enhancers/index
 * @author ntnyq <https://github.com/ntnyq>
 */

import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

export const useEnhancer = (): $TODO => {
  const route = useRoute()
  const router = useRouter()
  const i18n = useI18n()

  return {
    route,
    router,
    i18n,
  }
}
