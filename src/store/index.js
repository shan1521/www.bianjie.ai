// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: {
      musicList:[],
      lang:'CN',
      flShowHeaderAndFooter:true
    },
    mutations:{
      flShowHeaderAndFooter(state,data){
        state.flShowHeaderAndFooter = data
      }
    }
  })
}
