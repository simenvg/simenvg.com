import Vue from 'vue'
import Router from 'vue-router'
import MainElement from './pages/MainElement.vue'
import Sykkel from './pages/Sykkel.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainElement
    },
    {
      path: '/sykkel',
      name: 'sykkel',
      component: Sykkel
    },
  ]
})
