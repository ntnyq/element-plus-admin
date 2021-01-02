<template>
  <div class="app-navbar">
    <div class="navbar-block">
      <button
        type="button"
        role="hamburger"
        class="app-hamburger"
        @click="toggleSidebar"
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
        class="navbar-block-item"
        effect="dark"
        placement="bottom"
      >
        <app-screenfull />
      </el-tooltip>

      <el-dropdown
        placement="bottom"
        trigger="click"
        class="navbar-dropdown"
        @command="handleCommand"
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
import { useEnhancer } from '@/enhancers'
import { message } from '@/utils/element'
import {
  SIGN_OUT,
  TOGGLE_SIDEBAR,
} from '@/constants/store'

export default defineComponent({
  name: 'AppNavbar',

  setup () {
    const {
      i18n,
      router,
      store,
    } = useEnhancer()

    const username = computed(() => 'ntnyq')
    const menuIconName = computed(() => store.getters.sidebar?.isOpen
      ? 'menu-open'
      : 'menu-collapse')

    const toggleSidebar = (): void => {
      store.dispatch(TOGGLE_SIDEBAR.action)
    }

    const handleCommand = (command: string): void => {
      switch (command) {
        case 'dashboard':
          router.push('/')
          break

        case 'updatePassword':
          message.warning('正在开发')
          break

        case 'signOut':
          store.dispatch(SIGN_OUT.action)
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
