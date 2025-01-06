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
     * 菜单标题
     */
    title?: string

    /**
     * 菜单图标
     */
    icon?: string

    /**
     * 是否隐藏菜单
     */
    hidden?: boolean

    /**
     * 是否固定在页签
     */
    affix?: boolean

    /**
     * 是否在面包屑导航中显示
     */
    breadcrumb?: boolean

    /**
     * 始终显示父菜单
     */
    alwaysShow?: boolean

    /**
     * 页面是否已加载
     */
    loaded?: boolean

    /**
     * 是否缓存页面
     */
    keepAlive?: boolean

    /**
     * 高亮菜单项的路径
     */
    activeMenu?: string

    /**
     * 是否忽略权限
     */
    ignoreAuth?: boolean

    /**
     * 角色权限
     */
    roles?: string[]
  }
}
