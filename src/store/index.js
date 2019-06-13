import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import cinerma from './cinerma'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    film,
    cinerma
  }
})
