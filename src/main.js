import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTheMask from 'vue-the-mask'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudDownloadAlt, faEnvelope, faLock, faUser, faPhone, faArrowLeft  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ValidationProvider } from 'vee-validate';
import vuetify from './plugins/vuetify';
import './validates/vee-validate';


library.add(faCloudDownloadAlt, faEnvelope, faLock, faUser, faPhone, faArrowLeft );


Vue.use(VueTheMask);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify
}).$mount('#app');
