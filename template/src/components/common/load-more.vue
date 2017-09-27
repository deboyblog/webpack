<template>
  <div style="margin-top: 10px" v-infinite-scroll="loadMore" infinite-scroll-disabled="disabled"
       infinite-scroll-distance="100">
    <empty-list :show="empty"></empty-list>
  </div>
</template>
<style scoped rel="stylesheet/less" lang="less">
  .empty-list-tips {
    text-align: center;
    width: 100%;
    position: relative;
    top: 22px;
  }
</style>
<script type="text/ecmascript-6">
  export default{
    props: {
      disabled: {
        type: Boolean,
        default () {
          return this.isBusy
        }
      },
      empty: {
        type: Boolean,
        default () {
          return false
        }
      }
    },
    methods: {
      loadMore () {
        this.$emit('on-load-more')
      }
    }
  }
</script>
