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

<script lang="ts" setup>
import { useEnhancer } from '@/enhancers'

withDefaults(defineProps<{ transitionName?: string }>(), {
  transitionName: `el-fade-in`,
})

const { route } = useEnhancer()
</script>
