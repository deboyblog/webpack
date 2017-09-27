/**
 * Created by Deboy on 2016/4/12.
 * 这里定义全局的组件
 */
import Vue from 'vue'
import {
  XButton, XInput, Flexbox, FlexboxItem, LoadingPlugin,
  ToastPlugin, AlertPlugin
} from 'vux'
//
import Topbar from '../components/common/topbar.vue'
import XTabbar from '../components/common/x-tabbar.vue'
import EmptyList from '../components/common/empty-list.vue'
import LoadMore from '../components/common/load-more.vue'

Vue.component('XButton', XButton)
Vue.component('XInput', XInput)
Vue.component('Flexbox', Flexbox)
Vue.component('FlexboxItem', FlexboxItem)

Vue.component('Topbar', Topbar)
Vue.component('XTabbar', XTabbar)
Vue.component('EmptyList', EmptyList)
Vue.component('LoadMore', LoadMore)
// plugins
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
// Vue.use(WechatPlugin)
