<template>
  <div class="app-navbar">
    <div class="navbar-block">
      <button
        @click="appStore.toggleSidebar"
        type="button"
        role="hamburger"
        class="app-hamburger"
      >
        <IconMdiMenuOpen v-if="appStore.sidebar.isOpen" />
        <IconMdiMenu v-else />
      </button>
      <RouterLink
        to="/"
        class="navbar-brand"
      >
        Element Plus Admin
      </RouterLink>
    </div>
    <div class="navbar-block">
      <ElTooltip
        :content="i18n.t(`action.toggleFullscreen`)"
        effect="dark"
        placement="bottom"
      >
        <AppScreenfull class="navbar-block-item" />
      </ElTooltip>

      <ElDropdown
        @command="handleCommand"
        placement="bottom"
        trigger="click"
        class="navbar-dropdown"
      >
        <div class="navbar-dropdown-trigger">
          <ElBadge
            :max="99"
            class="user-message-badge"
          >
            <img
              src="~@/assets/images/avatar.png"
              class="user-avatar"
              alt="User Avatar"
            >
            <span class="user-name">
              Hi, {{ userStore.username }}
            </span>
            <i class="el-icon-caret-bottom" />
          </ElBadge>
        </div>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem command="dashboard">
              首页
            </ElDropdownItem>
            <ElDropdownItem command="updatePassword">
              更新密码
            </ElDropdownItem>
            <ElDropdownItem command="signOut">
              退出
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { useEnhancer } from '@/enhancers'
import { message } from '@/utils/element'

const { i18n, router } = useEnhancer()
const appStore = useAppStore()
const userStore = useUserStore()

const handleCommand = (command: string) => {
  switch (command) {
    case `dashboard`:
      router.push(`/`)
      break

    case `updatePassword`:
      message.warning(i18n.t(`message.workInProgress`))
      break

    case `signOut`:
      userStore.signOut()
      router.push({ name: `SignIn` })
      break

    default:
      break
  }
}
</script>
