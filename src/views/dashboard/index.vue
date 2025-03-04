<script lang="ts" setup>
import { EpUtils } from '@/utils/libs/elementPlus'

function handleShowModal() {
  EpUtils.showModal({
    dialogProps: {
      title: '系统提示',
      width: 600,
      closeOnClickModal: true,
    },
  })
}
</script>

<template>
  <div class="flex-col-center gap-8 h-screen relative">
    <h1 class="text-3xl font-500">Home</h1>

    <div class="icon-admin:flag" />

    <div class="flex gap-4 items-center">
      <ElButton
        @click="handleShowModal"
        type="primary"
      >
        显示弹窗
      </ElButton>
    </div>
  </div>
</template>
