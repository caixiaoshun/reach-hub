import { createI18n } from 'vue-i18n'
import zh from './zh.json'
import bo from './bo.json'

const messages = {
  zh,
  bo
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages
})

export default i18n
