import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import iviewZhCnLocale from 'iview/src/locale/lang/zh-CN.js'
import iviewEnUsLocale from 'iview/src/locale/lang/en-US.js'
import iviewJaJpLocale from 'iview/src/locale/lang/ja-JP.js'
import zhLocale from './zh-Cn.js'
import enLocale from './en-US.js'
import jaLocale from './ja-JP.js'

Vue.use(VueI18n)

const messages = {
  en: {
    ...enLocale,
    ...iviewEnUsLocale
  },
  zh: {
    ...zhLocale,
    ...iviewZhCnLocale
  },
  ja: {
    ...jaLocale,
    ...iviewJaJpLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh',
  messages
})

export default i18n