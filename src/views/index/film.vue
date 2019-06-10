<template>
  <div>
        <titleTop/>
    shouye
  </div>
</template>
<script>
import titleTop from '@/components/titleTop.vue'
export default {

  components: {
    titleTop
  }
}
</script>
<style lang="less">
  .top{
    display: flex;
    flex-wrap: nowrap;
  .city-c{
    display: inline-block;
    vertical-align: top;
    height: 3.125rem;
    height: 13.3vw;
    line-height: 3.125rem;
    line-height: 13.3vw;
    .current-city{
        background-size: 25px 25px;
        background-repeat: no-repeat;
        background-position: 15px;
        padding-left: 50px;
        position: relative;
    }
    .i-logo{
      background-image: url(//gw.alicdn.com/tfs/TB1mKkzl9zqK1RjSZFpXXakSXXa-50-50.svg);
    }
    span{
      margin-left: 3px;
      width: 8px;
      height: 4px;
      position: relative;
       top: 50%;
      left: 65%;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid #333;
      display: block;
      position: absolute;
      margin: -1px 0 0 -4px;
    }
  }

  }
</style>
