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
        component: KomunitiMaklumat
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
        path: '/laporan',
        name: 'Laporan',
        component: Laporan
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
        path: '/status',
        name: 'Status',
        component: Status
      },
]
export { UserRoutes }