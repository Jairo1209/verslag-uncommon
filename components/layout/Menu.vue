<template>
  <div
    class="menu"
    :class="{ 'is-open' : menuIsOpen }"
  >
    <nav>
      <ul>
        <li>
          <NuxtLink class="nav-link" to="/forest">
            Forest
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/ocean">
            Ocean
          </NuxtLink>
        </li>
        <li>
          <NuxtLink class="nav-link" to="/desert">
            Desert
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
      } else {
        this.closeAnimation()
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
    this.animation = gsap.fromTo('.nav-link',
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        paused: true
      })
  },

  // hier staan functies / methods in die je aan kunt roepen in je hele component
  methods: {
    playAnimation () {
      this.animation.play()
    },
    closeAnimation () {
      this.animation.reverse()
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

  &.is-open {
    visibility: visible;
    opacity: 1;
  }
}

nav {
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: calc(100vh / 6);
    font-family: 'Kaisei Tokumin', serif;
    font-size: rem(50px);
    font-style: normal;
    font-weight: bold;
  }
}

.nav-link {
  color: white;
  cursor: pointer;
}
</style>
