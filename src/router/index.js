import { createRouter, createWebHistory } from 'vue-router';//和vue2 路由不同
import Login from '../pages/Login.vue'
import Register from '../pages/Regisetr.vue'

const routerHistory = createWebHistory();

const routes = [
  {
    path: '/base',
    component: () => import('../pages/Base.vue'),
    children: [
      {
        name: 'login',
        path: 'login',
        component: Login
      },
      {
        name: 'register',
        path: 'register',
        component: Register
      },
    ]
  }
]
const router = createRouter({
  history: routerHistory,
  routes
})

export default router

