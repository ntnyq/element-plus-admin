<template>
  <div class="app-navbar">
    <div class="navbar-block">
      <button
        @click="toggleSidebar"
        type="button"
        role="hamburger"
        class="app-hamburger"
      >
        <svg-icon :name="menuIconName" />
      </button>
      <router-link
        to="/"
        class="navbar-brand"
      >
        Element Plus Admin
      </router-link>
    </div>
    <div class="navbar-block">
      <el-tooltip
        :content="i18n.t(`action.toggleFullscreen`)"
        effect="dark"
        placement="bottom"
      >
        <app-screenfull class="navbar-block-item" />
      </el-tooltip>

      <el-dropdown
        @command="handleCommand"
        placement="bottom"
        trigger="click"
        class="navbar-dropdown"
      >
        <div class="navbar-dropdown-trigger">
          <el-badge
            :max="99"
            class="user-message-badge"
          >
            <img
              src="~@/assets/images/avatar.png"
              class="user-avatar"
              alt="User Avatar"
            >
            <span class="user-name">
              Hi, {{ username }}
            </span>
            <i class="el-icon-caret-bottom" />
          </el-badge>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="dashboard">
              首页
            </el-dropdown-item>
            <el-dropdown-item command="updatePassword">
              更新密码
            </el-dropdown-item>
            <el-dropdown-item command="signOut">
              退出
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { useEnhancer } from '@/enhancers'
import { message } from '@/utils/element'

export default defineComponent({
  name: 'AppNavbar',

  setup () {
    const { i18n, router } = useEnhancer()
    const app = useAppStore()
    const user = useUserStore()

    const username = computed(() => 'ntnyq')
    const menuIconName = computed(() => app.sidebar?.isOpen ? 'left' : 'hamburger')

    const toggleSidebar = (): void => {
      app.toggleSidebar()
    }

    const handleCommand = async (command: string): Promise<void> => {
      switch (command) {
        case 'dashboard':
          router.push('/')
          break

        case 'updatePassword':
          message.warning(i18n.t(`message.workInProgress`))
          break

        case 'signOut':
          user.signOut()
          router.push({ name: 'SignIn' })
          break

        default:
          break
      }
    }

    return {
      i18n,
      username,
      menuIconName,
      toggleSidebar,
      handleCommand,
    }
  },
})
</script>
