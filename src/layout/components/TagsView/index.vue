<script lang="ts" setup>
import { useTagsView } from '@/layout/composables/useTagsView'
import type { TagView } from '@/types'

const wrapperRef = useTemplateRef('wrapperRef')
const scrollbarRef = useTemplateRef('scrollbarRef')
const trackRef = useTemplateRef('trackRef')

const { visitedViews, isArrowShow, onMouseEnter, onMouseLeave } = useTagsView()

function handleClickTagView() {}
function handleContextMenu(item: TagView, evt: MouseEvent) {
  console.log({
    item,
    evt,
  })
}
</script>

<template>
  <div
    ref="wrapperRef"
    class="app-tags-view"
  >
    <div class="relative">
      <div v-show="isArrowShow">
        <div class="icon-ri:arrow-left-double-line" />
      </div>
      <div
        ref="scrollbarRef"
        class="scroll-container"
      >
        <div
          ref="trackRef"
          class="tags-view-track select-none"
        >
          <div
            @click="handleClickTagView"
            @contextmenu.prevent="handleContextMenu(item, $event)"
            @mouseenter.prevent="onMouseEnter(idx)"
            @mouseleave.prevent="onMouseLeave(idx)"
            v-for="(item, idx) in visitedViews"
            :key="item.fullPath || idx"
          >
            <span> {{ item.title }} </span>
          </div>
        </div>
      </div>
      <div v-show="isArrowShow">
        <div class="icon-ri:arrow-right-double-line" />
      </div>
    </div>
  </div>
</template>
