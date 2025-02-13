<script lang="ts" setup>
import { RE_HTTP_OR_HTTPS } from '@/constants/regexp'
import type { NavMenuItem } from '@/types'

const props = defineProps<{
  to: NavMenuItem
}>()

const isExternalUrl = computed(() => {
  if (!props.to?.path) return false
  return RE_HTTP_OR_HTTPS.test(props.to?.path)
})
const attrs = computed(() =>
  isExternalUrl.value
    ? {
        href: props.to.path,
        target: '_blank',
        rel: 'noopener',
      }
    : {
        to: props.to,
      },
)
</script>

<template>
  <component
    :is="isExternalUrl ? 'a' : 'router-link'"
    v-bind="attrs"
  >
    <slot />
  </component>
</template>
