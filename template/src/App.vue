<template>
  <div>
    <topbar v-show="$route.meta.showTopbar" :show-back="$route.meta.showBack" :transparent="$route.meta.transparent" :title="$route.meta.title"></topbar>
    <keep-alive>
      <router-view id="container" :style="fullScreen"></router-view>
    </keep-alive>
    <x-tabbar v-if="$route.meta.showTabbar"></x-tabbar>
  </div>
</template>
<style lang='less'>
  @import '~vux/src/styles/reset.less';
  @import '~vux/src/styles/1px.less';

  #container {
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
  }

  .animated {
    box-shadow: none !important;
  }
</style>
<script type="text/ecmascript-6">
  export default {
    components: {},
    data () {
      return {
        fullScreen: {
          'min-height': '100%'
        }
      }
    },
    computed: {
    },
    watch: {
      '$store.getters.isBusy' (val) {
        val ? this.$vux.loading.show({text: this.$store.getters.loadingText}) : this.$vux.loading.hide()
      }
    },
    methods: {},
    mounted () {
      this.$nextTick(() => {
        let nowVersion = 1.0
        if (!window.localStorage.getItem('cacheVersion') || (parseFloat(window.localStorage.getItem('cacheVersion')) < nowVersion)) {
          window.localStorage.clear()
          window.localStorage.setItem('cacheVersion', nowVersion)
          window.location.reload()
        }
      })
    }
  }
</script>
