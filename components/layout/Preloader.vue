<template>
  <div
    v-if="loading"
    ref="loadingPage"
    class="loading-page"
    :class="{ 'loading-page--transform' : loadingUp }"
  >
    <div
      ref="lottie"
      class="loading-page__lottie"
    />
  </div>
</template>
<script>
import lottie from 'lottie-web'
import lottieAnimation from '~/assets/lottieuncommon.json'
export default {
  data () {
    return {
      loadingUp: false
    }
  },
  computed: {
    loading () {
      return this.$store.state.preloader.preloaderLoader
    }
  },
  mounted () {
    const animation = lottie.loadAnimation({
      container: this.$refs.lottie,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: lottieAnimation
    })
    animation.addEventListener('complete', this.completeAnimation)
  },
  methods: {
    completeAnimation () {
      this.loadingUp = true
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $black;

  &--transform {
    transition: transform 1s transition(primary);
    transform: translate3d(0, -100%, 0);
  }

  &__lottie {
    width: 50%;
  }
}
</style>
