<template>
  <div class="slider slider__wrapper">
    <div ref="swiper" class="swiper">
      <div class="swiper-wrapper">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, Pagination, Autoplay } from 'swiper'
export default {
  name: 'HomepageSlider',

  mounted () {
    // const Swiper = swiper.Swiper
    Swiper.use([Pagination, Autoplay])

    this.swiper = new Swiper(this.$refs.swiper, {
      autoplay: true,
      spaceBetween: 50,
      centeredSlides: true,
      speed: 1300,
      allowTouchMove: false,
      loop: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 50
        }
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.slider {
  overflow: hidden;
  pointer-events: none;
}

.swiper-slide {
  &__inner {
    img {
      width: 100%;
      max-width: 600px;
      height: 100%;
      max-height: 275px;
      overflow: hidden;
      object-fit: cover;
    }
  }
}

@include media-breakpoint-up(md) {
  .swiper-slide__inner {
    img {
      max-height: 375px;
    }
  }
}
</style>
