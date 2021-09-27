/**
 * Vuex store
 * Check https://nuxtjs.org/guide/vuex-store/ for more info
 */

export const state = () => ({
  menuIsOpen: false,
  transitionRemoved: true
})

export const mutations = {
  setMenuState (state, payload) {
    state.menuIsOpen = payload
  },
  removeTransition (state, payload) {
    state.transitionRemoved = payload
  }
}
