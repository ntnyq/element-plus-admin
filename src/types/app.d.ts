/**
 * TagsView 类型
 */
export interface TagView {
  fullPath: string
  name: string
  path: string
  query: Record<string, any>
  title: string
  affix?: boolean
  icon?: string
  keepAlive?: boolean
}
