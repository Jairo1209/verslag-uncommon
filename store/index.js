/**
 * Vuex store
 * Check https://nuxtjs.org/guide/vuex-store/ for more info
 */

export const state = () => ({
  menuIsOpen: false
})

export const mutations = {
  setMenuState (state, payload) {
    state.menuIsOpen = payload
  }
}
