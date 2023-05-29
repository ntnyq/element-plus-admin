<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

defineOptions({
  name: 'ScreenfullToggler',
})

const { toggle, isFullscreen, isSupported } = useFullscreen()
const handleClick = () => {
  if (!isSupported.value) return false
  toggle()
}
</script>

<template>
  <div
    @click="handleClick"
    class="screenfull-toggler"
  >
    <IconMdiFullscreenExit v-if="isFullscreen" />
    <IconMdiFullscreen v-else />
  </div>
</template>
