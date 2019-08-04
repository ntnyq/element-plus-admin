import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'

Vue.use(VueI18n)

let localeKeys = []

function loadLocaleMessages () {
  const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.js$/i)
  const messages = {}

  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)

    if (matched && matched.length > 1) {
      const locale = matched[1]

      messages[locale] = locales(key).default || locales(key)
      localeKeys.push(locale)
    }
  })
  return messages
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || process.env.VUE_APP_I18N_LOCALE || 'zh',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh',
  messages: loadLocaleMessages()
})

export {
  i18n as default,
  localeKeys
}
