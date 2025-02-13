<script lang="ts" setup>
// import { useAppStore } from '@/stores/app'
import NavbarAction from './components/NavbarAction.vue'

// const appStore = useAppStore()
</script>

<template>
  <div
    class="app-navbar h-$oa-navbar-height flex items-center justify-between bg-$el-bg-color shadow-sm"
  >
    <div class="flex pl-4">
      <Breadcrumb />
    </div>
    <NavbarAction />
  </div>
</template>
