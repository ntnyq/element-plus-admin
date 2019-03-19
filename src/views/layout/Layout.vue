<template>
  <div
    :class="classObj"
    class="app-wrapper"
  >
    <app-navbar />
    <div class="main-wrapper">
      <app-sidebar />
      <app-main />
    </div>
  </div>
</template>

<script>
import './style'
import { mapState } from 'vuex'
import {
  AppMain,
  AppNavbar,
  AppSidebar
} from './components'

export default {
  name: 'Layout',

  components: {
    AppSidebar,
    AppNavbar,
    AppMain
  },

  computed: {
    classObj () {
      const { isCollapse } = this

      return {
        'is-collapse': isCollapse
      }
    },
    ...mapState(['isCollapse'])
  }
}
</script>
