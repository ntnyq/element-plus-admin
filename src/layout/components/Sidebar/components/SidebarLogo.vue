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
    class="app-sidebar-logo h-$oa-navbar-height w-full relative of-hidden"
  >
    <Transition name="sidebar-logo-fade">
      <RouterLink
        :title="ENV.appTitle"
        to="/"
        class="pl-10px flex flex-nowrap h-full items-center"
      >
        <img
          class="max-h-32px max-w-32px block object-contain"
          src="/images/logos/logo.png"
          alt="LOGO"
        />
        <span
          v-if="!collapse"
          class="text-lg lh-32px font-semibold ml-12px mt-2px h-32px inline-block truncate"
        >
          {{ ENV.appTitle }}
        </span>
      </RouterLink>
    </Transition>
  </div>
</template>
