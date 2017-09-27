<template>
  <div id="tabbar">
    <div class="tabbar vux-1px-t">
      <router-link tag="div" :to="{name: 'Home'}" class="tab-item">
        <i class="iconfont icon-chi"></i>
        <p class="label">外卖</p>
      </router-link>
      <router-link tag="div" :to="{name: 'Order'}" class="tab-item">
        <i class="iconfont icon-dingdan"></i>
        <p class="label">订单</p>
      </router-link>
      <router-link tag="div" :to="{name: 'UCenter'}" class="tab-item">
        <i class="iconfont icon-user"></i>
        <p class="label">我的</p>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>
<style lang="less">
  @tabbarHeight: 42px;
  #tabbar {
    display: block;
    height: @tabbarHeight;
    .tabbar {
      height: @tabbarHeight !important;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 10;
      background: rgba(255, 255, 255, 0.98);
      display: flex;
      .tab-item {
        flex: 1;
        text-align: center;
        padding: 5px 0;
        .iconfont {
          text-align: center;
          font-size: 16px;
          color: #666;
          line-height: 18px;
        }
        .label {
          font-size: 10px;
          font-weight: 400;
          line-height: 14px;
          color: #666;
        }
        &.router-link-active > * {
          color: #00aaff;
        }
      }
    }
  }
</style>
