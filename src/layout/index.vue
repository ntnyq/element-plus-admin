<template>
  <div
    :class="wrapperClass"
    class="app-wrapper"
  >
    <app-navbar />
    <app-sidebar />
    <div class="app-main-wrapper">
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/app'
import AppMain from './components/AppMain.vue'
import AppNavbar from './components/AppNavbar.vue'
import AppSidebar from './components/AppSidebar/index.vue'

export default defineComponent({
  name: 'TheLayout',

  components: {
    AppMain,
    AppNavbar,
    AppSidebar,
  },

  setup () {
    const app = useAppStore()

    console.log({ app })

    const wrapperClass = computed(() => ({
      'is-sidebar-open': app.sidebar.isOpen,
      'is-sidebar-close': !app.sidebar.isOpen,
    }))

    return {
      app,
      wrapperClass,
    }
  },
})
</script>
