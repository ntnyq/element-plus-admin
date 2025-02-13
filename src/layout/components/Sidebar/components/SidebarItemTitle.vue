<script lang="ts" setup>
defineProps<{
  title?: string
  icon?: string
}>()
</script>

<template>
  <div class="relative flex items-center">
    <div
      v-if="icon"
      :class="icon"
      class="mr-1"
    />
    <span v-if="title">
      {{ title }}
    </span>
  </div>
</template>
