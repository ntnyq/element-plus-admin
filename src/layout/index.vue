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

<script lang="ts">
import { defineComponent } from 'vue'
import { useAppStore } from '@/store/app'
import AppMain from './components/AppMain.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppSidebar from './components/AppSidebar/index.vue'

export default defineComponent({
  name: `TheLayout`,

  components: {
    AppMain,
    AppNavbar,
    AppSidebar,
  },

  setup () {
    const app = useAppStore()

    return {
      app,
    }
  },
})
</script>
