<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import AppMain from './components/AppMain.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppSidebar from './components/AppSidebar/TheSidebar.vue'

const appStore = useAppStore()
</script>

<template>
  <div
    :class="{
      'is-sidebar-open': appStore.isSidebarOpen,
      'is-sidebar-close': !appStore.isSidebarOpen,
    }"
    class="app-wrapper"
  >
    <AppNavbar />
    <AppSidebar />
    <div class="app-main-wrapper">
      <AppMain />
    </div>
  </div>
</template>
