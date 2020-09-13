import Vue from "vue";
import Vuex from "vuex";
import userStore from "./modules/user";
import blogStore from "./modules/blog";
import informationStore from "./modules/information";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user: userStore,
    blog: blogStore,
    information: informationStore,
  },
  getters,
});
