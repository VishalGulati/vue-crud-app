import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';
import store from './store';
import router from './router';
import VueNativeSock from 'vue-native-websocket';
Vue.use(VueNativeSock, 'ws://localhost:3000', { store: store, format: 'json' });

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app');
