<script setup lang="ts">
import { ROUTE_REDIRECT_PREFIX } from '@/constants/route'
import { useNav } from '@/layout/composables/useNav'
import { usePermissionStore } from '@/stores/permission'
import SidebarCenterToggler from './components/SidebarCenterToggler.vue'
import SidebarItem from './components/SidebarItem.vue'
import SidebarLogo from './components/SidebarLogo.vue'
import type { NavMenuItem } from '@/types'

const route = useRoute()
const permissionStore = usePermissionStore()

const { isSidebarCollapse, toggleSidebar } = useNav()
const [isShow, setIsShow] = useToggle()

const subMenuData = ref<NavMenuItem[]>([])

const defaultActive = computed(() =>
  route.meta.activeMenu ? route.meta.activeMenu : route.path,
)

function getSubMenuData() {
  subMenuData.value = []
}

const routes = computed(() => permissionStore.wholeMenus)

watch(
  () => [route.path, permissionStore.wholeMenus],
  () => {
    if (route.path.includes(ROUTE_REDIRECT_PREFIX)) {
      return
    }
    getSubMenuData()
  },
)

onMounted(() => {
  getSubMenuData()
})
</script>

<template>
  <div
    @mouseenter.prevent="setIsShow(true)"
    @mouseleave.prevent="setIsShow(false)"
    class="app-sidebar"
  >
    <SidebarLogo :collapse="isSidebarCollapse" />
    <ElScrollbar wrap-class="sidebar-scrollbar-wrapper">
      <ElMenu
        :collapse-transition="false"
        :collapse="isSidebarCollapse"
        :default-active
        mode="vertical"
        class="select-none"
        unique-open
      >
        <SidebarItem
          v-for="item in routes"
          :key="item.path"
          :item
          :base-path="item.path"
          class="select-none"
        />
      </ElMenu>
    </ElScrollbar>

    <SidebarCenterToggler
      @toggle="toggleSidebar"
      v-if="isShow || isSidebarCollapse"
      :is-active="!isSidebarCollapse"
    />
  </div>
</template>
