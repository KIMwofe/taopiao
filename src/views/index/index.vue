<template>
  <div>
    <keep-alive include="film">
      <router-view ></router-view>
    </keep-alive>
    <tabbar :tabs="tabs"/>
  </div>
</template>
<script>
import tabbar from '@/components/tabbar.vue'
export default {
  name: 'index',
  data () {
    return {
      tabs: [
        { id: 0, name: '热映', icon: 'icon-dianying2', url: 'film' },
        { id: 1, name: '影院', icon: 'icon-yingyuanb', url: 'cinerma' },
        { id: 2, name: '我的', icon: 'icon-wangwang', url: 'center' }
      ]
    }
  },
  components: {
    tabbar
  }
}
</script>
