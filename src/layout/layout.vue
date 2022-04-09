<template>
  <div
    :class="{
      'is-sidebar-open': app.sidebar.isOpen,
      'is-sidebar-close': !app.sidebar.isOpen,
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

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import AppMain from './components/AppMain.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppSidebar from './components/AppSidebar/TheSidebar.vue'

const app = useAppStore()
</script>
