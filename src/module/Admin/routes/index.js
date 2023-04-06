// import Test from '../pages/Test'
import Carian from '../pages/carian/carian'
import CarianDetail from '../pages/carian/CarianDetail'
import QRresultDetail from '../pages/carian/QRresultDetail'
import QRcodeResult from '../pages/carian/QRcodeResult'
import QRcode from '../pages/carian/QRcode'
import Notifikasi from '../pages/notfication/Notifikasi'
import Tugasan from '../pages/notfication/Tugasan'
import Lawatan from '../pages/lawatan/Lawatan'
const AdminRoutes =[
    // {
    //     path: '/test',
    //     name: 'Test',
    //     component: Test,
    //   },
    {
        path: '/QRcode',
        name: 'QRcode',
        component: QRcode,
        meta: { requiresAuth: true }
      },
      {
        path: '/QRcodeResult',
        name: 'QRcodeResult',
        component: QRcodeResult,
        meta: { requiresAuth: true }
      },
      {
        path: '/QRresultDetail',
        name: 'QRresultDetail',
        component: QRresultDetail,
        meta: { requiresAuth: true }
      },
      {
        path: '/carian',
        name: 'Carian',
        component: Carian,
        meta: { requiresAuth: true }
      },
      {
        path: '/carianDetail',
        name: 'CarianDetail',
        component: CarianDetail,
        meta: { requiresAuth: true }
      },
      {
        path: '/lawatan',
        name: 'Lawatan',
        component: Lawatan,
        meta: { requiresAuth: true }
      },
      {
        path: '/notifikasi',
        name: 'Notifikasi',
        component: Notifikasi,
        meta: { requiresAuth: true }
      },
      {
        path: '/tugasan',
        name: 'Tugasan',
        component: Tugasan,
        meta: { requiresAuth: true }
      },
]
export {AdminRoutes}