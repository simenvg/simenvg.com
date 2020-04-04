import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Sykkel from './pages/Sykkel.vue'
import Board from './components/sudoku/Board.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sykkel',
      name: 'sykkel',
      component: Sykkel
    },
    {
      path: '/sudoku',
      name: 'Board',
      component: Board
    },
  ]
})
