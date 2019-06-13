import axios from 'axios'

export default {
  namespaced: true,
  state: {
    cinemaList: []
  },
  mutations: {
    SETFILMLIST (state, list) {
      state.cinemaList = list
    }
  },
  actions: {
    getcimaList ({ commit }) {
      axios.get('http://localhost:8081/maoyan/ajax/cinemaList?day=2019-06-10&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1560154126485&cityId=30').then(response => {
        let res = response.data
        commit('SETFILMLIST', res.cinemas)
        // let res = res.data
        // console.log(res.data)
      })
    }
  }
}
