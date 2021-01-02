<template>
  <div class="app-main">
    <router-view
      v-slot="{ Component }"
      :key="route.fullPath"
    >
      <transition
        :name="transitionName"
        mode="out-in"
      >
        <keep-alive :include="[]">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useEnhancer } from '@/enhancers'

export default defineComponent({
  name: 'AppMain',

  props: {
    transitionName: {
      type: String,
      default: 'el-fade-in',
    },
  },

  setup () {
    const { route, store } = useEnhancer()
    const cachedViews = computed(() => store.getters.cachedViews)

    return {
      route,
      cachedViews,
    }
  },
})
</script>
