/**
 * Created by Deboy on 2016/10/12.
 */
import Axios from 'axios'
import * as types from '../mutations-types'
import { keys, get } from '../../utils/localstorages'
const state = get({key: keys.user, defaultVal: {}})
const getters = {
  user (state) {
    return state.user
  },
  loginToken (state) {
    return state.user && state.user.token
  }
}
const mutations = {
  [types.SET_USER_INFO] (state, val) {
    state.user = val
  },
  [types.LOGOUT] (state) {
    state.user = null
  }
}
const actions = {
  getUserInfo: (context, playload) => {
    if (context.getters.user && !playload.forceRefresh) {
      playload && playload.succeed(context.getters.user)
    } else {
      // TODO 获取当前登陆用户信息
      Axios.post('user/getUser').then(res => {
        context.commit(types.SET_USER_INFO, res.data)
        playload && playload.succeed(context.getters.user)
      }).catch((err) => {
        playload && playload.fail(err)
      })
    }
  },
  setUser: ({commit}, ...args) => commit(types.SET_USER_INFO, ...args),
  logout: ({commit}, ...args) => commit(types.LOGOUT, ...args)
}
export default {
  state,
  getters,
  mutations,
  actions
}
