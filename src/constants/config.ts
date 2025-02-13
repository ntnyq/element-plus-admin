/**
 * @file Config constants
 */

import { EnumAppLayout } from '@/enums/app'
import { EnumElSize } from '@/enums/element'

export const DEFAULT_CONFIG = Object.freeze({
  /**
   * 固定系统头部
   */
  fixedHeader: true,

  /**
   * 布局方式
   */
  layout: EnumAppLayout.LEFT,

  /**
   * 唯一前缀
   */
  prefix: 'oa',

  /**
   * 显示面包屑导航
   */
  showBreadcrumb: true,

  /**
   * 显示页面重载
   */
  showRefresh: true,

  /**
   * 是否显示设置抽屉
   */
  showSettings: true,

  /**
   * 显示页签
   */
  showTagsView: true,

  /**
   * UI 尺寸
   */
  size: EnumElSize.DEFAULT,

  /**
   * 主题色
   */
  themeColor: '#409EFF',

  /**
   * 水印内容
   */
  watermarkContent: 'ntnyq',

  /**
   * 启用水印
   */
  watermarkEnabled: false,
})
