<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route'

const props = defineProps<{
  frameInfo?: {
    frameSrc?: string
    fullPath?: string
  }
}>()

const route = useRoute()
const frameRef = useTemplateRef('frameRef')

const isLoading = ref(true)
const frameSrc = ref('')

function hideLoading() {
  isLoading.value = false
}
async function init() {
  await nextTick()
  const iframeEl = unref(frameRef)

  if (!iframeEl) {
    return
  }

  const _frame = iframeEl as any

  if (_frame.attachEvent) {
    _frame.attachEvent('onload', () => {
      hideLoading()
    })
  } else {
    iframeEl.addEventListener('load', () => {
      hideLoading()
    })
  }
}

if (unref(route).meta?.frameSrc) {
  frameSrc.value = unref(route).meta.frameSrc as string
}
if (!unref(route).meta.frameLoading) {
  hideLoading()
}

watch(
  () => route.fullPath,
  path => {
    if (
      route.name === ROUTE_NAME.redirect &&
      path.includes(props.frameInfo?.fullPath ?? '')
    ) {
      frameSrc.value = path
      isLoading.value = true
    }
    if (props.frameInfo?.fullPath === path) {
      frameSrc.value = props.frameInfo?.frameSrc as string
    }
  },
)

onMounted(() => {
  init()
})
</script>

<template>
  <div
    v-loading="isLoading"
    class="absolute bottom-0 left-0 right-0 top-0"
  >
    <iframe
      ref="frameRef"
      :src="frameSrc"
      class="box-border wh-full of-hidden border-none"
      frameborder="0"
    />
  </div>
</template>
