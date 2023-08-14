<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import SidebarItem from './SidebarItem.vue'
import type { RouteRecordRaw } from 'vue-router'

const route = useRoute()
const appStore = useAppStore()

const routes: RouteRecordRaw[] = []
const activeMenu = computed(() => route.meta.activeMenu || route.path)
</script>

<template>
  <div class="app-sidebar">
    <ElScrollbar class="sidebar-scrollbar">
      <ElMenu
        :default-active="activeMenu"
        :collapse="!appStore.isSidebarOpen"
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
