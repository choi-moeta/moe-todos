import { createRouter, createWebHistory } from 'vue-router'
import routes from 'virtual:generated-pages'
import { isLoggedIn } from './api'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  if (to.meta.onlyGuest && isLoggedIn())
    return from || '/'
  if (to.meta.onlyUser && !isLoggedIn())
    return '/auth'
})
