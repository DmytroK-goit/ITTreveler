import { createRouter, createWebHistory } from 'vue-router'

const GreetingView = () => import('@/views/GreatingView.vue')
const HomePageView = () => import('@/views/HomePageView.vue')
const AuthView = () => import('@/views/AuthView.vue')
const LoginPage = () => import('@/views/Login.vue')
const RegistrationPage = () => import('@/views/RegistrationView.vue')

const routes = [
  {
    path: '/',
    component: GreetingView,
  },
  {
    path: '/map',
    component: HomePageView,
  },
  {
    path: '/auth',
    component: AuthView,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        component: LoginPage,
      },
      {
        path: 'registration',
        component: RegistrationPage,
      },
    ],
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})
