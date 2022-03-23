import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  getters: {},
  mutations: {
    updateCount(state, value) {
      state.count = value;
    },
  },
  actions: {
    // update countin state
    updateCount(payload) {
      this.commit("updateCount", payload);
    },
  },
  modules: {},
});
