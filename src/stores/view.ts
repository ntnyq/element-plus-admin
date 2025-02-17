/**
 * @file View store
 */

import pinia from '@/stores'
import type { TagsViewItem } from '@/types'

export const useViewStore = defineStore('view', () => {
  const cachedViews = ref<string[]>([])

  function addCachedView(view: TagsViewItem) {
    // already in cache
    if (cachedViews.value.includes(view.name)) {
      return
    }
    // should cache
    if (view.keepAlive) {
      cachedViews.value.push(view.name)
    }
  }

  function deleteCachedView() {}
  function deleteOtherCachedViews() {}
  function clearCachedViews() {}

  const visitedViews = ref<TagsViewItem[]>([])

  function addVisitedView(view: TagsViewItem) {
    // already in visited view list
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
})

export const useViewStoreWithOut = () => useViewStore(pinia)
