import Axios from 'axios'
{{#vuex}}
import store from '../vuex'
{{/vuex}}

function install (Vue) {
  Axios.defaults.baseURL = ''
  Axios.defaults.headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
  Axios.defaults.timeout = 60000
  // Axios.defaults.withCredentials = true
  Axios.interceptors.request.use((request) => {
    {{#vuex}}
    store.dispatch('openLoading')
    {{/vuex}}
    return request
  }, (error) => {
    console.log(error)
  })
  // Add a response interceptor
  Axios.interceptors.response.use((response) => {
    {{#vuex}}
    store.dispatch('closeLoading')
    {{/vuex}}
    return Promise.resolve(response.data)
  }, (error) => {
    // Do something with response error
    store.dispatch('closeLoading')
    return Promise.reject(error)
  })
  Vue.prototype.$http = Axios
}

export default install
