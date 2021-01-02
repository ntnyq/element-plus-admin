<template>
  <div
    class="screenfull-container"
    @click="handleClick"
  >
    <svg-icon :name="iconName" />
  </div>
</template>

<script lang="ts">
import screenfull from 'screenfull'
import {
  ref,
  computed,
  defineComponent,
  onMounted,
  onBeforeUnmount,
} from 'vue'

export default defineComponent({
  name: 'AppScreenfull',

  setup () {
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

    const iconName = computed(() => isFullscreen.value
      ? `fullscreen-out`
      : `fullscreen-in`,
    )

    return {
      iconName,
      handleClick,
    }
  },
})
</script>
