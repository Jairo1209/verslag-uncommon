<template>
  <div>
    <LayoutHero
      :src="`${entry.heroImg.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`"
      :title-name="entry.title"
    />
    <div class="content-slot container">
      <section class="section-inset-y">
        <div class="row">
          <div class="centered-box col-md-10 offset-md-1">
            <h3 class="centered-box__title h4">
              {{ entry.infoBlockTitle }}
            </h3>
            <p class="centered-box__body">
              {{ entry.infoBlockBody }}
            </p>
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
              <button class="accordion">
                <span class="h6">{{ item.fields.accordeonTitle }}</span>
              </button>
              <div class="panel">
                <p>{{ item.fields.accordeonBody }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-inset-b">
        <div class="row">
          <div class="centered-box col-md-10 offset-md-1">
            <h3 class="centered-box__title h4">
              {{ entry.infoBlockTitleSecond }}
            </h3>
            <p class="centered-box__body">
              {{ entry.infoBlockBodySecond }}
            </p>
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
      const acc = document.getElementsByClassName('accordion')
      let i
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener('click', function () {
          this.classList.toggle('active')
          const panel = this.nextElementSibling
          if (panel.style.display === 'block') {
            panel.style.display = 'none'
          } else {
            panel.style.display = 'block'
          }
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.accordion {
  width: 100%;
  padding: 18px;
  font-size: 15px;
  color: theme-color(light);
  text-align: left;
  cursor: pointer;
  border: none;
  outline: none;
  transition: .4s;

  span {
    color: white;
  }
}

.active,
.accordion:hover {
  // background-color: #ccc;
}

.panel {
  display: none;
  padding: 0 18px;
  overflow: hidden;
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
