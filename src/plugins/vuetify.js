import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

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
}

export default new Vuetify(opts)