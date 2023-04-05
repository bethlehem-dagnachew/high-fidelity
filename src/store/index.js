import { createApp } from 'vue'
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
// import drugs from "./modules/drugs"

createApp().use(Vuex);
// createApp({ Vuex })


export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    // drugs,
    auth,
  },
  plugins: [
    createPersistedState()
  ],
  namespaced: true,
});
