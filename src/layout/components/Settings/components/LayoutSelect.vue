<script lang="ts" setup>
import { EnumAppLayout } from '@/enums/app'

const layoutMode = defineModel<EnumAppLayout>()

function handleUpdateLayoutMode(layout: EnumAppLayout) {
  layoutMode.value = layout
}
</script>

<template>
  <div class="flex flex-wrap h-12 w-full justify-around">
    <ElTooltip
      content="左侧模式"
      placement="bottom"
    >
      <div
        @click="handleUpdateLayoutMode(EnumAppLayout.LEFT)"
        :class="{ 'is-active': layoutMode === EnumAppLayout.LEFT }"
        class="layout-item is-left"
      >
        <div />
        <div />
      </div>
    </ElTooltip>
    <ElTooltip
      content="顶部模式"
      placement="bottom"
    >
      <div
        @click="handleUpdateLayoutMode(EnumAppLayout.TOP)"
        :class="{ 'is-active': layoutMode === EnumAppLayout.TOP }"
        class="layout-item is-top"
      >
        <div />
        <div />
      </div>
    </ElTooltip>
    <ElTooltip
      content="混合模式"
      placement="bottom"
    >
      <div
        @click="handleUpdateLayoutMode(EnumAppLayout.MIX)"
        :class="{ 'is-active': layoutMode === EnumAppLayout.MIX }"
        class="layout-item is-mix"
      >
        <div />
        <div />
      </div>
    </ElTooltip>
  </div>
</template>

<style lang="scss">
.layout-item {
  width: 18%;
  background-color: #f0f2f5;
  --at-apply: 'relative h-45px of-hidden cursor-pointer rounded-4px';

  &.is-mix div:nth-child(1),
  &.is-top div:nth-child(1) {
    width: 100%;
    height: 30%;
    background-color: #1b2a47;
    box-shadow: 0 0 1px #888;
  }

  &.is-mix div:nth-child(2) {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30%;
    height: 70%;
    background-color: #1b2a47;
    box-shadow: 0 0 1px #888;
  }

  &.is-left div:nth-child(1) {
    width: 30%;
    height: 100%;
    background-color: #1b2a47;
  }

  &.is-left div:nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    width: 70%;
    height: 30%;
    background-color: #fff;
    box-shadow: 0 0 1px #888;
  }

  &.is-active {
    --at-apply: 'border-2 border-solid border-$el-color-primary';
  }
}
</style>
