<template>
  <div class="app-main">
    <RouterView
      v-slot="{ Component }"
      :key="route.fullPath"
    >
      <transition
        :name="transitionName"
        mode="out-in"
      >
        <KeepAlive :include="[]">
          <component :is="Component" />
        </KeepAlive>
      </transition>
    </RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useEnhancer } from '@/enhancers'

export default defineComponent({
  name: `AppMain`,

  props: {
    transitionName: {
      type: String,
      default: `el-fade-in`,
    },
  },

  setup () {
    const { route } = useEnhancer()

    return {
      route,
    }
  },
})
</script>
