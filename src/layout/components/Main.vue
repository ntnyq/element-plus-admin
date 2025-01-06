<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { useViewStore } from '@/stores/view'

const appStore = useAppStore()
const viewStore = useViewStore()

const minHeight = computed(() => {
  if (appStore.showTagsView) {
    return `calc(100vh - var(--height-navbar) - var(--height-tags-view))`
  } else {
    return `calc(100vh - var(--height-navbar))`
  }
})
</script>

<template>
  <div
    :style="{ minHeight }"
    class="app-main"
  >
    <RouterView>
      <template #default="{ Component, route }">
        <Transition mode="out-in">
          <KeepAlive :include="viewStore.cachedViews">
            <component
              :key="route.path"
              :is="Component"
            />
          </KeepAlive>
        </Transition>
      </template>
    </RouterView>
  </div>
</template>
