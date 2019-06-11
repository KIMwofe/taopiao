<template>
  <div class="top">
    <router-link to="cinerma">
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
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      lineWidth: Number,
      titleactivecolor: '#ff4d64'
    }
  },
  watch: {
    active (newval) {
      console.log(newval)
    }
  },
  components: {
    plathTop,
    nowfilms
  },
  methods: {
    ...mapActions('film', [
      'getFilmList',
      'filmChange'
    ])
  },
  computed: {
    ...mapState('film', [
      'filmList'
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
  created () {
    this.getFilmList()
  }
}
</script>
<style lang="less">
.top {
  .van-tabs--line {
     width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    .van-tabs__wrap{
      left: auto;
    }
    .van-tabs__wrap{
      width: 200px;
    }
    .van-tab--active {
      font-weight: 900;
    }
    .van-tabs__nav{
      background-color: transparent;
    }
    .van-tab {
      font-size: 17px;
    }
  }
}
</style>
