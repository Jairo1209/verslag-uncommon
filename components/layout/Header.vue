<template>
  <header class="header" :class="{ 'has-another-color' : changeMenuColor }">
    <div class="header__bar">
      <div class="header__logo" @click.prevent="onClick">
        {{ logoText }}
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
      logoText: 'logo-text'
    }
  },

  methods: {
    onClick (e) {
      this.changeMenuColor = !this.changeMenuColor
    }
  }
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;

  &__bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: rem(60px);
    padding: 0 rem(30px);
    background: gray;
  }

  &.has-another-color {
    background: pink;
  }

  &__logo {
    z-index: 999;
    color: white;
  }
}
</style>
