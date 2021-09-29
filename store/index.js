/**
 * Vuex store
 * Check https://nuxtjs.org/guide/vuex-store/ for more info
 */
export const state = () => ({
  menuIsOpen: false,
  transitionRemoved: true,
  buttonText: 'DRAG',
  cursorDisable: false,
  cursorEnable: false,
  sizeMedium: false,
  sizeLarge: false,
  titleActive: false
})

export const mutations = {
  setMenuState (state, payload) {
    state.menuIsOpen = payload
  },
  removeTransition (state, payload) {
    state.transitionRemoved = payload
  },
  setButtonText (state, payload) {
    state.buttonText = payload
  },
  setCursorDisable (state, payload) {
    state.cursorDisable = payload
  },
  setCursorEnable (state, payload) {
    state.cursorEnable = payload
  },
  setCursorMedium (state, payload) {
    state.sizeMedium = payload
  },
  setCursorLarge (state, payload) {
    state.sizeLarge = payload
  },
  setTitleActive (state, payload) {
    state.titleActive = payload
  }
}
