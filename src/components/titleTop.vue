<template>
  <div>
    <van-tabs v-model="active" line-width="15">
    <van-tab title="正在上映" disabled color="black">地址</van-tab>
    <van-tab title="正在上映" >正在上映</van-tab>
    <van-tab title="正在上映">即将上映</van-tab>
  </van-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 2
    }
  }
}
</script>
<style lang="less">

</style>
