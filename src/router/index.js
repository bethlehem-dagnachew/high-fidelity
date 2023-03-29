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
import Datebulan from '../views/komunit/bulan/Datebulan'
import BulanaHasil from '../views/komunit/bulan/BulanaHasil'
import Notifikasi from '../views/admin/notfication/Notifikasi'
import Tugasan from '../views/admin/notfication/Tugasan'
import Carian from '../views/admin/carian/Carian'
import CarianDetail from '../views/admin/carian/CarianDetail'
import StatusProjek from '../views/admin/StatusProjek'
import Lawatan from '../views/admin/lawatan/Lawatan'
import QRresultDetail from '../views/admin/carian/QRresultDetail'
import QRcodeResult from '../views/admin/carian/QRcodeResult'
import QRcode from '../views/admin/carian/QRcode'
const routes = [
  {
    path: '/home',
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
    path: '/',
    name: 'HomeAdmin',
    component: HomeAdmin
  },
  {
    path: '/datebulan',
    name: 'Datebulan',
    component: Datebulan
  },
  {
    path: '/bulanaHasil',
    name: 'BulanaHasil',
    component: BulanaHasil
  },
  {
    path: '/notifikasi',
    name: 'Notifikasi',
    component: Notifikasi
  },
  {
    path: '/tugasan',
    name: 'Tugasan',
    component: Tugasan
  },
  {
    path: '/carian',
    name: 'Carian',
    component: Carian
  },
  {
    path: '/carianDetail',
    name: 'CarianDetail',
    component: CarianDetail
  },
  {
    path: '/statusProjek',
    name: 'StatusProjek',
    component: StatusProjek
  },
  {
    path: '/lawatan',
    name: 'Lawatan',
    component: Lawatan
  },

  {
    path: '/QRcode',
    name: 'QRcode',
    component: QRcode
  },
  {
    path: '/QRcodeResult',
    name: 'QRcodeResult',
    component: QRcodeResult
  },
  {
    path: '/QRresultDetail',
    name: 'QRresultDetail',
    component: QRresultDetail
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
