import Vue from 'vue'
import App from './App.vue'
import './index.css'
import {router} from "@/router";
import  {store} from "@/store/index.store";
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate'

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router,
  store: store,
}).$mount('#app')
