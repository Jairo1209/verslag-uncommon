<template>
  <div>
    <vimeo-player v-if="entry.vimeoId" :src="entry.vimeoId" :autoplay="true" />
    <div class="content-bpv container">
      <section v-if="entry.title" class="section-inset-t">
        <div class="row">
          <div class="col-md-7">
            <animations-fade-in>
              <h1 class="content-bpv__title h3">
                {{ entry.title }}
              </h1>
            </animations-fade-in>
          </div>
          <div class="col-md-12">
            <animations-fade-in>
              <span class="content-bpv__line" />
            </animations-fade-in>
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div v-if="entry.infoBlockTitle" class="row">
          <div class="col-md-4 mt-5">
            <animations-fade-in>
              <span class="content-bpv__info-title h6">{{ entry.infoBlockTitle }}</span>
            </animations-fade-in>
          </div>
        </div>
        <div v-if="entry.infoBlockCols" class="row d-flex justify-content-around">
          <div
            v-for="(col, key) in entry.infoBlockCols"
            :key="key "
            class="col-md-5 mt-5"
          >
            <animations-fade-in>
              <p class="content-bpv__body-text">
                {{ col.fields.bodyText }}
              </p>
            </animations-fade-in>
          </div>
        </div>
        <div v-if="entry.vimeoId" class="row">
          <div class="col-md-10 offset-md-2">
            <animations-fade-in>
              <vimeo-player class="mt-5" :src="entry.vimeoId" :autoplay="true" />
            </animations-fade-in>
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div v-if="entry.infoBlockTitleSecond" class="row">
          <div class="col-md-4 mt-5">
            <animations-fade-in>
              <span class="content-bpv__info-title h6">{{ entry.infoBlockTitleSecond }}</span>
            </animations-fade-in>
          </div>
        </div>
        <div v-if="entry.infoBlockColsSecond" class="row d-flex justify-content-between">
          <div
            v-for="(col, key) in entry.infoBlockColsSecond"
            :key="key "
            class="col-md-6 col-xl-4 mt-5"
          >
            <animations-fade-in>
              <p class="content-bpv__body-text">
                {{ col.fields.bodyText }}
              </p>
            </animations-fade-in>
          </div>
        </div>
        <Marquee
          v-if="entry.marqueeOne"
          html-tag="h3"
          class="content-bpv__marquee h3"
        >
          {{ entry.marqueeOne }}
        </Marquee>
      </section>
      <section class="section-inset-b">
        <div v-if="entry.infoBlockTitleThird" class="row">
          <div class="col-md-4">
            <animations-fade-in>
              <span class="content-bpv__info-title h6">{{ entry.infoBlockTitleThird }}</span>
            </animations-fade-in>
          </div>
        </div>
        <div class="row">
          <div v-if="entry.videoOne" class="col-sm-10 offset-sm-1 col-md-4 offset-md-0">
            <animations-fade-in>
              <video class="mt-5" controls>
                <source :src="entry.videoOne.fields.file.url" type="video/mp4">
              </video>
            </animations-fade-in>
            <span class="content-bpv__info-title h6" style="color: white;">Mobile</span>
          </div>

          <div v-if="entry.videoTwo" class="col-sm-10 offset-sm-1 col-md-7 offset-md-1">
            <animations-fade-in>
              <div v-if="entry.infoBlockBodyThird" class="centered-box__body mt-5" v-html="$md.render(entry.infoBlockBodyThird)" />
            </animations-fade-in>
            <animations-fade-in>
              <video class="mt-5" controls>
                <source :src="entry.videoTwo.fields.file.url" type="video/mp4">
              </video>
            </animations-fade-in>
            <span class="content-bpv__info-title h6" style="color: white;">Desktop</span>
          </div>
        </div>
        <div class="row">
          <div v-if="entry.videoThree" class="col-sm-10 offset-sm-1 col-md-6 offset-md-0">
            <animations-fade-in>
              <video class="mt-5" controls>
                <source :src="entry.videoThree.fields.file.url" type="video/mp4">
              </video>
            </animations-fade-in>
            <animations-fade-in>
              <span class="content-bpv__info-title h6" style="color: white;">Product overzicht - pagina</span>
            </animations-fade-in>
          </div>
        </div>
        <Marquee
          html-tag="h3"
          class="content-bpv__marquee h3"
        >
          {{ entry.marqueeOne }}
        </Marquee>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="col-md-4 mt-5">
            <animations-fade-in>
              <span class="content-bpv__info-title h6">{{ entry.infoBlockTitleFourth }}</span>
            </animations-fade-in>
          </div>
        </div>
        <div class="row d-flex justify-content-between">
          <div
            v-for="(col, key) in entry.infoBlockColFourth"
            :key="key "
            class="col-md-6 col-xl-4 mt-5"
          >
            <animations-fade-in>
              <p class="content-bpv__body-text">
                {{ col.fields.bodyText }}
              </p>
            </animations-fade-in>
          </div>
        </div>
        <div class="mt-5">
          <div class="col-md-5 mt-5">
            <animations-fade-in>
              <span class="content-bpv__info-title h6">5 | Voorbereidingsfase</span>
            </animations-fade-in>
          </div>
          <div class="col-md-5 mt-5 mb-5">
            <animations-fade-in>
              <BaseButton is-light btn-name="Bekijk Fullscreen" :link-to="entry.pdfOne.fields.file.url" />
            </animations-fade-in>
          </div>
        </div>
        <Marquee
          html-tag="h3"
          class="content-bpv__marquee h3"
        >
          {{ entry.marqueeOne }}
        </Marquee>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="col-md-4">
            <animations-fade-in>
              <span class="content-bpv__info-title h6">{{ entry.infoBlockTitleSix }}</span>
            </animations-fade-in>
          </div>
        </div>
        <div class="row d-flex justify-content-between">
          <div
            v-for="(col, key) in entry.infoBlockColSix"
            :key="key "
            class="col-md-6 col-xl-4 mt-5"
          >
            <animations-fade-in>
              <p class="content-bpv__body-text">
                {{ col.fields.bodyText }}
              </p>
            </animations-fade-in>
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="col-md-4">
            <animations-fade-in>
              <span class="content-bpv__info-title h6">{{ entry.infoBlockTitleSeven }}</span>
            </animations-fade-in>
          </div>
        </div>
        <div class="row">
          <div
            v-for="(col, key) in entry.infoBlockColSeven"
            :key="key "
            class="col-md-7 offset-md-1 mt-5"
          >
            <animations-fade-in>
              <p class="content-bpv__body-text">
                {{ col.fields.bodyText }}
              </p>
            </animations-fade-in>
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="col-md-4">
            <animations-fade-in>
              <span class="content-bpv__info-title h6">{{ entry.infoBlockTitleEight }}</span>
            </animations-fade-in>
          </div>
        </div>
        <div v-for="item, key in entry.infoBlockColEight" :key="key + 1" class="row">
          <div v-if="key % 3 === 1">
            <div class="col-md-6 offset-md-1 mt-5">
              <animations-fade-in>
                <p class="content-bpv__body-text">
                  {{ entry.infoBlockColEight[key].fields.bodyText }}
                </p>
              </animations-fade-in>
            </div>
          </div>
          <div v-if="key % 3 === 2">
            <div class="col-md-6 offset-md-4 mt-5">
              <animations-fade-in>
                <p class="content-bpv__body-text">
                  {{ entry.infoBlockColEight[key].fields.bodyText }}
                </p>
              </animations-fade-in>
              <animations-fade-in>
                <BaseButton is-light btn-name="Bekijk Fullscreen" :link-to="entry.pdfTwo.fields.file.url" />
              </animations-fade-in>
            </div>
          </div>
          <div v-if="key % 3 === 0">
            <div class="col-md-6 offset-md-6 mt-5">
              <animations-fade-in>
                <p class="content-bpv__body-text">
                  {{ entry.infoBlockColEight[key].fields.bodyText }}
                </p>
              </animations-fade-in>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { PageTransition } from '~/mixins/pagetransition.js'
export default {
  mixins: [PageTransition],
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
  }
}
</script>

<style lang="scss" scoped>
.content-bpv {
  &__title {
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: theme-color(light);
  }

  &__line {
    display: block;
    width: 100%;
    height: rem(5px);
    background-color: theme-color(light);
  }

  &__info-title {
    color: theme-color(light);
  }

  &__body-text {
    font-size: rem(17px);
  }

  &__marquee {
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: theme-color(light);
  }
}

video {
  width: 100%;
  height: auto;
}
</style>
