<template>
  <div>
    <div class="top border">
        <router-link to="/city" class="a">
          <plathTop/>
        </router-link>
        <div class="topbar">
          <ol>
            <li v-for="item in items" :key="item.id">
              {{ item.name }} <span>✓</span>
            </li>
          </ol>
        </div>
    </div>
    <plath :num="num"/>
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
      ]
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
      'loading'
    ])
  },
  methods: {
    ...mapMutations('cinerma', [
      'ADDPAGENUM'
    ]),
    ...mapActions('cinerma', [
      'getcimaList',
      'cinemaChange'
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
    }
  },
  created () {
    this.getcimaList()
    window.addEventListener('scroll', this.onScroll)
  },
  watch: {
    cinemaList (newVal, oldVal) {
      // let arr = Object.entries(newVal)
      console.log(newVal)
    }
    // activated () {
    //   window.addEventListener('scroll', this.onScroll)
    // }
  }
}
</script>

<style lang="less">
@import '~@/styles/common/top.less';
@import '~@/styles/common/plathtop.less';
</style>
