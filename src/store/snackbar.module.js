export const snackbar = {
  namespaced: true,
  state: {
    content: '',
    color: '',
    timeout: '',
  },
  mutations: {
    showMessage(state, payload) {
      state.content = payload.content;
      state.color = payload.color;
      state.timeout = payload.timeout;
    }
  },
  actions: {
    showSnack({ commit }, payload) {
      commit("showMessage", payload);
    },
  },
};