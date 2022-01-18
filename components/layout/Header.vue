<template>
  <header class="header" :class="{ 'has-another-color' : changeMenuColor }">
    <div class="header__bar">
      <div class="header__logo" @click.prevent="onClick">
        <NuxtLink
          class="logo h4"
          to="/"
          @mouseover.native="linkHover()"
          @mouseleave.native="linkHoverOut()"
        >
          {{ logoText }}
        </NuxtLink>
      </div>
      <hamburger @click.native="onClick" />
    </div>
    <LayoutMenu />
  </header>
</template>

<script>
import Hamburger from '~/components/layout/Hamburger.vue'

export default {
  name: 'Navigation',

  components: {
    Hamburger
  },

  data () {
    return {
      changeMenuColor: false,
      logoText: 'JN'
    }
  },

  methods: {
    onClick (e) {
      this.changeMenuColor = !this.changeMenuColor
    },
    linkHover () {
      this.$store.commit('setCursorMedium', true)
    },
    linkHoverOut () {
      this.$store.commit('setCursorMedium', false)
    }
  }
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;

  &__bar {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: rem(80px);
    padding: 0 rem(30px);
  }

  &__logo {
    z-index: 999;
  }

  .logo {
    font-size: 30px;
    color: theme-color(light);
    text-transform: uppercase;
  }
}
</style>
