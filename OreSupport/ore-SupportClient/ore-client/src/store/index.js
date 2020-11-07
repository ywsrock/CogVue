import Vue from "vue";
import Vuex from "vuex";
import userStore from "./modules/user";
import blogStore from "./modules/blog";
import informationStore from "./modules/information";
import likeStore from "./modules/like";
import addressStore from "./modules/address";
import cgevStore from "./modules/cgevstore"
import actionStore from "./modules/actionstore"
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userStore,
    blog: blogStore,
    information: informationStore,
    address: addressStore,
    cgev: cgevStore,
    action: actionStore,
    like: likeStore
  },
  getters,
});
