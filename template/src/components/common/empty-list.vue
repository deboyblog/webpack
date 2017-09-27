<template>
  <div>
    <section class="empty-wrapper" v-show="show">
      <div class="empty-list" slot>
        <i class="iconfont icon-empty"></i>
        <p class="tips">哦哦！ 列表是空哒~</p>
      </div>
    </section>
  </div>
</template>
<style lang="less" scoped rel="stylesheet/less">
  .empty-wrapper{
    display: block;
    height: 200px;
    .empty-list{
      text-align: center;
      padding-top: 50px;
      .iconfont{
        font-size: 60px;
        line-height: 80px;
        color: #999;
      }
      .tips{
        color: #999;
        font-size: 11px;
        line-height: 20px;
        text-align: center;
      }
    }
  }

</style>
<script type="text/ecmascript-6">
  export default {
    props: {
      type: {
        type: String,
        require: true,
        default: ''
      },
      show: {
        type: Boolean,
        require: true,
        default () {
          true
        }
      }
    }
  }
</script>
