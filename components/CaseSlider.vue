<template>
  <div class="case-slider">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~/assets/img/UNCOMMON_082.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~/assets/img/UNCOMMON_082.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~/assets/img/UNCOMMON_082.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~/assets/img/UNCOMMON_082.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~/assets/img/UNCOMMON_082.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~/assets/img/UNCOMMON_082.jpg" alt="">
        </div>
        <div class="swiper-slide">
          <img src="~/assets/img/UNCOMMON_082.jpg" alt="">
        </div>
      </div>
      <div class="case-slider__pagination" />
    </div>
  </div>
</template>
<script>
import swiper from '~/plugins/swiper.js'

export default {
  name: 'CaseSlider',
  mounted () {
    const { Swiper, Pagination, Mousewheel, Navigation } = swiper

    Swiper.use([Pagination, Mousewheel, Navigation])

    this.swiper = new Swiper('.swiper', {
      spaceBetween: 50,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.case-slider__pagination',
        clickable: true,
        renderBullet: (index) => {
          return '<span class="swiper-pagination-bullet case-slider__pagination--bullet"></span>'
        }
      },
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
<style lang="scss">
.case-slider {
  position: relative;
  width: 100%;
  overflow: hidden;

  &__pagination {
    bottom: 0;

    &--bullet {
      height: 5px;
      padding: 0 30px;
      background: red;
      border-radius: 0;

      &.swiper-pagination-bullet-active & {
        background: green;
      }
    }
  }
}
</style>
