<script lang="ts" setup>
import { showModal } from '@/utils/libs/elementPlus'

function handleShowModal() {
  showModal({
    dialogProps: {
      title: '系统提示',
      width: 600,
    },
  })
}
</script>

<template>
  <div class="relative h-screen flex-col-center gap-8">
    <h1 class="text-3xl font-500">Home</h1>

    <ElButton
      @click="handleShowModal"
      type="primary"
    >
      显示弹窗
    </ElButton>
  </div>
</template>
