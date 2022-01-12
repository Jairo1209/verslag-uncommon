<template>
  <div>
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
  },

  mounted () {
    console.log(this.entry)
  }
}
</script>

<style lang="scss" scoped>
//
</style>
