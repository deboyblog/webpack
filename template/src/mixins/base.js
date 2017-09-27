/**
 * Created by Deboy on 2016/4/12.
 * mixin定义
 */
let base = {
  computed: {
    isBusy: {
      cache: false,
      get () {
        return this.$store.getters.isBusy
      }
    }
  },
  methods: {
    goToPay (orderId, from = 'settle', payNow = 1) {
      window.location.href = `/?/#/Pay?id=${orderId}&from=${from}&payNow=${payNow}&random=${Math.random(1)}`
    }
  }
}
export default base
