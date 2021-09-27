export default ({ store }) => {
  store.commit('removeTransition', true)
  setTimeout(() => {
    store.commit('setMenuState', false)
  }, 1000)
}
