import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login'
import Test from '../views/Test'
import HomeAdmin from '../views/admin/Home'
import StatusProjek from '../views/admin/StatusProjek'
import { AdminRoutes } from '../module/Admin/routes'
import { UserRoutes } from '../module/User/routes'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/homeAdmin',
    name: 'HomeAdmin',
    component: HomeAdmin
  },
  {
    path: '/statusProjek',
    name: 'StatusProjek',
    component: StatusProjek
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  ...AdminRoutes,
  ...UserRoutes
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
