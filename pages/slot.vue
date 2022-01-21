<template>
  <div>
    <LayoutHero
      v-if="entry.heroImg.fields.file.url"
      :src="`${entry.heroImg.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`"
      :title-name="entry.title"
    />
    <div class="content-slot container">
      <section class="section-inset-y">
        <div class="row">
          <div class="centered-box col-md-10 offset-md-1">
            <animations-fade-in>
              <h3 v-if="entry.infoBlockTitle" class="centered-box__title h4">
                {{ entry.infoBlockTitle }}
              </h3>
            </animations-fade-in>
            <animations-fade-in>
              <p v-if="entry.infoBlockBody" class="centered-box__body">
                {{ entry.infoBlockBody }}
              </p>
            </animations-fade-in>
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div
              v-for="(item, key) in entry.accordeon"
              :key="key"
              class="accordeon-item"
            >
              <animations-fade-in>
                <button ref="accordion" class="accordion">
                  <h6 v-if="item.fields.accordeonTitle" class="h6">
                    {{ item.fields.accordeonTitle }}
                  </h6>

                  <div class="accordion__cross">
                    <span class="cross-line" />
                    <span class="cross-line" />
                  </div>
                </button>
                <div v-if="item.fields.accordeonBody" ref="panel" class="panel">
                  <p>{{ item.fields.accordeonBody }}</p>
                </div>
              </animations-fade-in>
            </div>
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="centered-box col-md-10 offset-md-1">
            <animations-fade-in>
              <h3 v-if="entry.infoBlockTitleSecond" class="centered-box__title h4">
                {{ entry.infoBlockTitleSecond }}
              </h3>
            </animations-fade-in>
            <animations-fade-in>
              <p v-if="entry.infoBlockBodySecond" class="centered-box__body">
                {{ entry.infoBlockBodySecond }}
              </p>
            </animations-fade-in>
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
  async fetch ({ store }) {
    await store.dispatch('entries/getEntry', {
      name: 'slotPage',
      id: '6LfXnDv5zPq4fwRmpO313q'
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
      return this.$store.state.entries.data.slotPage.entry
    }
  },

  mounted () {
    this.accordeon()
  },

  methods: {
    accordeon () {
      const acc = this.$refs.accordion
      let i
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click',
          function () {
            this.classList.toggle('active')
            const panel = this.nextElementSibling
            if (panel.classList.contains('active')) {
              panel.classList.remove('active')
            } else {
              panel.classList.add('active')
            }
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 18px;
  font-size: 15px;
  color: theme-color(light);
  text-align: left;
  cursor: pointer;
  border: none;
  outline: none;

  &__cross {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
  }

  span {
    display: block;
    width: 100%;
    height: rem(2px);
    background-color: theme-color(light);
    transition: opacity .1s ease;

    &:nth-of-type(1) {
      position: absolute;
      top: 50%;
    }

    &:nth-of-type(2) {
      position: absolute;
      top: 50%;
      transform: rotate(90deg);
    }
  }

  h6 {
    color: white;
  }

  &.active {
    span {
      &:nth-of-type(2) {
        opacity: 0;
      }
    }
  }
}

.panel {
  max-height: 0;
  padding: 0 18px;
  overflow: hidden;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1);
}

.active {
  max-height: 800px;
  transition: max-height 1s ease-in-out;
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

</style>
