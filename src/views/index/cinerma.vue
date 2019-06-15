<template>
  <div>
    <div class="top border">
        <router-link to="/city" class="a">
          <plathTop/>
        </router-link>
        <div class="topbar">
          <ol>
            <li v-for="(item,index) in items" :key="item.id" @click="fn(index,$event)">
              {{ item.name }} <span>✓</span>
            </li>
          </ol>
        </div>
        <router-link to="/search" class="van-icon2">
          <van-icon name="search" />
        </router-link>
    </div>
    <plath :current="current"  id="plaths" :display="display"  />
    <cinermaMain :list="cinemaList"/>
  </div>
 </template>
<script>
// import cinermaMain from '@/components/cinermaMain.vue'
import plath from '@/components/plath.vue'
import plathTop from '@/components/plathTop.vue'
import cinermaMain from '@/components/cinermaMain.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'film',
  data () {
    return {
      active: 0,
      lineWidth: Number,
      titleactivecolor: '#ff4d64',
      num: 1,
      items: [
        { id: 1, name: '全城' },
        { id: 2, name: '综合排序' },
        { id: 3, name: '特色' }
      ],
      current: 4,
      display: 'display:none'
    }
  },
  components: {
    cinermaMain,
    plath,
    plathTop
  },
  computed: {
    ...mapState('cinerma', [
      'cinemaList',
      'loading',
      'plathList'
    ])
  },
  methods: {
    ...mapMutations('cinerma', [
      'ADDPAGENUM'
    ]),
    ...mapActions('cinerma', [
      'getcimaList',
      'cinemaChange',
      'getplathName'
    ]),
    onScroll () {
      let scrollTop = document.documentElement.scrollTop
      let scrollHeight = document.body.scrollHeight
      let clientHeight = document.documentElement.clientHeight
      // console.log(scrollTop, scrollHeight, clientHeight)

      if ((scrollHeight - clientHeight) - scrollTop < 50) {
        // console.log('到底了')
        if (!this.loading) {
          this.getcimaList(true)
        }
      }
    },
    fn (index, e) {
      this.current = index
      this.display = 'display:block'
      // console.log(this.current)
      return (this.current, this.display)
    }
  },
  created () {
    this.getcimaList()
    this.getplathName()
    window.addEventListener('scroll', this.onScroll)
  },
  watch: {
    plathList (newVal, oldVal) {
      // let arr = Object.entries(newVal)
    }
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
@import '~@/styles/common/plathtop.less';
.van-icon2 {
    position: relative;
    top: -1px;
    left: 17px;
}
</style>
