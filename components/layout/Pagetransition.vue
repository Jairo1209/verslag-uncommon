<template>
  <div class="pagetransition">
    <span class="h4" style="color: white;">Jairo Niks</span>
  </div>
</template>

<script>
export default {
  name: 'PageTransition'
}
</script>

<style lang="scss" >
.pagetransition {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
  background-color: theme-color(dark);
  transform: translate3d(0, 100%, 0);
}
</style>
