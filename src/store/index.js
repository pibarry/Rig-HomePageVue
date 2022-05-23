import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: ''
  },
  getters: {
    getLangData(state) {
      return state.lang
    }
  },
  mutations: {
    setLang(state, value) {
      state.lang = value
    }
  },
  actions: {
    callSetLang({ commit }, data) {
      commit('setLang', data)
    }
  },
  modules: {}
})
