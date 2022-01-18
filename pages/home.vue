<template>
  <div>
    <LayoutHero
      :src="`${entry.heroImg.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`"
      :title-name="entry.title"
    />
    <div class="content-home container">
      <div class="content-home__txt-block">
        <ul class="content-home__list">
          <li v-for="item, key in entry.introductioBlock" :key="key" class="content-home__list-item">
            {{ item.fields.IntroductionField }}
          </li>
        </ul>
      </div>
      <section class="section-inset-y">
        <div class="row">
          <div class="centered-box col-md-10 offset-md-1">
            <animations-fade-in>
              <h3 class="centered-box__title h4">
                {{ entry.infoBlockTitle }}
              </h3>
            </animations-fade-in>

            <animations-fade-in>
              <div class="centered-box__body" v-html="$md.render(entry.infoBlockBody)" />
            </animations-fade-in>
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="content-home__profile row">
          <div class="col-md-6 offset-md-3">
            <img
              class="content-home__profile-img"
              :src="`${entry.profileJairo.fields.file.url}?fit=fill&w=1500&h=2000&q=80&fm=jpg&fl=progressive`"
              alt=""
            >
          </div>
          <Marquee
            html-tag="h3"
            class="hero__marquee h3"
          >
            {{ entry.marquee }}
          </Marquee>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="content-home__slider">
          <HomepageSlider>
            <div
              v-for="(item, key) in entry.officeSlider"
              :key="key"
              class="swiper-slide"
            >
              <div class="swiper-slide__img">
                <div class="swiper-slide__inner">
                  <img class="img" :src="`${item.fields.sliderImg.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`" alt="">
                </div>
              </div>
            </div>
          </HomepageSlider>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="centered-box col-md-10 offset-md-1">
            <h3 class="centered-box__title h4">
              {{ entry.infoBlockTitleSecond }}
            </h3>
            <div class="centered-box__body" v-html="$md.render(entry.infoBlockBodySecond)" />
          </div>
        </div>
      </section>
      <section>
        <div class="row centered-box">
          <div class="col-md-8 offset-md-2">
            <h3 class="centered-box__title h5">
              {{ entry.videoTitle }}
            </h3>
          </div>
          <div class="col-md-10 offset-md-1">
            <vimeo-player class="mt-5" src="488052319" :autoplay="true" />
          </div>
          <div class="col-md-10 offset-md-1 mt-5">
            <div class="centered-box__body" v-html="$md.render(entry.videoBody)" />
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="row centered-box">
          <div class="col-md-8 offset-md-2">
            <h3 class="centered-box__title h4">
              {{ entry.organogramTitle }}
            </h3>
          </div>
          <div class="col-md-8 offset-md-2 mt-5 d-flex justify-content-center">
            <BaseButton is-light btn-name="Bekijk Fullscreen" :link-to="entry.organogramPdf.fields.file.url" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'homePage',
      id: '5XBUudsVL6EKIgycGORdGT'
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
      return this.$store.state.entries.data.homePage.entry
    }
  },

  mounted () {
    console.log(this.entry)
  }
}
</script>

<style lang="scss" scoped>
.content-home {
  position: relative;
  padding-top: rem(80px);
  margin-top: rem(50px);
  color: theme-color(light);

  &__txt-block {
    position: absolute;
    top: rem(-150px);
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    width: 100%;
    max-width: rem(400px);
    height: rem(225px);
    padding-left: 5%;
    background-color: theme-color(light);
  }

  &__list {
    margin: 0;
    color: theme-color(dark);
    list-style-type: none;
  }

  &__profile {
    position: relative;
    display: flex;
    align-items: flex-end;

    .marquee {
      position: absolute;
      margin-bottom: rem(150px);
    }
  }

  &__profile-img {
    border: solid rem(15px) theme-color(light);
  }
}

.centered-box {
  text-align: center;

  &__title {
    color: theme-color(light);
  }

  &__body {
    font-size: rem(18px);
  }
}

@include media-breakpoint-up(md) {
  .content-home {
    padding-top: inherit;

    &__txt-block {
      left: 5vw;
    }
  }
}
</style>
