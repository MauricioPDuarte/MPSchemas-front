export default store => {
  store.subscribe((mutation, state) => {
    if (mutation.type === 'notifier') {
      store.commit('snackbar/showMessage', { content: state.content , color: state.color })
    }
  })
}