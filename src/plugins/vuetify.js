import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
import pt from 'vuetify/lib/locale/pt'

Vue.use(Vuetify)

const opts = {
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.purple.darken1
      }
    }
  },
  lang: {
    locales: {pt},
    current: 'pt'
  },
}

export default new Vuetify(opts)