<template>

</template>
<script>
import plathTop from '@/components/plathTop.vue'

export default {

  components: {
    plathTop
  }
}
</script>
<style lang="less">
@import '~@/styles/common/top.less';

.top{
  position: relative;
  line-height: 50px;
  border-bottom: 1px solid #e2e2e2;
  height: 12.5vw;
 ul  li{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    margin-top: 14px;
    flex: 1;
    float: left;
    color: #333;
    padding: 0 13px;
    font-size: 12px;
    border-left: 1px solid #e2e2e2;
    height: 20px;
    line-height: 17px;
    &:nth-child(3){
      border-right:1px solid #e2e2e2;
    }
  }

}
</style>
