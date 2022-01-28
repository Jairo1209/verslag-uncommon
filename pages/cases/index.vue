<template>
  <div class="cases container section-inset-y">
    <section class="row section-inset-b mt-5">
      <div class="col-md-6 offset-md-3">
        <h1 class="h3 cases__title">
          {{ entry.title }}
        </h1>
      </div>
    </section>
    <div class="cases__wrapper">
      <section class="row justify-content-around section-inset-b">
        <div
          v-for="(item, key) in entry.caseItems"
          :key="key"
          class="col-md-5"
        >
          <n-link class="cases__item" :to="item.fields.pageLink">
            <div class="cases__item-img">
              <img :src="`${item.fields.caseImg.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`" alt="">
            </div>
            <div class="cases__item-text">
              <span class="h6">{{ item.fields.caseTitle }}</span>
            </div>
          </n-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { PageTransition } from '~/mixins/pagetransition.js'
export default {
  mixins: [PageTransition],
  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'casesOverviewPage',
      id: '1IvAKsefLoSzOw5ROERkcv'
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
      return this.$store.state.entries.data.casesOverviewPage.entry
    }
  },

  mounted () {
    console.log(this.entry)
  }
}
</script>

<style lang="scss" scoped>
.cases {
  &__title {
    margin-top: 50px;
    color: theme-color(light);
    text-align: center;
  }

  &__item {
    min-height: 500px;
  }

  &__item-img {
    position: sticky;
    top: 80px;
    min-height: 300px;
    margin-bottom: 10px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__item-text {
    position: absolute;
    bottom: 30px;

    span {
      color: theme-color(light);
    }
  }
}

@include media-breakpoint-up(md) {
  .cases {
    &__title {
      margin-top: 0;
    }

    &__item {
      min-height: 600px;
    }

    &__item-img {
      margin-bottom: 100px;
    }
  }
}
</style>
