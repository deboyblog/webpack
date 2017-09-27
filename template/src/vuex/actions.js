import Vue from 'vue'
export default {
  showToast (contaxt, playload) {
    if (typeof playload === 'string') {
      Vue.$vux.toast.show({
        type: 'text',
        text: playload,
        time: 1500
      })
    } else {
      playload.text = playload.text || playload.msg
      Vue.$vux.toast.show(Object.assign({
        type: 'text',
        text: '默认消息',
        time: 1000,
        isShowMask: false
      }, playload))
    }
  }
}
