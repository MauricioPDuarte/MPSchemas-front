const initialState = {
  content: '',
  color: ''
}

export const snackbar = {
    namespaced: true,
    state: initialState,
    actions: {

    },
    mutations: {
      showMessage(state, payload) {
        state.content = payload.content;
        state.color = payload.color;
      }
    }
};