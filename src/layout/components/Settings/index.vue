<script lang="ts" setup>
import { isDark, toggleDark } from '@/composables/dark'
import { useAppStore } from '@/stores/app'
import LayoutSelect from './components/LayoutSelect.vue'

// const route = useRoute()
const appStore = useAppStore()

function handleToggleTheme() {
  toggleDark()
}
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
        @change="handleToggleTheme"
        :model-value="isDark"
      />
    </div>

    <ElDivider>界面设置</ElDivider>
    <div class="flex items-center justify-between">
      <span class="text-xs">开启 TagsView</span>
      <ElSwitch v-model="appStore.showTagsView" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-xs">固定 Header</span>
      <ElSwitch v-model="appStore.fixedHeader" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-xs">侧边栏 Logo</span>
      <ElSwitch v-model="appStore.fixedHeader" />
    </div>

    <div class="flex items-center justify-between">
      <span class="text-xs">开启水印</span>
      <ElSwitch v-model="appStore.watermarkEnabled" />
    </div>

    <ElDivider>导航设置</ElDivider>
    <div class="flex-center">
      <LayoutSelect v-model="appStore.layout" />
    </div>
  </ElDrawer>
</template>
