<script lang="ts" setup>
import { useTagsView } from '@/layout/composables/useTagsView'
import { useViewStore } from '@/stores/view'
import { isEmptyString, waitFor } from '@/utils'
import type { RouteLocationGeneric } from 'vue-router'
import type { TagsViewItem } from '@/types'

// const TAGS_VIEW_PADDING = 10

interface TagsViewContextmenuAction {
  key: string
  icon: string
  text: string
  disabled: boolean
  divided: boolean
  show: boolean
}

const route = useRoute()
const viewStore = useViewStore()

const wrapperRef = useTemplateRef('wrapperRef')
const scrollbarRef = useTemplateRef('scrollbarRef')
const trackRef = useTemplateRef('trackRef')
const contextmenuRef = useTemplateRef('contextmenuRef')
const tagsViewItemRef = useTemplateRef('tagsViewItemRef')

const isContextmenuShow = ref(false)
const contextmenuActions = ref<TagsViewContextmenuAction[]>([
  {
    icon: 'icon-ep:refresh-right',
    text: '重新加载',
    divided: false,
    disabled: false,
    show: true,
    key: 'refresh',
  },
  {
    icon: 'icon-ep:close',
    text: '关闭当前标签',
    divided: false,
    disabled: false,
    show: true,
    key: 'closeCurrent',
  },
  {
    icon: 'icon-ri:text-direction-l',
    text: '关闭左侧标签',
    divided: false,
    disabled: false,
    show: true,
    key: 'closeLeft',
  },
  {
    icon: 'icon-ri:text-direction-r',
    text: '关闭右侧标签',
    divided: false,
    disabled: false,
    show: true,
    key: 'closeRight',
  },
  {
    icon: 'icon-ri:text-spacing',
    text: '关闭其他标签',
    divided: true,
    disabled: false,
    show: true,
    key: 'closeOthers',
  },
  {
    icon: 'icon-ri:subtract-line',
    text: '关闭全部标签',
    divided: false,
    disabled: false,
    show: true,
    key: 'closeAll',
  },
  {
    icon: 'icon-ri:fullscreen-fill',
    text: '内容区全屏',
    divided: true,
    disabled: false,
    show: true,
    key: 'fullscreen',
  },
])

const { visitedViews, isArrowShow, onMouseEnter, onMouseLeave } = useTagsView()

async function moveToTagsView(idx = 0) {
  await nextTick()
  console.log({ idx })
  console.log(tagsViewItemRef.value)
}
async function moveToCurrentViewItem() {
  await nextTick()
  moveToTagsView()
}

/**
 * 将路由转化为 TagsViewItem
 */
function toTagsViewItem(route: RouteLocationGeneric) {
  const viewItem: TagsViewItem = {
    ...route,
    title: route.meta.title!,
    affix: route.meta.affix,
    keepAlive: route.meta.keepAlive,
    name: route.name as string,
  }
  return viewItem
}

function handleContextmenuItemClick(action: TagsViewContextmenuAction) {
  console.log({ action })
}
function handleClickTagItem() {}
function handleContextMenu(item: TagsViewItem, evt: MouseEvent) {
  console.log({
    item,
    evt,
  })
}
function handleScrollbarWheel() {}

function handleAddViewItem() {
  if (isEmptyString(route.name) && isEmptyString(route.meta.title)) {
    return
  }
  viewStore.addView(toTagsViewItem(route))
}

watch(
  () => route.path,
  async () => {
    handleAddViewItem()
    await waitFor(0)
    moveToCurrentViewItem()
  },
  {
    immediate: true,
  },
)
</script>

<template>
  <div
    ref="wrapperRef"
    class="app-tags-view tags-view-container relative w-full flex items-center text-14px text-$el-text-color-primary shadow"
  >
    <div
      v-show="isArrowShow"
      class="is-left tags-view-arrow tags-view-action"
    >
      <div class="icon-ri:arrow-left-double-line" />
    </div>

    <div
      @wheel.prevent="handleScrollbarWheel"
      ref="scrollbarRef"
      class="scroll-container relative flex-1 of-hidden whitespace-nowrap"
    >
      <div
        ref="trackRef"
        class="tags-view-track relative select-none of-visible whitespace-nowrap"
      >
        <div
          @click="handleClickTagItem"
          @contextmenu.prevent="handleContextMenu(item, $event)"
          @mouseenter.prevent="onMouseEnter(idx)"
          @mouseleave.prevent="onMouseLeave(idx)"
          v-for="(item, idx) in visitedViews"
          ref="tagsViewItemRef"
          :key="item.fullPath || idx"
          :class="{
            'is-active': !!item,
          }"
          class="tags-view-item relative inline-flex cursor-pointer items-center pl-6px lh-$oa-tags-view-height transition-all"
        >
          <span class="tags-view-item-title"> {{ item.title }} </span>
          <!-- <div class="tags-view-item-icon"></div> -->
        </div>
      </div>
    </div>

    <div
      v-show="isArrowShow"
      class="tags-view-arrow tags-view-action is-right"
    >
      <div class="icon-ri:arrow-right-double-line" />
    </div>

    <Transition name="el-zoom-in-top">
      <ul
        v-if="isContextmenuShow"
        ref="contextmenuRef"
        class="tags-view-contextmenu"
      >
        <li
          v-for="item in contextmenuActions"
          :key="item.key"
          class="relative flex items-center"
        >
          <div
            @click="handleContextmenuItemClick(item)"
            class="flex items-center"
          >
            <div
              :class="item.icon"
              class="mr-1"
            />
            <span>{{ item.text }}</span>
          </div>
        </li>
      </ul>
    </Transition>

    <ElDropdown
      trigger="click"
      placement="bottom-end"
    >
      <div class="tags-view-action tags-view-dropdown">
        <div class="icon-ri:arrow-down-s-line" />
      </div>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem
            v-for="item in contextmenuActions"
            :key="item.key"
            :command="item.key"
            :disabled="item.disabled"
            :divided="item.disabled"
          >
            <div class="flex items-center">
              <div
                :class="item.icon"
                class="mr-1"
              />
              <span>{{ item.text }}</span>
            </div>
          </ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<style scoped>
.tags-view-action {
  --at-apply: 'w-40px relative flex-center h-$oa-tags-view-height text-$el-text-color-primary hover:bg-gray:20 transition-colors cursor-pointer';
}
</style>
