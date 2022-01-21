<template>
  <div class="project container section-inset-y">
    <section class="row section-inset-y mt-5">
      <div class="col-sm-8 offset-sm-2 col-md-7 offset-md-3">
        <h3 class="h5 project__title line">
          {{ entry.introTitle }}
        </h3>
        <span />
        <p class="project__body-text">
          {{ entry.introBody }}
        </p>
      </div>
    </section>
    <section class="row section-inset-b">
      <img ref="heroImg" class="project__hero-img" :src="entry.heroImg.fields.file.url" alt="">
    </section>
    <section class="row section-inset-b">
      <div class="col-md-6">
        <div class="sticky">
          <span class="h6 project__title">
            {{ entry.midSectionTitle }}
          </span>
          <div class="project__img mt-5">
            <img :src="entry.midSectionImgOne.fields.file.url" alt="">
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="none-sticky">
          <div class="project__img">
            <img :src="entry.midSectionImgTwo.fields.file.url" alt="">
          </div>
          <p class="project__body-text section-inset-t">
            {{ entry.midSectionBody }}
          </p>
        </div>
      </div>
    </section>
    <CaseSlider :slider-items="entry.caseSlider" />
    <section class="row section-inset-b">
      <div class="col-md-6 offset-md-3">
        <p class="project__body-text section-inset-t text-center">
          {{ entry.sliderText }}
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { PageTransition } from '~/mixins/pagetransition.js'
export default {
  mixins: [PageTransition],
  async fetch ({ store, route }) {
    await store.dispatch('entries/getSlug', {
      content_type: 'casePage',
      slug: route.params.slug
    })
  },

  head () {
    return {
      bodyAttrs: {
        class: 'theme-dark'
      }
    }
  },

  computed: {
    entry () {
      return this.$store.state.entries.data.casePage.slugEntry.fields
    }
  },

  mounted () {
    this.imgScale()
  },

  beforeDestroy () {
    this.imgScale()
  },
  methods: {
    imgScale () {
      this.tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.heroImg,
          start: 'top 50%',
          end: 'bottom 50%',
          scrub: 1
        },
        defaults: {
          force3D: true
        }
      })
      this.tl.fromTo(this.$refs.heroImg, {
        scale: 0.8
      }, {
        scale: 0.9
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
  color: theme-color(light);

  &__title {
    color: theme-color(light);
  }

  .line {
    &::after {
      display: block;
      width: 60%;
      height: 5px;
      margin-top: 20px;
      content: '';
      background-color: theme-color(light);
    }
  }

  .sticky {
    position: sticky;
    top: 80px;
  }

  .none-sticky {
    margin-top: 50px;
  }

  &__body-text {
    font-size: 17px;
    color: #666;
  }
}

.text-center {
  text-align: center;
}

@include media-breakpoint-up(md) {
  .none-sticky {
    margin-top: 300px;
  }
}
</style>
