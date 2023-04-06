import Datebulan from '../pages/komunit/bulan/Datebulan'
import BulanaHasil from '../pages/komunit/bulan/BulanaHasil'
import LaporanHarian from '../pages/komunit/laporan/LaporanHarian'
import LaporanCashflow from '../pages/komunit/laporan/LaporanCashflow'
import LaporanStok from '../pages/komunit/laporan/LaporanStok'
import LaporanBulanan from '../pages/komunit/laporan/LaporanBulanan'
import KomunitiMaklumat from '../pages/komunit/KomunitiMaklumat'
import Laporan from '../pages/komunit/Laporan'
import Status from '../pages/komunit/Status'
const UserRoutes = [
    {
        path: '/komunitiMaklumat',
        name: 'KomunitiMaklumat',
        component: KomunitiMaklumat,
        meta: { requiresAuth: true }
      },
      {
        path: '/laporanHarian',
        name: 'LaporanHarian',
        component: LaporanHarian,
        meta: { requiresAuth: true }
      },
      {
        path: '/laporanCashflow',
        name: 'LaporanCashflow',
        component: LaporanCashflow,
        meta: { requiresAuth: true }
      },
      {
        path: '/laporanStok',
        name: 'LaporanStok',
        component: LaporanStok,
        meta: { requiresAuth: true }
      },
      {
        path: '/laporanBulanan',
        name: 'LaporanBulanan',
        component: LaporanBulanan,
        meta: { requiresAuth: true }
      },
      {
        path: '/laporan',
        name: 'Laporan',
        component: Laporan,
        meta: { requiresAuth: true }
      },
      {
        path: '/datebulan',
        name: 'Datebulan',
        component: Datebulan,
        meta: { requiresAuth: true }
      },
      {
        path: '/bulanaHasil',
        name: 'BulanaHasil',
        component: BulanaHasil,
        meta: { requiresAuth: true }
      },
      {
        path: '/status',
        name: 'Status',
        component: Status,
        meta: { requiresAuth: true }
      },
]
export { UserRoutes }