import { createRouter, createWebHashHistory } from 'vue-router'
import store from "../store";
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
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { guest: true },
  },
  {
    path: '/homeAdmin',
    name: 'HomeAdmin',
    component: HomeAdmin,
    meta: { requiresAuth: true }
  },
  {
    path: '/statusProjek',
    name: 'StatusProjek',
    component: StatusProjek,
    meta: { requiresAuth: true }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters["auth/isAuthenticated"]) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/");
      return;
    }
    next();
  } else {
    next();
  }
});

export default router
