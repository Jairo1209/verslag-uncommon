<template>
  <div>
    <vimeo-player src="488052319" :autoplay="true" />
    <div class="content-bpv container">
      <section class="section-inset-t">
        <div class="row">
          <div class="col-md-7">
            <h1 class="content-bpv__title h3">
              {{ entry.title }}
            </h1>
          </div>
          <div class="col-md-12">
            <span class="content-bpv__line" />
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="col-md-4 mt-5">
            <span class="content-bpv__info-title h6">{{ entry.infoBlockTitle }}</span>
          </div>
        </div>
        <div class="row d-flex justify-content-around">
          <div
            v-for="(col, key) in entry.infoBlockCols"
            :key="key "
            class="col-md-5 mt-5"
          >
            <p class="content-bpv__body-text">
              {{ col.fields.bodyText }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 offset-md-2">
            <vimeo-player class="mt-5" src="488052319" :autoplay="true" />
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="col-md-4 mt-5">
            <span class="content-bpv__info-title h6">{{ entry.infoBlockTitleSecond }}</span>
          </div>
        </div>
        <div class="row d-flex justify-content-between">
          <div
            v-for="(col, key) in entry.infoBlockColsSecond"
            :key="key "
            class="col-md-6 col-xl-4 mt-5"
          >
            <p class="content-bpv__body-text">
              {{ col.fields.bodyText }}
            </p>
          </div>
        </div>
        <Marquee
          html-tag="h3"
          class="content-bpv__marquee h3"
        >
          {{ entry.marqueeOne }}
        </Marquee>
      </section>
    </div>
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
      // return this.$store.state.entries.data.bpvPage.slugEntry.fields
    }
  },
  mounted () {
    console.log(this.entry)
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
    background-color: theme-color(primary);
  }

  &__info-title {
    color: theme-color(primary);
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
</style>
