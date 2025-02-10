<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import { DEFAULT_CONFIG } from '@/constants/config'
import { ROUTE_NAME } from '@/constants/route'
import { useAppStore } from '@/stores/app'
import { useUserStore } from '@/stores/user'
import { useViewStore } from '@/stores/view'
import { openExternalURL } from '@/utils'
import { logger } from '@/utils/logger'

const route = useRoute()
const router = useRouter()

const appStore = useAppStore()
const userStore = useUserStore()
const viewStore = useViewStore()

const notificationCount = 23

const { isFullscreen, toggle: toggleFullscreen } = useFullscreen()

function handleShowSettings() {
  appStore.setIsSettingDrawerShow()
}
async function handleLogout() {
  try {
    await ElMessageBox.confirm('确定注销并退出系统吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
      lockScroll: false,
    })
    userStore.clearToken()
    viewStore.clearViews()
    router.push({ name: ROUTE_NAME.login, query: { redirect: route.fullPath } })
  } catch {
    logger.info('Canceled logout')
  }
}
</script>

<template>
  <div class="flex">
    <ElTooltip content="全屏切换">
      <div
        @click="toggleFullscreen"
        class="navbar-action-item"
      >
        <div
          :class="
            isFullscreen
              ? 'icon-ri:fullscreen-exit-line'
              : 'icon-ri:fullscreen-line'
          "
        />
      </div>
    </ElTooltip>

    <ElPopover
      :width="320"
      trigger="click"
      placement="bottom"
    >
      <div class="relative h-300px" />
      <template #reference>
        <div class="navbar-action-item">
          <ElBadge
            :value="notificationCount"
            :max="99"
            :is-dot="notificationCount >= 10"
          >
            <div class="icon-ri:notification-2-line" />
          </ElBadge>
        </div>
      </template>
    </ElPopover>

    <ElDropdown class="navbar-action-item outline-none! [&_div]:outline-none!">
      <div class="h-full flex-center p-10px">
        <img
          src="/images/logos/logo.png"
          alt="User avatar"
          class="block max-h-30px max-w-30px"
        />
        <span class="text-md ml-2">Admin</span>
      </div>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem
            @click="
              openExternalURL('https://github.com/ntnyq/element-plus-admin')
            "
          >
            项目地址
          </ElDropdownItem>
          <ElDropdownItem
            @click="
              openExternalURL('https://github.com/ntnyq/element-plus-admin')
            "
          >
            项目文档
          </ElDropdownItem>
          <ElDropdownItem
            @click="handleLogout"
            divided
          >
            注销登录
          </ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>

    <ElTooltip content="项目设置">
      <div
        @click="handleShowSettings"
        v-if="DEFAULT_CONFIG.showSettings"
        class="navbar-action-item"
      >
        <div class="icon-ri:settings-4-line" />
      </div>
    </ElTooltip>
  </div>
</template>

<style>
.navbar-action-item {
  --at-apply: 'inline-flex justify-center items-center min-w-45px h-$oa-navbar-height lh-$oa-navbar-height text-$el-text-color cursor-pointer hover:bg-#000/10 dark:hover:bg-#fff/20';
}
</style>
