<template>
  <div class="homepage-container">
    <!-- Slider main container -->
    <div ref="swiper" class="swiper">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div
          v-for="(item, key) in sliderItems"
          :key="key"
          :data-body-class="item.class"
          class="swiper-slide"
          @mouseover="cursorOver"
          @mouseout="cursorOut"
        >
          <!-- <NuxtLink
            class="slider-link"
            :to="item.link"
          /> -->
          <h2
            class="swiper-slide__title"
            @mouseover="titleHover"
            @mouseout="titleHoverOut"
          >
            {{ item.name }}
          </h2>

          <div class="swiper-slide__img">
            <div class="swiper-slide__inner">
              <img class="img" :src="item.img" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cursor">
      <div class="cursor__inner test">
        <div
          ref="arrowWrapper"
          class="arrow-wrapper"
        >
          <div class="arrow-left" />
          <div class="arrow-right" />
        </div>
        <p class="cursor__inner--txt">
          {{ buttonText }}
        </p>
      </div>
    </div>
    <div class="swiper-btn-wrapper">
      <div
        class="swiper-button-prev"
        @mouseover="cursorOverMedium"
        @mouseout="cursorOutMedium"
      />
      <div
        class="swiper-button-next"
        @mouseover="cursorOverMedium"
        @mouseout="cursorOutMedium"
      />
    </div>
  </div>
</template>

<script>
// import { gsap } from 'gsap'
import { Swiper, Navigation, Pagination, Mousewheel } from '~/plugins/swiper.js'
import forestImg from '~/assets/img/bos.jpeg'
import oceanImg from '~/assets/img/oceaan.jpeg'
import desertImg from '~/assets/img/desert.jpeg'
export default {
  name: 'HomepageSlider',

  data () {
    return {
      buttonText: 'DRAG',
      sliderItems: [
        { name: 'Forest', link: '/forest', img: forestImg, class: 'theme-forest' },
        { name: 'Ocean', link: '/ocean', img: oceanImg, class: 'theme-ocean' },
        { name: 'Desert', link: '/desert', img: desertImg, class: 'theme-desert' }
      ]
    }
  },

  computed: {},

  mounted () {
    // const titleText = document.querySelector('.swiper-slide__title')
    const cursor = document.querySelector('.cursor')
    document.addEventListener('pointermove', (e) => {
      cursor.style.left = e.pageX + 'px'
      cursor.style.top = e.pageY + 'px'
    })
    // const width = window.innerWidth
    // const height = window.innerHeight

    // this.animateSlider = gsap.timeline({
    //   paused: true
    // })
    // this.animateSlider.to('.swiper-wrapper',
    //   {
    //     scaleX: 1.5,
    //     scaleY: 1.5
    //   })

    // const Swiper = swiper.Swiper
    Swiper.use([Navigation, Pagination, Mousewheel])

    this.swiper = new Swiper(this.$refs.swiper, {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 80,
      mousewheelControl: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      loop: true,
      speed: 1300,
      mousewheel: true
    })

    this.swiper.on('slideChange', (swiper) => {
      this.activeSlideClass(swiper.activeIndex, swiper.slides)
    })
  },

  methods: {
    activeSlideClass (key, slides) {
      const bodyClass = slides[key].dataset.bodyClass
      document.body.removeAttribute('class')
      document.body.classList.add(bodyClass)
    },
    titleHover () {
      this.buttonText = 'CLICK'
    },
    titleHoverOut () {
      this.buttonText = 'DRAG'
    },
    cursorOver () {
      document.querySelector('.cursor__inner').classList.add('cursor__inner--large')
      // this.$refs.arrowWrapper.classList.add('is-active')
    },
    cursorOut () {
      document.querySelector('.cursor__inner').classList.remove('cursor__inner--large')
    },
    cursorOverMedium () {
      document.querySelector('.cursor').classList.add('cursor__medium')
      document.querySelector('.cursor__inner').classList.add('cursor__inner--medium')
    },
    cursorOutMedium () {
      document.querySelector('.cursor').classList.remove('cursor__medium')
      document.querySelector('.cursor__inner').classList.remove('cursor__inner--medium')
    }
    // sliderAnimation () {
    //   this.animateSlider.play()
    // }
  }
}
</script>

<style lang="scss" scoped>

