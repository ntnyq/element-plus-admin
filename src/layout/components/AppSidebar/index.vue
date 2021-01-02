<template>
  <div class="app-sidebar">
    <el-scrollbar class="sidebar-scrollbar">
      <el-menu
        :default-active="activeMenu"
        :collapse="!sidebar.isOpen"
        :collapse-transition="false"
        class="root-menu"
        mode="vertical"
        unique-opened
        router
      >
        <sidebar-item
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useEnhancer } from '@/enhancers'
import SidebarItem from './Item.vue'

export default defineComponent({
  name: 'AppSidebar',

  components: {
    SidebarItem,
  },

  setup () {
    const { route, store } = useEnhancer()

    const activeMenu = computed(() => route.meta.activeMenu || route.path)
    const routes = computed(() => store.getters.routes)
    const sidebar = computed(() => store.getters.sidebar)

    return {
      routes,
      sidebar,
      activeMenu,
    }
  },
})
</script>
