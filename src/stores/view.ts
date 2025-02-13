/**
 * @file View store
 */

import pinia from '@/stores'
import type { TagViewItem } from '@/types'

export const useViewStore = defineStore('view', () => {
  const cachedViews = ref<string[]>([])

  function addCachedView() {}
  function deleteCachedView() {}
  function deleteOtherCachedViews() {}
  function clearCachedViews() {}

  const visitedViews = ref<TagViewItem[]>([])
  function addVisitedView() {}
  function deleteVisitedView() {}
  function deleteOtherVisitedViews() {}
  function clearVisitedViews() {}

  function addView() {}
  function deleteView() {}
  function deleteOtherViews() {}
  function clearViews() {}

  return {
    cachedViews,
    addCachedView,
    deleteCachedView,
    deleteOtherCachedViews,
    clearCachedViews,

    visitedViews,
    addVisitedView,
    deleteVisitedView,
    deleteOtherVisitedViews,
    clearVisitedViews,

    addView,
    deleteView,
    deleteOtherViews,
    clearViews,
  }
})

export const useViewStoreWithOut = () => useViewStore(pinia)
