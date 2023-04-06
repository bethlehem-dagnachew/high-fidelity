import  axios from 'axios'
import $store from '@/store/'

export class Http {
  constructor (status = { auth: false }) {
    this.isAuth = status && status.auth ? status.auth : false
    this.instance = axios.create({
      baseURL: 'https://felda-ppp.prototype.com.my/api/'
    })  

    return this.init()
  }

  init () {
    if (this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.headers.authorization = this.getTokenBaerer()
        return request
      }, error => {
        console.log(error)
        return Promise.reject(error)
      })
    }

    return this.instance
  }

  getTokenBaerer() {    
    return $store.state.auth.token ? `Bearer ${$store.state.auth.token}` : ''
  }
}
