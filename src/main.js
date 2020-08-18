import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloudDownloadAlt  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ValidationProvider } from 'vee-validate';
import Toasted from 'vue-toasted';

library.add(faCloudDownloadAlt);

Vue.use(Toasted);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('ValidationProvider', ValidationProvider);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
