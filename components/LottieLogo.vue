<template>
  <div
    ref="lottie"
    class="lottie"
  />
</template>
<script>
import lottie from 'lottie-web'
import lottieAnimation from '~/assets/json/uncommon-logo.json'
export default {

  mounted () {
    const animation = lottie.loadAnimation({
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottieAnimation
    })
  }
}
</script>

<style lang="scss" scoped>
  .lottie {
    width: 50%;
    min-width: 250px;
  }

</style>
