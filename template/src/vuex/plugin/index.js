/**
 * Created by Deboy on 2017/4/17.
 */
import { keys, save } from '../../utils/localstorages'
import * as types from '../../store/mutations-types'

const debounce = require('debounce')
// 频繁存取会导致性能问题 如果遇到性能问题 可以用防抖节流
const updateUser = function (state) {
  save({key: keys.user, value: state.user})
}
export default store => {
  store.subscribe((mutation, state) => {
    switch (mutation.type) {
      case types.SET_USER_INFO:
        updateUser(state)
        break
      case types.LOGOUT:
        updateUser(state)
        break
    }
  })
}
