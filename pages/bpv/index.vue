<template>
  <div class="container section-inset-y">
    <h1>BPV</h1>
  </div>
</template>

<script>
export default {
  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'bpvOverviewPage',
      id: '3Xocjlrx1KaUrmGtAhgnfv'
    })
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.bpvOverviewPage.entry
    }
  }
}
</script>

<style lang="scss" scoped>
//
</style>
