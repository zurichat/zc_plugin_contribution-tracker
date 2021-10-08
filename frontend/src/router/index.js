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
    path: '/request-work',
    name: 'RequestWork',
    component: RequestWork
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
