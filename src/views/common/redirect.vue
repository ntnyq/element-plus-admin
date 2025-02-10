<script lang="ts" setup>
import { isArray } from '@ntnyq/utils'

const route = useRoute()
const router = useRouter()

const { params, query } = unref(route)
const { path } = params

router.replace({
  path: `/${isArray(path) ? path.join('/') : path}`,
  query,
})
</script>

<template>
  <div />
</template>
