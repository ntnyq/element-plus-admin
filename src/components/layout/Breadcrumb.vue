<script lang="ts" setup>
import { compile } from 'path-to-regexp'
import { ROUTE_REDIRECT_PREFIX } from '@/constants/route'
import { logger } from '@/utils/logger'
import type { RouteLocationMatched } from 'vue-router'

const route = useRoute()
const router = useRouter()

const breadcrumbs = ref<RouteLocationMatched[]>([])

function compilePath(path: string) {
  const toPath = compile(path)
  return toPath(route.params)
}
function handleClickLink(item: RouteLocationMatched) {
  const { redirect, path } = item

  if (redirect) {
    router.push(redirect as string).catch(err => {
      logger.warn(err)
    })
    return
  }
  router.push(compilePath(path)).catch(err => {
    logger.warn(err)
  })
}
function updateBreadcrumbs() {
  const matched = route.matched.filter(item => item.meta && item.meta.title)

  breadcrumbs.value = matched.filter(item => {
    return item.meta && item.meta.title && item.meta.breadcrumb !== false
  })
}

watch(
  () => route.path,
  path => {
    if (path.startsWith(ROUTE_REDIRECT_PREFIX)) {
      return
    }
    updateBreadcrumbs()
  },
)

onBeforeMount(() => {
  updateBreadcrumbs()
})
</script>

<template>
  <ElBreadcrumb class="flex items-center">
    <!-- <TransitionGroup> -->
    <ElBreadcrumbItem
      v-for="(item, index) in breadcrumbs"
      :key="item.path"
    >
      <span
        v-if="
          item.redirect === 'no-redirect' || index === breadcrumbs.length - 1
        "
        class="text-gray-400"
      >
        {{ item.meta.title }}
      </span>
      <a
        @click.prevent="handleClickLink(item)"
        v-else
      >
        {{ item.meta.title }}
      </a>
    </ElBreadcrumbItem>
    <!-- </TransitionGroup> -->
  </ElBreadcrumb>
</template>
