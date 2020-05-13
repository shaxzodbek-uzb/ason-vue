import Vue from "vue";
import Vuex from "vuex";
import category from "./category/";
import user from "./user/";
import page from "./page/";

import getters from "./getters";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
    user,
    page
  },
  getters
});
