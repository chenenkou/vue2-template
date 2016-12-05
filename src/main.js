// Import System requirements
import Vue from 'vue'
import VueRouter from 'vue-router'

import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

import AppView from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(AppView)
})
