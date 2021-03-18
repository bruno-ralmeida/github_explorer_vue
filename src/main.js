import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.prototype.$http = axios;
Vue.use(VueRouter);
const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
