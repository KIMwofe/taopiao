<template>
  <div class="top">
    <router-link to="cinerma">
      <plathTop />
    </router-link>
      <van-tabs v-model="active" :line-width="15" :title-active-color="titleactivecolor">
        <van-tab title="正在上映"></van-tab>
        <van-tab title="即将上映"></van-tab>
      </van-tabs>
  </div>
</template>
<script>
import plathTop from '@/components/plathTop.vue'
export default {
  data () {
    return {
      active: 2,
      lineWidth: Number,
      titleactivecolor: '#ff4d64'
    }
  },
  components: {
    plathTop
  }
}
</script>
<style lang="less">
   .top{

     .van-tabs--line {
       width: 200px;
       position: absolute;
       top: 0;
       right: 0;
       .van-tab--active{
         font-weight: 900;
       }
       .van-tab{
         font-size: 17px;
       }
    }
   }
</style>
