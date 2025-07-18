import AuthView from '@/views/AuthView.vue'
import GreatingView from '@/views/GreatingView.vue'
import HomePageView from '@/views/HomePageView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: GreatingView,
  },
  {
    path: '/map',
    component: HomePageView,
  },
  {
    path: '/auth',
    component: AuthView,
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
