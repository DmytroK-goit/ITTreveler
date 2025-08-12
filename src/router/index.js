import { createRouter, createWebHistory } from 'vue-router'

const HomepageView = () => import('@/views/HomepageView.vue')
const GreetingView = () => import('@/views/GreatingView.vue')
const AuthView = () => import('@/views/AuthView.vue')
const LoginPage = () => import('@/views/Login.vue')
const RegistrationPage = () => import('@/views/RegistrationView.vue')
import { authService } from '../api/authService/index'

const routes = [
  {
    path: '/',
    component: GreetingView,
    name: 'greeting',
  },
  {
    path: '/map',
    component: HomepageView,
    name: 'homepage',
  },
  {
    path: '/auth',
    component: AuthView,
    redirect: '/auth/login',
    children: [
      {
        path: 'login',
        component: LoginPage,
        name: 'login',
      },
      {
        path: 'registration',
        component: RegistrationPage,
        name: 'registration',
      },
    ],
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (to, from, next) => {
  const authRoutes = ['login', 'registration']
  const { name } = to
  if (authService.isLoggedIn() && authRoutes.includes(name)) {
    next({ name: 'homepage' })
  } else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
    next({ name: 'login' })
  } else {
    next()
  }
})
