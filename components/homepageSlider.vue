<template>
  <div class="slider slider__wrapper">
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
          @mouseover="hoverSlide"
          @mouseout="hoverSlideOut"
        >
          <a
            :href="item.link"
            class="slider__link"
            :to="item.link"
            @click.prevent="onRouteChange($event, item.link)"
          >
            <h2
              class="slider__title"
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
          </a>
        </div>
      </div>
    </div>
    <div class="swiper-btn-wrapper">
      <div
        class="swiper__button swiper__button--prev"
        @mouseover="hoverArrows"
        @mouseout="hoverArrowsOut"
      />
      <div
        class="swiper__button swiper__button--next"
        @mouseover="hoverArrows"
        @mouseout="hoverArrowsOut"
      />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { Swiper, Navigation, Pagination, Mousewheel } from '~/plugins/swiper.js'
import forestImg from '~/assets/img/forest.jpg'
import oceanImg from '~/assets/img/ocean.jpg'
import desertImg from '~/assets/img/desert.jpg'
export default {
  name: 'HomepageSlider',

  data () {
    return {
      sliderItems: [
        { name: 'Forest', link: '/forest', img: forestImg, class: 'theme-forest' },
        { name: 'Ocean', link: '/ocean', img: oceanImg, class: 'theme-ocean' },
        { name: 'Desert', link: '/desert', img: desertImg, class: 'theme-desert' }
      ]
    }
  },
  mounted () {
    // const Swiper = swiper.Swiper
    Swiper.use([Navigation, Pagination, Mousewheel])

    this.swiper = new Swiper(this.$refs.swiper, {
      navigation: {
        nextEl: '.swiper__button--next',
        prevEl: '.swiper__button--prev'
      },
      spaceBetween: 80,
      mousewheelControl: true,
      slidesPerView: 'auto',
      allowTouchMove: false,
      centeredSlides: true,
      loop: true,
      loopedSlides: 6,
      speed: 1300,
      mousewheel: true
    })

    this.swiper.on('slideChange', (swiper) => {
      this.activeSlideClass(swiper.activeIndex, swiper.slides)
    })
  },
  methods: {
    onRouteChange ($event, url) {
      const el = $event.currentTarget
      const image = el.parentNode.querySelector('.img')
      const wrapper = document.getElementById('transition-wrapper')
      const bounds = el.getBoundingClientRect()

      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth

      const x = bounds.width / windowWidth
      const y = bounds.height / windowHeight

      wrapper.appendChild(image)

      this.$store.commit('removeTransition', false)
      gsap.fromTo(wrapper, {
        scaleY: y,
        scaleX: x
      }, {
        scaleY: 1,
        scaleX: 1,
        delay: 0.3,
        ease: 'power4.out',
        duration: 1.4,
        onComplete: () => {
          this.$router.push(url)
        }
      })
    },
    activeSlideClass (key, slides) {
      const bodyClass = slides[key].dataset.bodyClass
      document.body.removeAttribute('class')
      document.body.classList.add(bodyClass)
    },
    titleHover () {
      // this.cursorDisable = true
      this.$store.commit('setCursorDisable', true)
      this.$store.commit('setButtonText', 'CLICK')
    },
    titleHoverOut () {
      this.$store.commit('setCursorDisable', false)
      this.$store.commit('setButtonText', 'DRAG')
    },
    hoverSlide () {
      this.$store.commit('setCursorEnable', true)
    },
    hoverSlideOut () {
      this.$store.commit('setCursorEnable', false)
    },
    hoverArrows () {
      this.$store.commit('setCursorMedium', true)
    },
    hoverArrowsOut () {
      this.$store.commit('setCursorMedium', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.slider {
  &__wrapper {
    width: 100%;
    height: 100vh;
    // cursor: none;
    background-color: theme-color(forest);
    transition: all 500ms transition(out);
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    // cursor: none;
    // border: solid 1px red;
  }

  &__title {
    position: relative;
    z-index: 2;
    padding: 0 10%;
    margin: 0;
    margin-right: auto;
    margin-left: auto;
    color: theme-color(light);
    text-align: center;
    text-transform: uppercase;
    opacity: 0;
    transition: 400ms (ease-in-out);
    transition-delay: 400ms;
    transform: translate3d(0, rem(100px), 0);
  }

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
  transform: translate(-50%, -50%);

  &.medium {
    mix-blend-mode: difference;
  }

  p {
    margin: 0;
    opacity: 0;
  }

  &__arrow {
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    opacity: 0;
    transition: transform 250ms ease-in;

    &--left {
      background-image: img-path('arrow-prev.svg');
      background-position: left;
      transform: translate3d(rem(50px), 0, 0);
    }

    &--right {
      background-image: img-path('arrow-next.svg');
      background-position: right;
      transform: translate3d(rem(-50px), 0, 0);
    }
  }

  &--active & {
    &__arrow {
      opacity: 1;
      transition: transform 250ms ease-in;

      &--left {
        transform: translate3d(0, 0, 0);
      }

      &--right {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  &--disabled & {
    &__arrow {
      transition: transform 250ms ease-out;

      &--left {
        transform: translate3d(50px, 0, 0);
      }

      &--right {
        transform: translate3d(-50px, 0, 0);
      }
    }
  }

  &__wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 100px;
  }

  &__inner {
    width: rem(30px);
    height: rem(30px);
    background: #fff;
    border-radius: 50%;
    transition: 200ms (ease-in-out);

    &--medium {
      width: rem(60px);
      height: rem(60px);
    }

    &--large {
      display: flex;
      align-items: center;
      justify-content: center;
      width: rem(100px);
      height: rem(100px);
      text-align: center;

      p {
        opacity: 1;
        transition-delay: 250ms;
      }
    }
  }
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

    &-active {
      transition-delay: 500ms;
      transform: scale(1.1);

      .slider__title {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  }

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

  &__button {
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
    background-position: center;
    opacity: .9;
    transition: all 300ms transition(out);

    &--prev {
      background-image: img-path('arrow-prev.svg');

      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    }

    &--next {
      background-image: img-path('arrow-next.svg');

      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    }
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
  // .cursor {
  //   display: none;
  // }

  .swiper-slide {
    &__title {
      font-size: rem(40px);
    }
  }
}
</style>
