<template>
  <div class="app-sidebar">
    <el-menu :default-active="$route.path"
      background-color="#2d333f"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router>
      <sidebar-item v-for="router in routers"
        :item="router"
        :base-path="router.path"
        :key="router.path" />
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  name: 'AppSidebar',

  components: { SidebarItem },

  computed: {
    ...mapState(['routers'])
  }
}
</script>
