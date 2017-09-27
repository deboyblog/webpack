<template>
    <div class='back-to-top' @click="top">
      顶
    </div>
</template>
<style scoped lang="less" rel="stylesheet/less">
  @size:40px;
  @padding: 5px;
  .back-to-top{
    width: @size;
    height: @size;
    position: fixed;
    right: 30px;
    bottom: 80px;
    display: block;
    background: @mainColor;
    border-radius: 50%;
    color: white;
    padding: @padding;
    font-size: 16px;
    line-height: @size - @padding * 2;
    text-align: center;
  }
</style>
<script type="text/ecmascript-6">
  export default{
    methods: {
      top () {
        window.scrollTo(0, 0)
      }
    }
  }
</script>
