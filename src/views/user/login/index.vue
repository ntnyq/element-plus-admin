<script lang="ts" setup>
import { ROUTE_NAME } from '@/constants/route'

const router = useRouter()

async function handleLogin() {
  router.push({ name: ROUTE_NAME.root })
}
</script>

<template>
  <div class="h-screen flex-center flex-col gap-6">
    <h1>Login page</h1>
    <ElButton
      @click="handleLogin"
      type="primary"
    >
      登录
    </ElButton>
  </div>
</template>
