<template>
  <div class="case-slider">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div
          v-for="(item, key) in sliderItems"
          :key="key"
          class="swiper-slide"
        >
          <img :src="`${item.fields.sliderImg.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`" alt="">
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

  props: {
    sliderItems: {
      type: Array,
      default: undefined
    }
  },

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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;

    &--bullet {
      height: 5px;
      padding: 0 30px;
      background-color: theme-color(light);
      border-radius: 0;
      opacity: .3;
    }

    .swiper-pagination-bullet-active {
      background-color: theme-color(light);
      opacity: 1;
    }
  }
}
</style>
