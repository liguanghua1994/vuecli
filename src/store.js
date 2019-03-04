import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeTagIdx:0,
    tags:[
      {
        tagName:'首页',
        isActive:true,
        routerLink:'/'
      }
    ],
    tableData:[]
  },
  mutations: {

  },
  actions: {

  }
})
