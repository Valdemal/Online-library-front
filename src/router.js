import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
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
    component: () => import('@/views/Author-Detail')
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
