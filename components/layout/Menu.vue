<template>
  <div
    class="menu"
    :class="{ 'is-open' : menuIsOpen }"
  >
    <nav class="menu__nav">
      <ul class="list-unstyled menu__list">
        <li class="menu__item">
          <NuxtLink class="menu__link" to="/forest">
            Forest
            <span class="menu__line" />
          </NuxtLink>
        </li>
        <li class="menu__item">
          <NuxtLink class="menu__link" to="/ocean">
            Ocean
            <span class="menu__line" />
          </NuxtLink>
        </li>
        <li class="menu__item">
          <NuxtLink class="menu__link" to="/desert">
            Desert
            <span class="menu__line" />
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'Menu',

  // State voor variablen die niet te veranderen zijn
  computed: {
    menuIsOpen () {
      return this.$store.state.menuIsOpen
    }
  },

  watch: {
    menuIsOpen (isOpen) {
      if (isOpen) {
        this.playAnimation()
      }
    }
  },

  // Eerste state voor data die later te veranderen is
  // data () {
  //   return {
  //     henk: false
  //   }
  // },

  // 1x uitgevoerd als component wordt ingeladen
  mounted () {
    this.animation = gsap.timeline({
      paused: true
    })
    this.animation.fromTo('.menu__item',
      {
        opacity: 0,
        y: -30
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out'
      }, 0.3)
  },

  // hier staan functies / methods in die je aan kunt roepen in je hele component
  methods: {
    playAnimation () {
      this.animation.restart()
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  visibility: hidden;
  background: theme-color(ocean);
  opacity: 0;
  transition: all 500ms transition(out);

  body.theme-forest & {
    background: theme-color(forest);
  }

  body.theme-desert & {
    background: theme-color(desert);
  }

  body.theme-ocean & {
    background: theme-color(ocean);
  }

  &.is-open {
    visibility: visible;
    opacity: 1;
  }

  &__nav {
    width: 100%;
    height: 100%;
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  &__item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100% / 6);
    min-height: rem(100px);
    text-transform: uppercase;

    @include get-font-size(menu);
    @include headingstyles();
  }

  &__line {
    position: absolute;
    bottom: 0;
    display: block;
    width: 100%;
    height: rem(2px);
    background-color: theme-color(light);
    opacity: 0;
  }

  &__link {
    position: relative;
    display: block;
    color: theme-color(light);
    cursor: pointer;

    &.nuxt-link-active .menu__line {
      opacity: 1;
    }
  }
}
</style>
