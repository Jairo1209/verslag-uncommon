<template>
  <div
    class="menu"
    :class="{ 'is-open' : menuIsOpen }"
  >
    <nav class="menu__nav">
      <ul class="list-unstyled menu__list">
        <li v-for="(item, key) in entry.menuItem" :key="key" class="menu__item" @mouseover="isShown(key)" @mouseleave="notShown(key)">
          <NuxtLink
            ref="button"
            :key="key"
            class="menu__link"
            :to="item.fields.menuLink"
          >
            {{ item.fields.name }}
          </NuxtLink>
          <div
            ref="preImg"
            class="preview-img"
          >
            <div class="preview-img__inner" :style="`transform: translate3d(${item.fields.x}px, ${item.fields.y}px, 0)`">
              <img :src="`${item.fields.menuImg.fields.file.url}?fit=fill&w=2000&h=1500&q=80&fm=jpg&fl=progressive`">
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { distance } from '~/utils'

export default {
  name: 'Menu',

  // Eerste state voor data die later te veranderen is
  data () {
    return {
      mouse: {
        x: 0,
        y: 0
      }
    }
  },

  // State voor variablen die niet te veranderen zijn
  computed: {
    menuIsOpen () {
      return this.$store.state.menuIsOpen
    },
    menuItemsInStore () {
      return this.$store.state.menuItemsStore
    },
    entry () {
      return this.$store.state.entries.data.menu.entry
    }
  },

  watch: {
    menuIsOpen (isOpen) {
      if (isOpen) {
        this.playAnimation()
      }
    }
  },

  beforeDestroy () {
    this.menuAnimation()
  },

  mounted () {
    this.menuAnimation()
  },

  // hier staan functies / methods in die je aan kunt roepen in je hele component
  methods: {
    menuAnimation () {
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
    playAnimation () {
      this.animation.restart()
    },
    isShown (key) {
      this.$refs.preImg[key].classList.add('preview-img--is-shown')
    },
    notShown (key) {
      this.$refs.preImg[key].classList.remove('preview-img--is-shown')
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
  background: theme-color(dark);
  opacity: 0;

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
    height: calc(100% / 5);
    min-height: rem(100px);
    text-transform: lowercase;

    @include get-font-size(menu);
    @include headingstyles();
  }

  &__link {
    position: relative;
    display: block;
    color: theme-color(light);
    text-align: center;
    cursor: pointer;
  }
}

.preview-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 80%;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  opacity: 0;
  transition: transform 500ms transition(out), opacity 500ms transition(out);
  transform: translate3d(0, 0, 0) scaleX(.5);

  &__inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
    margin: 0;
    object-fit: cover;
    object-position: center;
  }

  &--is-shown {
    pointer-events: none;
    opacity: 1;
    transform: translate3d(0, 0, 0) scaleX(1);
  }
}

@include media-breakpoint-up(md) {
  .preview-img {
    width: 50%;
  }
}
</style>