.homepage-container {
  width: 100%;
  height: 100vh;
  cursor: none;
  background-color: theme-color(forest);
  transition: all 500ms transition(out);

  body.theme-forest & {
    background: theme-color(forest);
  }

  body.theme-desert & {
    background: theme-color(desert);
  }

  body.theme-ocean & {
    background: theme-color(ocean);
  }
}

.cursor {
  position: fixed;
  z-index: 99999999999999;
  pointer-events: none;
  // mix-blend-mode: difference;
  transform: translate(-50%, -50%);
  // transition: .1s;

  &__large {
    mix-blend-mode: normal;
  }

  &__medium {
    mix-blend-mode: difference;
  }

  &__inner {
    width: rem(30px);
    height: rem(30px);
    background: #fff;
    border-radius: 50%;
    transition: 200ms (ease-in-out);

    .arrow-wrapper {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 200px;
      height: 100px;
      opacity: 0;

      &.is-active {
        opacity: 1;
      }

      .arrow-left {
        width: 30px;
        height: 30px;
        background-image: img-path('arrow-prev.svg');
        background-repeat: no-repeat;
        background-position: left;
      }

      .arrow-right {
        width: 30px;
        height: 30px;
        background-image: img-path('arrow-next.svg');
        background-repeat: no-repeat;
        background-position: right;
      }
    }

    p {
      margin: 0;
      opacity: 0;
      // transition-delay: 250ms;
      // transition-duration: 300ms;
    }

    &--medium {
      width: rem(60px);
      height: rem(60px);
      mix-blend-mode: difference;
    }

    &--large {
      display: flex;
      align-items: center;
      justify-content: center;
      width: rem(100px);
      height: rem(100px);
      text-align: center;

      // animation: enlarge 15s ease;
      // animation-iteration-count: infinite;

      p {
        opacity: 1;
        transition-delay: 250ms;
      }
    }
  }
}

@keyframes enlarge {
  0% { transform: scale(1); }
  // 25% { transform: scale(2); }
  50% { transform: scale(2); }
  // 75% { transform: scale(2); }
  100% { transform: scale(1); }
}

.swiper {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  &-wrapper {
    position: relative;
    height: 50%;
    max-height: rem(450px);
  }

  &-slide {
    position: relative;
    display: flex;
    align-items: center;
    width: 70%;
    max-width: rem(1000px);
    height: 100%;
    transition: transform 1100ms (ease-in-out);

    a.slider-link {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      height: 100%;
    }

    &__title {
      position: relative;
      z-index: 2;
      margin: 0;
      margin-right: auto;
      // width: 100%;
      margin-left: auto;
      color: theme-color(light);
      text-align: center;
      text-transform: uppercase;
      opacity: 0;
      transition: 400ms (ease-in-out);
      transition-delay: 400ms;
      transform: translate3d(0, rem(100px), 0);
    }

    &-active {
      transition-delay: 500ms;
      transform: scale(1.1);

      .swiper-slide__title {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }

  // &-slide:hover {
  //   transform: scale(1.1);
  // }

  &-btn-wrapper {
    position: absolute;
    right: 0;
    bottom: 10%;
    left: 0;
    z-index: 999;
    display: flex;
    justify-content: space-around;
    width: 300px;
    margin-right: auto;
    margin-left: auto;
  }

  &-button-prev {
    width: 50px;
    height: 50px;
    background-image: img-path('arrow-prev.svg');
    background-repeat: no-repeat;
    background-position: center;
    opacity: .9;
    transition: all 300ms transition(out);
  }

  &-button-next {
    width: 50px;
    height: 50px;
    background-image: img-path('arrow-next.svg');
    background-repeat: no-repeat;
    background-position: center;
    opacity: .9;
    transition: all 300ms transition(out);
  }

  &-button-prev:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  &-button-next:hover {
    opacity: 1;
    transform: scale(1.2);
  }

  &-slide__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;

    img {
      width: 100%;
      height: 100%;
      margin: 0;
      object-fit: cover;
      object-position: center;
    }
  }

  &-slide__inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
  }
}

@include media-breakpoint-down(sm) {
  .cursor {
    display: none;

    &__inner {
      display: none;
    }
  }

  .swiper-slide {
    &__title {
      font-size: rem(40px);
    }
  }
}

</style>
