/**
 * @file global events
 */

import { useViewStore } from '@/stores/view'

export function useGlobalEvents() {
  const viewStore = useViewStore()

  useEventListener('beforeunload', () => {
    viewStore.clearViews()
  })
}
