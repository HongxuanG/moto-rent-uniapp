import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
  modules: {},
  state: {
    isLogin: true,
    userName: '丑八怪',
    realName: '张三',
    phoneCode: '17324561234',
    app: {
      platform: '',
    },
  },
  mutations: {
    SET_IS_LOGIN(state, b) {
      state.isLogin = b
    },
    SET_APP_PLATFORM(state, s) {
      state.app.platform = s
    },
  },
  actions: {
    initApp({ dispatch, commit }) {
      // #ifdef MP-WEIXIN
      commit('SET_APP_PLATFORM', 'MP-WEIXIN')
      // #endif
    },
  },
  getters: {},
})
export default store
