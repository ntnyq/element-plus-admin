/**
 * @file View store
 */

import pinia from '@/stores'
import type { Ref } from 'vue'
import type { TagsViewItem } from '@/types'

export const useViewStore = defineStore(
  'view',
  (): {
    cachedViews: Ref<string[]>
    addCachedView: (view: TagsViewItem) => void
    deleteCachedView: () => void
    deleteOtherCachedViews: () => void
    clearCachedViews: () => void
    visitedViews: Ref<TagsViewItem[]>
    addVisitedView: (view: TagsViewItem) => void
    deleteVisitedView: () => void
    deleteOtherVisitedViews: () => void
    clearVisitedViews: () => void
    addView: (view: TagsViewItem) => void
    deleteView: () => void
    deleteOtherViews: () => void
    clearViews: () => void
  } => {
    const cachedViews = ref<string[]>([])

    function addCachedView(view: TagsViewItem) {
      // Already in cache
      if (cachedViews.value.includes(view.name)) {
        return
      }
      // Should cache
      if (view.keepAlive) {
        cachedViews.value.push(view.name)
      }
    }

    function deleteCachedView() {}
    function deleteOtherCachedViews() {}
    function clearCachedViews() {}

    const visitedViews = ref<TagsViewItem[]>([])

    function addVisitedView(view: TagsViewItem) {
      // Already in visited view list
      if (visitedViews.value.some(v => v.path === view.path)) {
        return
      }

      if (view.affix) {
        visitedViews.value.unshift(view)
      } else {
        visitedViews.value.push(view)
      }
    }
    function deleteVisitedView() {}
    function deleteOtherVisitedViews() {}
    function clearVisitedViews() {}

    function addView(view: TagsViewItem) {
      addCachedView(view)
      addVisitedView(view)
    }
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
  },
)

export const useViewStoreWithOut = () => useViewStore(pinia)
