/**
 * @file vue-router
 *
 * @see {@link https://router.vuejs.org/zh/guide/advanced/meta.html#TypeScript}
 */

import 'vue-router'

export {}

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 高亮菜单项的路径
     */
    activeMenu?: string

    /**
     * 是否固定在页签
     */
    affix?: boolean

    /**
     * 始终显示父菜单
     */
    alwaysShow?: boolean

    /**
     * 依据后端数据生成
     */
    backstage?: boolean

    /**
     * 是否在面包屑导航中显示
     */
    breadcrumb?: boolean

    /**
     * 显示 Loading
     */
    frameLoading?: boolean

    /**
     * Iframe 地址
     */
    frameSrc?: string

    /**
     * 是否隐藏菜单
     */
    hidden?: boolean

    /**
     * 菜单图标
     */
    icon?: string

    /**
     * 是否忽略权限
     */
    ignoreAuth?: boolean

    /**
     * 是否缓存页面
     */
    keepAlive?: boolean

    /**
     * 页面是否已加载
     */
    loaded?: boolean

    /**
     * 角色权限
     */
    roles?: string[]

    /**
     * 保存滚动
     */
    saveScrollTop?: boolean

    /**
     * 菜单标题
     */
    title?: string
  }
}
