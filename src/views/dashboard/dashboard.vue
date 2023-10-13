<script setup lang="ts">
import { waitFor } from '@/utils'

const [isLoading, toggleLoading] = useToggle(true)

const handleHideLoading = async () => {
  await waitFor(2e3)
  toggleLoading()
}

onMounted(() => {
  handleHideLoading()
})
</script>

<template>
  <div
    v-loading="isLoading"
    :style="{ height: '600px' }"
    class="app-container"
  >
    <h1>Dashboard</h1>
    <AppScreenfull />
  </div>
</template>
