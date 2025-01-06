<script lang="ts" setup>
import { isDark, toggleDark } from '@/composables/dark'
import { useAppStore } from '@/stores/app'

// const route = useRoute()
const appStore = useAppStore()
</script>

<template>
  <ElDrawer
    v-model="appStore.showSettingDrawer"
    :size="300"
    title="项目配置"
  >
    <ElDivider>主题设置</ElDivider>
    <div class="flex-center">
      <ElSwitch
        @change="() => toggleDark()"
        v-model="isDark"
      />
    </div>
    <ElDivider>界面设置</ElDivider>
  </ElDrawer>
</template>
