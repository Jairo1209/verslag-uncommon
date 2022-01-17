export default async ({ store }) => {
  store.commit('removeTransition', true)
  setTimeout(() => {
    store.commit('setMenuState', false)
  }, 1000)

  await store.dispatch('entries/getEntry', {
    name: 'menu',
    id: '2yY73NHH6AGZLk4BJ6TZew'
  })
}
