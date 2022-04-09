<template>
  <div class="app-sidebar">
    <ElScrollbar class="sidebar-scrollbar">
      <ElMenu
        :default-active="activeMenu"
        :collapse="!sidebar.isOpen"
        :collapse-transition="false"
        class="root-menu"
        mode="vertical"
        unique-opened
        router
      >
        <SidebarItem
          v-for="item in routes"
          :key="item.path"
          :item="item"
          :base-path="item.path"
        />
      </ElMenu>
    </ElScrollbar>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { useEnhancer } from '@/enhancers'
import SidebarItem from './SidebarItem.vue'

const { route } = useEnhancer()
const app = useAppStore()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const routes: any = []
const activeMenu = computed(() => route.meta.activeMenu || route.path)
const sidebar = computed(() => app.sidebar)
</script>
