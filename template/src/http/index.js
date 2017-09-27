/**
 * Created by Deboy on 2016/8/17.
 */
/**
 * 全局HTTP拦截
 * @param request
 * @param next
 */
import Axios from 'axios'
import store from '../vuex/index'
import Qs from 'qs'

const install = (Vue) => {
  Axios.defaults.baseURL = (process.env.NODE_ENV !== 'production' ? '/api' : '') + '/client'
  Axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  Axios.defaults.timeout = 10000
  Axios.interceptors.request.use((request) => {
    // if (request.url.toUpperCase().indexOf('FILE') < 0) {
    // }
    store.dispatch('openLoading', 'loading...')
    if (!request.data) {
      request.data = {}
    }
    if (request.data && request.data.isJson) {
      request.headers['Content-Type'] = 'application/json'
      delete request.data.isJson
    } else {
      if (request.url.toUpperCase().indexOf('FILE') < 0) {
        request.data = Qs.stringify(request.data)
      }
    }
    if (store.getters.loginToken) {
      request.headers['token'] = store.getters.loginToken
    }
    return request
  }, (error) => {
    console.log(error)
  })
  // Add a response interceptor
  Axios.interceptors.response.use((response) => {
    // Do something with response data
    store.dispatch('closeLoading')
    switch (response.data.code) {
      case 444:
        store.dispatch('showToast', '请先登录')
        store.dispatch('logout')
        window.sessionStorage.setItem('redirectRoute', window.location.href)
        // TODO 登陆处理
        return Promise.reject(response.data)
      case 200:
        return Promise.resolve(response.data)
      default:
        store.dispatch('showToast', {type: 'text', text: response.data.msg, time: 3000, width: '18em'})
        return Promise.reject(response.data)
    }
  }, (error) => {
    // Do something with response error
    store.dispatch('closeLoading')
    if (JSON.stringify(error).indexOf('404') > 0) {
      store.dispatch('showToast', {text: '系统出错啦', time: 3000})
    } else {
      store.dispatch('showToast', {text: '网络出了点问题', time: 1500})
    }
    return Promise.reject(error)
  })
  Vue.prototype.$http = Axios
}
export default install
