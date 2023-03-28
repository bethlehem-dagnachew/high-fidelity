import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login'
import KomunitiMaklumat from '../views/komunit/KomunitiMaklumat'
import Laporan from '../views/komunit/Laporan'
import Status from '../views/komunit/Status'
import Test from '../views/Test'
import LaporanHarian from '../views/komunit/laporan/LaporanHarian'
import LaporanCashflow from '../views/komunit/laporan/LaporanCashflow'
import LaporanStok from '../views/komunit/laporan/LaporanStok'
import LaporanBulanan from '../views/komunit/laporan/LaporanBulanan'
import HomeAdmin from '../views/admin/Home'
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
    path: '/komunitiMaklumat',
    name: 'KomunitiMaklumat',
    component: KomunitiMaklumat
  },
  {
    path: '/laporan',
    name: 'Laporan',
    component: Laporan
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/laporanHarian',
    name: 'LaporanHarian',
    component: LaporanHarian
  },
  {
    path: '/laporanCashflow',
    name: 'LaporanCashflow',
    component: LaporanCashflow
  },
  {
    path: '/laporanStok',
    name: 'LaporanStok',
    component: LaporanStok
  },
  {
    path: '/laporanBulanan',
    name: 'LaporanBulanan',
    component: LaporanBulanan
  },
  {
    path: '/homeAdmin',
    name: 'HomeAdmin',
    component: HomeAdmin
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
