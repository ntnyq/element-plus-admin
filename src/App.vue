<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { isDark } from '@/composables/dark'
import { DEFAULT_CONFIG } from '@/constants/config'
import { useAppStore } from '@/stores/app'
import { logger } from '@/utils/logger'

const appStore = useAppStore()

const color = computed(() =>
  isDark.value ? 'rgba(255, 255, 255, 0.15)' : 'rgb(0 , 0, 0, 0.15)',
)

/**
 * @see {@link https://vuejs.org/api/composition-api-lifecycle#onerrorcaptured}
 */
onErrorCaptured((err, instance, info) => {
  logger.warn(err, instance, info)
  return false // disable error reporting
})
</script>

<template>
  <ElConfigProvider
    :size="appStore.size"
    :locale="zhCn"
  >
    <ElWatermark
      v-if="appStore.watermarkEnabled"
      :content="DEFAULT_CONFIG.watermarkContent"
      :z-index="9999"
      :font="{ color }"
      class="wh-full"
    >
      <RouterView v-slot="{ Component }">
        <Suspense>
          <component :is="Component" />

          <template #fallback>
            <Loading />
          </template>
        </Suspense>
      </RouterView>
    </ElWatermark>
    <RouterView v-else />
  </ElConfigProvider>
</template>
