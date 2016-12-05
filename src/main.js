// Import System requirements
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'hash'
});

import AppView from './App.vue'

new Vue({
  el: '#app',
  router: router,
  render: h => h(AppView)
});
