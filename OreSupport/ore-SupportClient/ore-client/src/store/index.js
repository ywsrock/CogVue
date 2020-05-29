import Vue from 'vue'
import Vuex from 'vuex'
import userStore from "./modules/user"
import getters from "./getters"


Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user:userStore
  },
  getters
})
