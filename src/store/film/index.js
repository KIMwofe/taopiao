import http from '@/utils/http'
import { Toast } from 'vant'
export default ({
  namespaced: true,
  state: {
    filmList: [],
    pageNum: 1,
    pageSize: 10,
    curFilmType: 0,
    loading: false
  },
  mutations: {
    SETFILMLIST (state, list) {
      state.filmList = list
    },
    SETCURFILMTYPE (state, type) {
      state.curFilmType = type
    }
  },
  actions: {
    getFilmList ({ commit, state }) {
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      http.get('/gateway', {
        params: {
          cityId: 440300,
          pageNum: state.pageNum,
          pageSize: state.pageSize,
          type: state.curFilmType === 0 ? 1 : 2,
          k: 9386940
        },
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15596138585209795330186"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        commit('SETFILMLIST', res.data.films)
        Toast.clear()
      })
    },
    filmChange ({ dispatch, commit }) {
      commit('SETFILMLIST', [])
      dispatch('getFilmList')
    }
  }
})
