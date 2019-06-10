<template>

    <van-tabbar v-model="active" class="tabbar" active-color="#ff7ba0">
      <van-tabbar-item
        v-model="active"
         v-for="tab in tabs"
         :key="tab.id"
         :to="tab.url">
           <i :class="['iconfont', tab.icon]"></i>
           <span>{{tab.name}}</span>
         </van-tabbar-item>

    </van-tabbar>

</template>

<script>
export default {
  name: 'tabbar',
  props: {
    tabs: Array
  },
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style lang="less">

  .tabbar {
   .border-top{
     position: fixed;
      bottom: 0;
      width: 100%;
      display: flex;
      padding: 0;
      margin: 0;
      z-index: 100;
      background: rgb(44, 43, 43);
      list-style: none;
   }
    .van-tabbar-item__text{
       flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 50px;
      .iconfont {
      font-size: 24px;
      margin-bottom: 4px;

      }
    }
  }
</style>
