/**
 * @file useTagsView
 */

import { useViewStore } from '@/stores/view'

export function useTagsView() {
  const { visitedViews } = useViewStore()

  const isArrowShow = ref(false)

  function onMouseEnter(idx: number) {
    console.log({ idx })
  }
  function onMouseLeave(idx: number) {
    console.log({ idx })
  }

  return {
    isArrowShow,
    visitedViews,
    onMouseEnter,
    onMouseLeave,
  }
}
