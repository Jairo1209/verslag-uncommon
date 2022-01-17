/**
 * Vuex store
 * Check https://nuxtjs.org/guide/vuex-store/ for more info
 */

export const state = () => ({
  preloaderLoader: true
})
export const mutations = {
  setPreloaderState (state, payload) {
    state.preloaderLoader = payload
  }
}
export const actions = {}
