import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap';
import * as VueGoogleMaps from 'vue2-google-maps'
import { firestorePlugin } from 'vuefire'
import Toasted from 'vue-toasted';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faAddressCard} from '@fortawesome/free-solid-svg-icons';
import { faWallet} from '@fortawesome/free-solid-svg-icons';
import { faHistory} from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import {faCcApplePay} from '@fortawesome/free-brands-svg-icons';
import { faUser} from '@fortawesome/free-solid-svg-icons';

library.add(faAddressCard, faWallet, faHistory, faSignInAlt, faSignOutAlt,faCcApplePay,faUser);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(BootstrapVue)
Vue.use(Toasted, Option)

Vue.use(firestorePlugin)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCeTVzZzpVTfEyoBXNehmsnEQ-RFQ0rmhU',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
