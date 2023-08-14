/**
 * @file App i18n
 * @module i18n/index
 * @author ntnyq <https://github.com/ntnyq>
 */

import { createI18n } from 'vue-i18n'
import elementZhMessage from 'element-plus/es/locale/lang/zh-cn'
import nativeZhMessage from './lang/zh'

const messages = {
  zh: {
    ...nativeZhMessage,
    ...elementZhMessage,
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages,
})

export default i18n
