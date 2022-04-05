import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../modules/home/views/Home.vue'),
    meta: {
      layout: 'content',
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../modules/auth/views/Login.vue'),
    meta: {
      layout: 'auth',
      requireAuth: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../modules/auth/views/Register.vue'),
    meta: {
      layout: 'auth',
      requireAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta?.requireAuth)) {
    if (!store?.state?.authModule?.access_token) {
      next({ name: 'Login' })
    } else  {
      next()
    }
  } else {
    next()
  }
})

export default router
