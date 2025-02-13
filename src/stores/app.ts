/**
 * @file App store
 */

import { DEFAULT_CONFIG } from '@/constants/config'
import { EnumAppDevice } from '@/enums/app'
import pinia from '@/stores'
import { withPrefix } from '@/utils'
import type { EnumAppLayout } from '@/enums/app'
import type { EnumElSize } from '@/enums/element'

export const useAppStore = defineStore('app', () => {
  /**
   * UI尺寸
   */
  const size = useStorage<EnumElSize>(withPrefix('size'), DEFAULT_CONFIG.size)

  /**
   * 设备
   */
  const device = useStorage<EnumAppDevice>(
    withPrefix('device'),
    EnumAppDevice.DESKTOP,
  )
  const isMobile = computed(() => device.value === EnumAppDevice.MOBILE)
  const isDesktop = computed(() => device.value === EnumAppDevice.DESKTOP)
  const isTablet = computed(() => device.value === EnumAppDevice.TABLET)
  function setDevice(newDevice: EnumAppDevice) {
    device.value = newDevice
  }

  /**
   * 布局风格
   */
  const layout = useStorage<EnumAppLayout>(
    withPrefix('layout'),
    DEFAULT_CONFIG.layout,
  )

  /**
   * 主题色
   */
  const themeColor = useStorage(
    withPrefix('themeColor'),
    DEFAULT_CONFIG.themeColor,
  )

  /**
   * 固定页头
   */
  const fixedHeader = useStorage(
    withPrefix('fixedHeader'),
    DEFAULT_CONFIG.fixedHeader,
  )

  /**
   * 显示页签
   */
  const showTagsView = useStorage(
    withPrefix('showTagsView'),
    DEFAULT_CONFIG.showTagsView,
  )

  /**
   * 显示面包屑导航
   */
  const showBreadcrumb = useStorage(
    withPrefix('showBreadcrumb'),
    DEFAULT_CONFIG.showBreadcrumb,
  )

  /**
   * 显示刷新按钮
   */
  const showRefresh = useStorage(
    withPrefix('showRefresh'),
    DEFAULT_CONFIG.showRefresh,
  )

  /**
   * 显示设置抽屉
   */
  const showSettingDrawer = useStorage(withPrefix('showSettingDrawer'), false)
  function setIsSettingDrawerShow(isShow = !showSettingDrawer.value) {
    showSettingDrawer.value = isShow
  }

  /**
   * 设置侧边栏打开状态
   */
  const isSidebarOpened = useStorage(withPrefix('isSidebarOpened'), false)
  function setIsSidebarOpened(isOpened = !isSidebarOpened.value) {
    isSidebarOpened.value = isOpened
  }

  /**
   * 水印是否开启
   */
  const watermarkEnabled = useStorage(
    withPrefix('watermarkEnabled'),
    DEFAULT_CONFIG.watermarkEnabled,
  )

  return {
    size,
    device,
    isMobile,
    isDesktop,
    isTablet,
    setDevice,

    layout,

    themeColor,

    fixedHeader,
    showRefresh,
    showTagsView,
    showBreadcrumb,
    showSettingDrawer,
    setIsSettingDrawerShow,

    isSidebarOpened,
    setIsSidebarOpened,

    watermarkEnabled,
  }
})

export const useAppStoreWithOut = () => useAppStore(pinia)
