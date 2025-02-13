<script lang="ts" setup>
import { ENV } from '@/constants/env'

defineProps<{
  collapse?: boolean
}>()
</script>

<template>
  <div
    :class="{
      'is-collapse': collapse,
    }"
    class="app-sidebar-logo relative h-$oa-navbar-height w-full of-hidden"
  >
    <Transition name="sidebar-logo-fade">
      <RouterLink
        :title="ENV.appTitle"
        to="/"
        class="h-full flex flex-nowrap items-center pl-10px"
      >
        <img
          class="block max-h-32px max-w-32px object-contain"
          src="/images/logos/logo.png"
          alt="LOGO"
        />
        <span
          v-if="!collapse"
          class="ml-12px mt-2px inline-block h-32px truncate text-lg font-semibold lh-32px"
        >
          {{ ENV.appTitle }}
        </span>
      </RouterLink>
    </Transition>
  </div>
</template>
