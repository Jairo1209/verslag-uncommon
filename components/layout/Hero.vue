<template>
  <div class="hero">
    <h1
      class="hero__title"
    >
      {{ $route.params.slug }}
    </h1>
    <img
      :src="src"
      alt="heroImg"
      class="hero__img"
    >
    <div class="clouds">
      <div class="clouds__wrapper">
        <img src="~/assets/img/clouds.png" alt="" class="clouds__one">
        <img src="~/assets/img/clouds.png" alt="" class="clouds__two">
        <img src="~/assets/img/clouds.png" alt="" class="clouds__three">
      </div>
    </div>
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
    }
  },
  data () {
    return {
    }
  },

  mounted () {
    gsap.fromTo('.hero__img', {
      scale: 1
    },
    {
      scale: 0.98,
      duration: 1,
      delay: 1
    })
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
        pin: true,
        anticipatePin: 1,
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
        scrub: 2
      }
    }, 1)
    timeline.fromTo('.hero__title', {
      y: 0
    }, {
      y: -400
    }, 0)
    timeline.fromTo('.clouds__one', {
      y: 0,
      opacity: 0
    }, {
      y: -900,
      opacity: 1
    }, 0)
    timeline.fromTo('.clouds__two', {
      y: 0,
      opacity: 0
    }, {
      y: -700,
      opacity: 1
    }, 0)
    timeline.fromTo('.clouds__three', {
      y: 0,
      opacity: 0
    }, {
      y: -600,
      opacity: 1
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

  body.theme-forest & {
    background: theme-color(forest);
  }

  body.theme-desert & {
    background: theme-color(desert);
  }

  body.theme-ocean & {
    background: theme-color(ocean);
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
    text-transform: uppercase;
  }
}

.clouds {
  position: absolute;
  bottom: -200px;
  width: 100%;
  height: rem(450px);

  &__wrapper {
    position: relative;
    display: flex;
  }

  &__one {
    position: absolute;
    left: 0;
    z-index: 1;
    width: 90%;
  }

  &__two {
    position: absolute;
    right: 0;
    z-index: 2;
    width: 80%;
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  &__three {
    position: absolute;
    right: 0;
    left: 0;
    z-index: 3;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }
}

</style>
