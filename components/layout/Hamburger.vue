<template>
  <button
    ref="hamburger"
    :class="{ 'is-open' : menuIsOpen }"
    class="hamburger"
    type="button"
    @click="toggleHamburger"
  >
    <span />
    <span />
  </button>
</template>

<script>
export default {
  name: 'Hamburger',

  computed: {
    menuIsOpen () {
      return this.$store.state.menuIsOpen
    }
  },

  methods: {
    toggleHamburger () {
      this.$store.commit('setMenuState', !this.menuIsOpen)
    }
  }
}
</script>

<style lang="scss" scoped>
$hamburger-width: rem(40px);

.hamburger {
  position: relative;
  z-index: 10;
  width: $hamburger-width;
  height: rem(30px);

  span {
    position: absolute;
    top: 50%;
    width: $hamburger-width;
    height: rem(2px);
    background-color: white;
    transition: transform 300ms transition(outquint), background-color 300ms transition(outquint);

    &:nth-of-type(1) {
      transform: translate3d(-50%, rem(-7px), 0);
    }

    &:nth-of-type(2) {
      transform: translate3d(-50%, rem(7px), 0);
    }
  }

  &.is-open {
    span {
      background-color: white;
    }

    span:nth-of-type(1) {
      transform: translate3d(-50%, -50%, 0) rotateZ(-16deg);
    }

    span:nth-of-type(2) {
      transform: translate3d(-50%, -50%, 0) rotateZ(16deg);
    }
  }
}
</style>
