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
import screenfull from 'screenfull'

const isFullscreen = ref(false)

const handleClick = () => {
  if (!screenfull.isEnabled) return false
  screenfull.toggle()
}

const handleChange = () => {
  isFullscreen.value = (screenfull as { isFullscreen: boolean }).isFullscreen
}

onMounted(() => {
  if (screenfull.isEnabled) {
    screenfull.on('change', handleChange)
  }
})

onBeforeUnmount(() => {
  if (screenfull.isEnabled) {
    screenfull.off('change', handleChange)
  }
})
</script>
