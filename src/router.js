import { createRouter, createWebHistory } from 'vue-router'

// eslint-disable-next-line
const isAuthorized = localStorage.hasOwnProperty('token')

const isAuthorizedGuard = function (to, from, next) {
  if (!isAuthorized) next({name: 'login'})
  else next()
}

const isNotAuthorizedGuard = function (to, from, next) {
  if (isAuthorized) next({name: 'main'})
  else next()
}

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main/Layout'),
    children: [
      {
        path: '',
        name: 'main',
        component: () => import('@/views/Main/Main-View')
      },
      {
        path: '/books',
        name: 'books',
        component: () => import('@/views/Main/Books')
      }, {
        path: '/authors',
        name: 'authors',
        component: () => import('@/views/Main/Authors')
      }, {
        path: '/authors/:id/',
        name: 'author-detail',
        props: true,
        component: () => import('@/views/Main/Authors-Detail')
      }, {
        path: '/books/:id/',
        name: 'books-detail',
        props: true,
        component: () => import('@/views/Main/Books-Detail')
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Main/Login-View'),
        beforeEnter: isNotAuthorizedGuard,
      }, {
        path: '/registration',
        name: 'registration',
        component: () => import('@/views/Main/Registration-View'),
        beforeEnter: isNotAuthorizedGuard,
      },
    ]
  },{
    path: '/user',
    component: () => import('@/views/User/Layout'),
    beforeEnter: isAuthorizedGuard,
    children: [
      {
        path: '',
        name: 'me',
        component: () => import('@/views/User/Main-View')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
