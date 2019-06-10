<template>
  <div>
    <router-view></router-view>
    <tabbar :tabs="tabs"/>
  </div>
</template>
<script>
import tabbar from '@/components/tabbar.vue'
export default {
  data () {
    return {
      tabs: [
        { id: 1, name: '热映', icon: 'icon-dianying2', url: 'film' },
        { id: 2, name: '影院', icon: 'icon-yingyuanb', url: 'cinerma' },
        { id: 3, name: '我的', icon: 'icon-wangwang', url: 'center' }
      ]
    }
  },
  components: {
    tabbar
  }
}
</script>
