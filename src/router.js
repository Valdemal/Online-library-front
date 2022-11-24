import { createRouter, createWebHistory } from 'vue-router'

const isAuthorized = localStorage.hasOwnProperty('token')

// const isAuthorizedGuard = function (to, from, next) {
//   if (!isAuthorized) next({name: 'login'})
//   else next()
// }

const isNotAuthorizedGuard = function (to, from, next) {
  if (isAuthorized) next({name: 'main'})
  else next()
}

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/Main-View')
  }, {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login-View'),
    beforeEnter: isNotAuthorizedGuard,
  }, {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/Registration-View')
  },{
    path: '/books',
    name: 'books',
    component: () => import('@/views/Books')
  }, {
    path: '/authors',
    name: 'authors',
    component: () => import('@/views/Authors')
  }, {
    path: '/authors/:id/',
    name: 'author-detail',
    props: true,
    component: () => import('@/views/Authors-Detail')
  }, {
    path: '/books/:id/',
    name: 'books-detail',
    props: true,
    component: () => import('@/views/Books-Detail')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
