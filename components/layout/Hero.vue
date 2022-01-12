<template>
  <div class="hero">
    <h1
      class="hero__title h1"
    >
      {{ titleName }}
    </h1>
    <img
      :src="src"
      alt="heroImg"
      class="hero__img"
    >
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    titleName: {
      type: String,
      default: ''
    }
  },

  mounted () {
    gsap.fromTo('.hero__title', {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 2
    })
    const hero = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '+=800',
        scrub: true
      }
    }, 0)
    const timeline = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: this.$el,
        start: 'top 1',
        end: 'bottom 1',
        scrub: 1
      }
    }, 1)
    timeline.fromTo('.hero__title', {
      y: 0
    }, {
      y: -400
    }, 0)
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  body.theme-dark & {
    background: theme-color(dark);
  }

  body.theme-light & {
    background: theme-color(light);
  }

  &__img {
    z-index: -1;
    width: 100%;
    height: 100%;
    padding: 0;
    object-fit: cover;
  }

  &__title {
    position: absolute;
    margin: 0;
    color: theme-color(light);
    text-transform: lowercase;
  }
}
</style>
