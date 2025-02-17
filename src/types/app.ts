/**
 * @file 应用类型
 */

import type { RouteMeta } from 'vue-router'

/**
 * 导航项类型
 */
export interface NavMenuItem {
  children?: NavMenuItem[]
  id?: number
  meta?: RouteMeta
  name?: string
  noShowingChildren?: boolean
  parentId?: number
  path?: string
  pathList?: number[]
  redirect?: string
  showTooltip?: boolean
  value?: unknown
}

/**
 * TagsView 类型
 */
export interface TagsViewItem {
  fullPath: string
  meta: RouteMeta
  name: string
  path: string
  query: Record<string, any>
  title: string
  affix?: boolean
  icon?: string
  keepAlive?: boolean
}
