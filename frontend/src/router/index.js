import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import RequestFeature from '../views/RequestFeature.vue'
import OngoingVoting from '../views/OngoingVoting.vue'
import RequestWork from '../views/RequestWork.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/request-feature',
    name: 'RequestFeature',
    component: RequestFeature
  },
  {
    path: '/ongoing-voting',
    name: 'OngoingVoting',
    component: OngoingVoting
  },
  {
    path: '/admin/request-work',
    name: 'RequestWork',
    component: RequestWork
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
