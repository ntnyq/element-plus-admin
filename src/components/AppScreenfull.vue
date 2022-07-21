<template>
  <div
    @click="handleClick"
    class="screenfull-container"
  >
    <IconMdiFullscreenExit v-if="isFullscreen" />
    <IconMdiFullscreen v-else />
  </div>
</template>

<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const {
  toggle,
  isFullscreen,
  isSupported,
} = useFullscreen()
const handleClick = () => {
  if (!isSupported) return false
  toggle()
}
</script>
