export default ({ store }) => {
  setTimeout(() => {
    store.commit('setMenuState', false)
  }, 1000)
}
