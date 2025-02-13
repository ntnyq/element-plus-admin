<script lang="ts" setup>
import { toArray } from '@ntnyq/utils'
import { useUserStore } from '@/stores/user'

const props = defineProps<{
  permissions?: string[]
}>()

const slots = defineSlots<{
  default: () => any
  placeholder: () => any
}>()

const userStore = useUserStore()

const showDefaultSlot = computed(() => {
  const requiredPermissions = toArray(props.permissions)

  if (!requiredPermissions.length) {
    return true
  }

  if (userStore.isSuperAdmin) {
    return true
  }

  if (!userStore.permissions.length) {
    return false
  }

  return requiredPermissions.every(permission =>
    userStore.permissions.includes(permission),
  )
})
</script>

<template>
  <slot v-if="showDefaultSlot" />
  <slot
    v-else-if="slots.placeholder"
    name="placeholder"
  />
</template>
