import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  legacy: false,
  locale: 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {},
  missingWarn: true,
  silentFallbackWarn: false,
  silentTranslationWarn: false,
})

export default i18n
