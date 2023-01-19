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
import type { RouteRecordRaw } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
import { useAppStore } from '@/store/app'
import { useEnhancer } from '@/enhancers'

const { route } = useEnhancer()
const appStore = useAppStore()

const routes: RouteRecordRaw[] = []
const activeMenu = computed(() => route.meta.activeMenu || route.path)
const sidebar = computed(() => appStore.sidebar)
</script>
