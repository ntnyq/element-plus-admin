<script lang="ts" setup>
import { logger } from '@/utils/logger'

const themeColor = defineModel<string>()

const COLOR_PRESETS = [
  '#409EFF',
  '#ff4500',
  '#ff8c00',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsva(120, 40, 94)',
]

function handleThemeColorChange(color: string | null) {
  if (!color) return

  logger.success(`Theme color changed to: ${color}`)
  themeColor.value = color
}
</script>

<template>
  <ElColorPicker
    @change="handleThemeColorChange"
    :model-value="themeColor"
    :predefine="COLOR_PRESETS"
    popper-class="theme-color-picker-popper"
  />
</template>

<style>
.theme-color-picker-popper {
  z-index: 99999 !important;
}
</style>
