import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
//导出Vuex的实例
export default new Vuex.Store({
  state: {
    userId: 1,
    isLogin: true
  },
  getters: {
    isLogin(state) {
      return state.isLogin;
    },
    userId(state) {
      return state.userId;
    }
  },
})
