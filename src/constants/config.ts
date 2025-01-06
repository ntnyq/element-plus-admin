/**
 * @file Config constants
 */

import { EnumAppLayout } from '@/enums/app'
import { EnumElSize } from '@/enums/element'

export const DEFAULT_CONFIG = Object.freeze({
  /**
   * 唯一前缀
   */
  prefix: 'oa',

  /**
   * 固定系统头部
   */
  fixedHeader: true,

  /**
   * 显示页签
   */
  showTagsView: true,

  /**
   * 显示面包屑导航
   */
  showBreadcrumb: true,

  /**
   * 主题色
   */
  themeColor: '#409EFF',

  /**
   * 启用水印
   */
  watermarkEnabled: false,

  /**
   * UI 尺寸
   */
  size: EnumElSize.DEFAULT,

  /**
   * 水印内容
   */
  watermarkContent: 'ntnyq',

  /**
   * 布局方式
   */
  layout: EnumAppLayout.LEFT,
})
