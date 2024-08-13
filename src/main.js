import Vue from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import './assets/styles.css';

// Configura o Axios para incluir o token CSRF
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.baseURL = 'http://127.0.0.1:8000/api/';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
