// 城市相关的仓库数据

// 引入封装好的HTTP
import http from '@/utils/http'
// 引入加载显示
import { Toast } from 'vant'

export default {
  namespaced: true,
  state: {
    cityList: []// 城市列表数据
  },
  // 处理请求到的数据
  getters: {
    newCityList (state) {
      let index = 0
      let hash = {}
      let result = []

      state.cityList.forEach(city => {
        let py = city.pinyin.charAt(0).toUpperCase() // 拿到城市拼音的首字母
        if (hash[py]) {
          result[hash[py] - 1].list.push(city) // 把进入到if中的数据添加到result中
        } else {
          // 如果不存在的，让他下次碰到首字母相同的，让他下次走到if条件
          hash[py] = ++index
          // 构建我们需要的数据结构
          let obj = {
            py: py,
            list: [city]
          }
          // 将构建的数据追加到 result里面
          result.push(obj)
        }
      })
      return result.sort((a, b) => a.py.charCodeAt() - b.py.charCodeAt())
    },
    hotList (state) {
      return state.cityList.filter(item => item.isHot)
    },
    indexlist (state, getters) {
      return getters.newCityList.map(item => item.py)
    }
  },
  mutations: {
    SETCITYLIST (state, list) {
      state.cityList = list
    }
  },
  // 向服务器发请求
  actions: {
    getCityList ({ commit }) {
      // 在发送请求之前使用加载转圈
      Toast.loading({
        duration: 0,
        message: '加载中...'
      })
      http.get('gateway?k=5550869', {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15597919845828270621053"}',
          'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(res => {
        commit('SETCITYLIST', res.data.cities)
        // 请求完成后关闭转圈效果
        Toast.clear()
      })
    }

  }
}
