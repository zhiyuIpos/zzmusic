import { createRouter, createWebHashHistory } from 'vue-router'
const Recommend = () => import('@/views/recommend'/* webpackChunkName: 'recommend' */)
const Singer = () => import('@/views/singer'/* webpackChunkName: 'singer' */)
const SingerDetail = () => import('@/views/singer-detail.vue'/* webpackChunkName: 'singer-detail' */)
const TopList = () => import('@/views/top-list'/* webpackChunkName: 'toplist' */)
const TopDetail = () => import('@/views/top-detail.vue'/* webpackChunkName: 'top-detail' */)
const Search = () => import('@/views/search'/* webpackChunkName: 'search' */)
const Album = () => import('@/views/album'/* webpackChunkName: 'album' */)
const User = () => import('@/views/user-center.vue'/* webpackChunkName: 'user' */)
const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [
      {
        path: ':id',
        component: Album
      }
    ]
  },
  {
    path: '/singer',
    component: Singer,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/top-list',
    component: TopList,
    children: [
      {
        path: ':id',
        component: TopDetail
      }
    ]
  },
  {
    path: '/search',
    component: Search,
    children: [
      {
        path: ':id',
        component: SingerDetail
      }
    ]
  },
  {
    path: '/user',
    components: {
      user: User
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
