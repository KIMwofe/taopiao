<template>
  <div class="top">
    <router-link to="/city" class="a">
      <plathTop/>
    </router-link>
    <van-tabs v-model="curFilmType" :line-width="15" :title-active-color="titleactivecolor" @click="filmChange">
      <van-tab title="正在上映">
        <nowfilms film-type="nowPlaying" :list="filmList"/>
      </van-tab>
      <van-tab title="即将上映">
        <nowfilms film-type="comingSoon" :list="filmList"/>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import plathTop from '@/components/plathTop.vue'
import nowfilms from '@/components/nowfilms.vue'
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {
      lineWidth: Number,
      titleactivecolor: '#ff4d64'
    }
  },
  components: {
    plathTop,
    nowfilms
  },
  computed: {
    ...mapState('film', [
      'filmList',
      'loading'
    ]),
    curFilmType: {
      get () {
        return this.$store.state.film.curFilmType
      },

      set (value) {
        this.$store.commit('film/SETCURFILMTYPE', value)
      }
    }
  },
  methods: {
    ...mapMutations('film', [
      'ADDPAGENUM'
    ]),
    ...mapActions('film', [
      'getFilmList',
      'filmChange'
    ]),
    onScroll () {
      // 判断当前是否滚动到了底部
      let scrollTop = document.documentElement.scrollTop // 滚动条距离顶部的距离

      let scrollHeight = document.documentElement.scrollHeight // 页面的高度
      let clientHeight = document.documentElement.clientHeight // 可视区域的高度
      // console.log(scrollTop, scrollHeight, clientHeight);

      if ((scrollHeight - clientHeight) - scrollTop < 50) {
        if (!this.loading) {
          this.getFilmList(true)
        }
      }
    }
  },

  created () {
    this.getFilmList()
    window.addEventListener('scroll', this.onScroll)
  },
  activated () {
    window.addEventListener('scroll', this.onScroll)
  },

  // 失活
  deactivated () {
    window.removeEventListener('scroll', this.onScroll)
  }

}
</script>
<style lang="less">
@import '~@/styles/common/top.less';
</style>
