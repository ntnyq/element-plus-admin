<script lang="ts" setup>
// import { useAppStore } from '@/stores/app'
import { ENV } from '@/constants/env'
import NavbarAction from './components/NavbarAction.vue'

// const appStore = useAppStore()
</script>

<template>
  <div
    class="app-navbar h-$oa-navbar-height flex items-center justify-between bg-$el-bg-color"
  >
    <div class="flex">
      <RouterLink
        class="mr-4 px-4 font-medium"
        to="/"
      >
        {{ ENV.appTitle }}
      </RouterLink>
      <Breadcrumb />
    </div>
    <NavbarAction />
  </div>
</template>
