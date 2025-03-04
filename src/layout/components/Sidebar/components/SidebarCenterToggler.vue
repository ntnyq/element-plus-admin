<script lang="ts" setup>
defineProps<{
  isActive?: boolean
}>()
const emits = defineEmits<{
  toggle: []
}>()

function handleToggle() {
  emits('toggle')
}
</script>

<template>
  <ElTooltip
    :content="isActive ? '点击折叠' : '点击展开'"
    placement="right"
  >
    <ElButton
      @click="handleToggle"
      class="sidebar-center-toggler flex-center top-1/2 absolute z-sidebar-plus -translate-y-1/2 -right-10px"
      circle
    >
      <div
        :class="
          isActive
            ? 'icon-ri:arrow-left-double-line'
            : 'icon-ri:arrow-right-double-line'
        "
        class="text-lg"
      />
    </ElButton>
    <!--
      <div
      @click="handleToggle"
      class="sidebar-center-toggler z-sidebar-plus absolute right-2px top-1/2 flex-center border border-base rounded-4px bg-$el-bg-color -translate-y-1/2"
      >
      <div
      :class="
      isActive
      ? 'icon-ri:arrow-left-double-line'
      : 'icon-ri:arrow-right-double-line'
      "
      class="text-lg"
      />
      </div>
    -->
  </ElTooltip>
</template>
