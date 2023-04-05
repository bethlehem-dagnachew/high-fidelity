import { Http } from './http'

export default {
  request(status = { auth: false }) {
    return new Http(status)
  }
}
