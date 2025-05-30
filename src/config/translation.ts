import { createI18n } from 'vue-i18n'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'

const messages = { fr, en }
const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages,
  globalInjection: true,
  legacy: false,
})

export default i18n
