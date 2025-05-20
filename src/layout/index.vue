<script lang="ts" setup>
import { EnumAppDevice, EnumAppLayout } from '@/enums/app'
import AppMain from '@/layout/components/Main.vue'
import Navbar from '@/layout/components/Navbar/index.vue'
import AppSettings from '@/layout/components/Settings/index.vue'
import Sidebar from '@/layout/components/Sidebar/index.vue'
import TagsView from '@/layout/components/TagsView/index.vue'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const appStore = useAppStore()

const wrapperRef = useTemplateRef('wrapperRef')

// const shouldAutoCloseSidebar = ref(true)

useResizeObserver(wrapperRef, entries => {
  if (appStore.isMobile) {
    return
  }

  const entry = entries[0]
  const [{ inlineSize: width }] = entry.borderBoxSize

  if (width > 0 && width <= 760) {
    appStore.setDevice(EnumAppDevice.MOBILE)
    // shouldAutoCloseSidebar.value = true
  } else if (width > 760 && width <= 1200) {
    appStore.setDevice(EnumAppDevice.TABLET)
  } else if (width > 1200) {
    appStore.setDevice(EnumAppDevice.DESKTOP)
  }
})

const wrapperClass = computed(() => ({
  'sidebar-opened': appStore.isSidebarOpened,
  'sidebar-closed': !appStore.isSidebarOpened,
  'is-mobile': appStore.isMobile,
  'is-desktop': appStore.isDesktop,
  'is-tablet': appStore.isTablet,
  [`layout-${appStore.layout}`]: true,
}))

function handleClickOverlay() {
  appStore.setIsSidebarOpened(false)
}

watch(route, () => {
  if (appStore.isMobile && appStore.isSidebarOpened) {
    appStore.setIsSidebarOpened(false)
  }
})
</script>

<template>
  <div
    ref="wrapperRef"
    :class="wrapperClass"
    class="app-wrapper relative wh-full"
  >
    <!-- 遮罩层 -->
    <div
      @click="handleClickOverlay"
      v-if="appStore.isMobile"
      class="fixed left-0 top-0 z-overlay wh-full bg-black:30"
    />

    <!-- 公用侧边栏 -->
    <Sidebar class="sidebar-container" />

    <!-- 混合布局 -->
    <div
      v-if="appStore.layout === EnumAppLayout.MIX"
      class="mix-container"
    >
      <h1>Hello mixed layout</h1>
    </div>

    <!-- 左侧和顶部布局 -->
    <div
      v-else
      class="main-container"
    >
      <div :class="{ 'fixed-header': appStore.fixedHeader }">
        <Navbar v-if="appStore.layout === EnumAppLayout.LEFT" />
        <TagsView v-if="appStore.showTagsView" />
      </div>
      <AppMain />
      <AppSettings />
    </div>
  </div>
</template>
