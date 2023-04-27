import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Detail from '@/pages/detail'
import NotFound from '@/pages/notFound'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
