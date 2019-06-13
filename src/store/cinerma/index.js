import axios from 'axios'
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    cinemaList: [],
    limit: 20,
    offset: 1,
    loading: false
  },
  mutations: {
    SETFILMLIST (state, list) {
      state.cinemaList = list
    },
    SETLOADING (state, bol) {
      state.loading = bol
    },
    ADDPAGENUM (state) {
      // isReset ? state.offset = 1 : state.offset += 1
      state.limit += 10
    }
  },
  actions: {
    getcimaList ({ commit, state, isLoadMore }) {
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      commit('SETLOADING', true)
      setTimeout(() => {
        let attr = 'http://localhost:8081/maoyan/ajax/cinemaList?day=2019-06-10&offset=' + state.offset + '&limit=' + state.limit + '&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=2&updateShowDay=true&reqId=1560154126485&cityId=30'
        axios.get(attr).then(res => {
          // let res = response.data
          // commit('SETFILMLIST', res.cinemas)
        // let res = res.data
          // console.log(res.data)
          if (isLoadMore) {
            let newCinemaList = [...state.cinemaList, ...res.data.cinemas]
            commit('SETFILMLIST', newCinemaList)
          } else {
            commit('SETFILMLIST', res.data.cinemas)
          }
          commit('ADDPAGENUM')
          commit('SETLOADING', false)
          Toast.clear()
        })
      }, 2000)
    },
    cinemaChange ({ dispatch, commit }) {
      commit('ADDPAGENUM', true)
      commit('SETFILMLIST', [])
      dispatch('getcimaList')
    }
  }
}
