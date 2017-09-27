// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import http from './http'
import BaseMixin from './mixins/base'
import * as ls from './utils/localstorages'
import VueInfiniteScroll from 'vue-infinite-scroll'

let FastClick = require('fastclick')
FastClick.attach(window.document.body)
require('./utils/mobileUtil')
Vue.use(VueInfiniteScroll)
// ~ 通用组件
require('./utils/components')
// ~ mixin
Vue.mixin(BaseMixin)
// ~http defined
Vue.use(http)
// 本地储存 注入vue实例中
Vue.use(ls.install)
// 设置微信标题
Vue.use(require('vue-wechat-title'))

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
