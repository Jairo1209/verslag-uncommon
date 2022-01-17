<template>
  <div class="homepage-container">
    <div class="slider slider__wrapper">
      <!-- Slider main container -->
      <div ref="swiper" class="swiper">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div
            v-for="(item, key) in entry.sliderImages"
            :key="key"

            class="swiper-slide"
          >
            <n-link
              class="slider__link"
              :to="item.fields.pageLink"
              @click.prevent="onRouteChange($event, item.fields.pageLink)"
            >
              <h2
                class="slider__title h4"
              >
                {{ item.fields.imgTitle }}
              </h2>

              <div class="swiper-slide__img">
                <div class="swiper-slide__inner">
                  <img class="img" :src="`${item.fields.sliderImg.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`" alt="">
                </div>
              </div>
            </n-link>
          </div>
        </div>
      </div>
      <div class="swiper-btn-wrapper">
        <div
          class="swiper__button swiper__button--prev"
        />
        <div
          class="swiper__button swiper__button--next"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Navigation, Pagination, Mousewheel } from '~/plugins/swiper.js'
export default {
  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'binnenkomstPagina',
      id: '7ynFk7OQLuq3p9QMMEai6p'
    })
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.binnenkomstPagina.entry
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
    activeSlideClass (key, slides) {
      const bodyClass = slides[key].dataset.bodyClass
      document.body.removeAttribute('class')
      document.body.classList.add(bodyClass)
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  &__wrapper {
    width: 100%;
    height: 100vh;
    background-color: theme-color(dark);
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

  body.theme-dark & {
    background: theme-color(dark);
  }

  body.theme-light & {
    background: theme-color(light);
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
    z-index: 1;
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
    }

    &--next {
      background-image: img-path('arrow-next.svg');
    }

    &--prev,
    &--next {
      &:hover {
        cursor: pointer;
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
