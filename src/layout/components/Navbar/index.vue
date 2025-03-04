<script lang="ts" setup>
// import { useAppStore } from '@/stores/app'
import NavbarAction from './components/NavbarAction.vue'

// const appStore = useAppStore()
</script>

<template>
  <div
    class="app-navbar bg-$el-bg-color flex h-$oa-navbar-height shadow-sm items-center justify-between"
  >
    <div class="pl-4 flex">
      <Breadcrumb />
    </div>
    <NavbarAction />
  </div>
</template>
