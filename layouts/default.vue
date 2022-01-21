<template>
  <div>
    <section>
      <LayoutHeader />
      <div id="transition-wrapper" ref="wrapper" class="transition" />
      <!-- <main> -->
      <Nuxt />
      <!-- </main> -->
      <LayoutPagetransition />
      <LayoutFooter />
    </section>
  </div>
</template>

<script>
export default {
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
