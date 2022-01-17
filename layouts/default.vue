<template>
  <div>
    <section>
      <LayoutHeader />
      <div id="transition-wrapper" ref="wrapper" class="transition" />
      <!-- <main> -->
      <Nuxt />
      <!-- </main> -->
      <!-- <LayoutPreloader /> -->
      <LayoutFooter />
    </section>
  </div>
</template>

<script>
export default {
  // computed: {
  //   transitionRemoved () {
  //     return this.$store.state.transitionRemoved
  //   }
  // },
  //
  // watch: {
  //   transitionRemoved (isRemoved) {
  //     if (isRemoved) {
  //       setTimeout(() => {
  //         this.$refs.wrapper.removeChild(this.$refs.wrapper.querySelector('img'))
  //       }, 500)
  //     }
  //   }
  // }
}
</script>

<style lang="scss">

img {
  user-select: none;
}

::-moz-selection { /* Code for Firefox */
  color: theme-color(light);
  background: theme-color(primary);
}

::selection {
  color: theme-color(light);
  background: theme-color(primary);
}

.transition {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 40;
  width: 100%;
  height: 100%;
  pointer-events: none;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
