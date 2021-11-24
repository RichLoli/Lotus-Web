import { createRouter, createWebHashHistory } from 'vue-router'
import Progress from '@/plugins/nprogress'
import Cookies from 'js-cookie'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/error/404'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  Progress.start()

  if (to.path == '/login') {
    next()
  } else {
    let token = Cookies.get('token')
    if (undefined == token || null == token || '' === token) {
      console.log('用户未登录')
      next('/login')
    } else {
      next()
    }
  }
})

router.afterEach(() => {
  Progress.done()
})

export default router
