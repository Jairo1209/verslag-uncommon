/**
 * Vuex store
 * Check https://nuxtjs.org/guide/vuex-store/ for more info
 */
export const state = () => ({
  menuIsOpen: false,
  transitionRemoved: true,
  titleActive: false,
  preloaderActive: false
})

export const mutations = {
  setMenuState (state, payload) {
    state.menuIsOpen = payload
  },
  removeTransition (state, payload) {
    state.transitionRemoved = payload
  },

  setTitleActive (state, payload) {
    state.titleActive = payload
  },
  setPreloaderActive (state, payload) {
    state.preloaderActive = payload
  }
}
