import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/components/Catalog'
import Courseplanner from '@/components/Courseplanner'
import Login from '@/components/Login'
import Signup from '@/components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/courseplanner',
      name: 'courseplanner',
      component: Courseplanner
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ],
  mode: 'history'
})
