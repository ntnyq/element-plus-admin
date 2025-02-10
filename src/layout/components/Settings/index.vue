<script lang="ts" setup>
import Color from 'color'
import { isDark, toggleDark } from '@/composables/dark'
import { useAppStore } from '@/stores/app'
import LayoutSelect from './components/LayoutSelect.vue'
import ThemeColorPicker from './components/ThemeColorPicker.vue'

// const route = useRoute()
const appStore = useAppStore()

function handleToggleTheme() {
  toggleDark()
}

watch(
  () => appStore.themeColor,
  (newThemeColor, oldThemeColor) => {
    if (newThemeColor !== oldThemeColor) {
      const rootElStyle = document.documentElement.style

      rootElStyle.setProperty(`--el-color-primary`, newThemeColor)
      rootElStyle.setProperty(`--el-color-primary-dark-2`, newThemeColor)

      for (let i = 1; i < 10; i++) {
        rootElStyle.setProperty(
          `--el-color-primary-light-${i}`,
          `${Color(newThemeColor).alpha(1 - i * 0.1)}`,
        )
      }
    }
  },
  {
    immediate: true,
  },
)
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

    <div class="relative flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <span class="text-xs">主题颜色</span>
        <ThemeColorPicker v-model="appStore.themeColor" />
      </div>

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
    </div>

    <ElDivider>导航设置</ElDivider>
    <div class="flex-center">
      <LayoutSelect v-model="appStore.layout" />
    </div>
  </ElDrawer>
</template>
