import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {  
    selectId: ''
  },
  mutations: {  
    idChange (state, paylod = '') {  
      state.selectId = paylod
    }
  }
})