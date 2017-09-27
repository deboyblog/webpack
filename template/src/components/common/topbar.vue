<template>
  <div>
    <div class="topbar-wrapper">
      <div class="topbar" :style="{background: transparent ? 'transparent' : '#0099ff'}">
        <div class="left">
          <slot name="left">
            <i @click="back" v-show="showBack" class="iconfont icon-back"></i>
          </slot>
        </div>
        <div class="middle t-o-h">
          <slot>

          </slot>
        </div>
        <div class="right">
          <slot name="right"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
  @topbarHeight: 50px;
  .topbar-wrapper{
    width: 100%;
    height: @topbarHeight;
    display: block;
    .topbar {
      height: @topbarHeight;
      line-height: @topbarHeight;
      padding: 0;
      width: 100%;
      font-size: 16px;
      color: white;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 10;
      .left {
        z-index: 10;
        margin-left: 10px;
        .icon-back {
          font-size: 16px;
        }
      }
      .middle {
        text-align: center;
        position: absolute;
        width: 60%;
        height: 100%;
        left: 20%;
        top: 0;
        z-index: 0;
      }
      .right {
        height: @topbarHeight;
        line-height: @topbarHeight;
        position: absolute;
        right: 30px;
        top: 0;
        display: table-cell;
        * {
          display: inline-table;
          vertical-align: 5%;
        }
      }
    }
  }
</style>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        require: true,
        default () {
          return ''
        }
      },
      showBack: {
        type: Boolean,
        default () {
          return false
        }
      },
      transparent: {
        type: Boolean,
        default () {
          return false
        }
      },
      backRouteName: {
        type: String,
        default () {
          return null
        }
      },
      clickEvent: Function,
      onClickMore: {
        type: Function,
        default () {
          return () => {
          }
        }
      }
    },
    methods: {
      back () {
        if (this.clickEvent !== undefined && typeof this.clickEvent === 'function') {
          this.clickEvent()
        } else if (this.backRouteName !== null) {
          this.$router.push({name: this.backRouteName})
        } else if (window.history.length > 0) {
          window.history.go(-1)
        } else {
          this.$router.push({name: 'Home'})
        }
      }
    }
  }
</script>
