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
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </ElMenu>
    </ElScrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/app'
import { useEnhancer } from '@/enhancers'
import SidebarItem from './Item.vue'

export default defineComponent({
  name: `AppSidebar`,

  components: {
    SidebarItem,
  },

  setup () {
    const { route } = useEnhancer()
    const app = useAppStore()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const routes: any = []

    const activeMenu = computed(() => route.meta.activeMenu || route.path)
    const sidebar = computed(() => app.sidebar)

    return {
      routes,
      sidebar,
      activeMenu,
    }
  },
})
</script>
