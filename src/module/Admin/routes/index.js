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
        path: '/lawatan',
        name: 'Lawatan',
        component: Lawatan
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
]
export {AdminRoutes}