/**
 * @file useTagsView
 */

import { useViewStore } from '@/stores/view'
import type { Ref } from 'vue'
import type { TagsViewItem } from '@/types'

export function useTagsView(): {
  isArrowShow: Ref<boolean>
  visitedViews: TagsViewItem[]
  onMouseEnter: (idx: number) => void
  onMouseLeave: (idx: number) => void
} {
  const { visitedViews } = useViewStore()

  const isArrowShow = ref(true)

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
