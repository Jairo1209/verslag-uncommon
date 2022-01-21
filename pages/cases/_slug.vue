<template>
  <div class="project container section-inset-y">
    <section class="row section-inset-y justify-content-center">
      <div class="col-md-7 justify-content-center">
        <h3 class="h5 project__title line">
          Dit is lorem ipsum tekst
          om te vertellen over het project
        </h3>
        <span />
        <p class="project__body-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
    <section class="row section-inset-b">
      <img ref="heroImg" class="project__hero-img" src="~/assets/img/UNCOMMON_082.jpg" alt="">
    </section>
    <section class="row section-inset-b">
      <div class="col-md-6">
        <div class="sticky">
          <span class="h6 project__title">
            Dit is lorem ipsum tekst
            om te vertellen over het project
          </span>
          <div class="project__img">
            <img src="~/assets/img/UNCOMMON_082.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="none-sticky">
          <div class="project__img">
            <img src="~/assets/img/UNCOMMON_082.jpg" alt="">
          </div>
          <p class="project__body-text section-inset-t">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </div>
      </div>
    </section>

    <CaseSlider />
  </div>
</template>

<script>
export default {
  async fetch ({ store, route }) {
    await store.dispatch('entries/getSlug', {
      content_type: 'bpvPage',
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
      return this.$store.state.entries.data.bpvPage.slugEntry.fields
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
          markers: true,
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
    margin-top: 300px;
  }

  &__body-text {
    font-size: 17px;
    color: #666;
  }
}
</style>
