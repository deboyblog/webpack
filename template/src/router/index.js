import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      meta: {
        title: '首页',
        showTopbar: false
      },
      component: (resolve) => {
        require(['../views/Home.vue'], resolve)
      }
    }
  ]
})
