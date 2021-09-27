<template>
  <div
    class="menu"
    :class="{ 'is-open' : menuIsOpen }"
  >
    <nav class="menu__nav">
      <ul class="list-unstyled menu__list">
        <li v-for="(item, key) in menuItems" :key="key" class="menu__item">
          <NuxtLink
            ref="button"
            class="menu__link"
            :to="item.link"
            @mouseover.native="mouseHoverAnimation(key, item.class), linkHover()"
            @mouseleave.native="mouseOutAnimation(key, item.class), linkHoverOut()"
          >
            {{ item.name }}
            <span class="menu__line" />
          </NuxtLink>
          <div
            class="preview-img"
            :class="{ 'preview-img--is-shown' : item.isActive }"
          >
            <div class="preview-img__inner" :style="`transform: translate3d(${item.pos.x}px, ${item.pos.y}px, 0)`">
              <img :src="item.img">
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { gsap } from 'gsap'

import forestImg from '~/assets/img/bos.jpg'
import oceanImg from '~/assets/img/oceaan.jpg'
import desertImg from '~/assets/img/desert.jpg'

import { distance } from '~/utils'

export default {
  name: 'Menu',

  // Eerste state voor data die later te veranderen is
  data () {
    return {
      mouse: {
        x: 0,
        y: 0
      },
      menuItems: [
        { name: 'Forest', link: '/forest', img: forestImg, isActive: false, class: 'theme-forest', pos: { x: 0, y: 0 } },
        { name: 'Ocean', link: '/ocean', img: oceanImg, isActive: false, class: 'theme-ocean', pos: { x: 0, y: 0 } },
        { name: 'Desert', link: '/desert', img: desertImg, isActive: false, class: 'theme-desert', pos: { x: 0, y: 0 } }
      ]
    }
  },

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

    document.addEventListener('mousemove', this.getMousePos)

    this.onResize()
    window.addEventListener('resize', this.onResize)

    gsap.ticker.add(this.render)
  },

  // hier staan functies / methods in die je aan kunt roepen in je hele component
  methods: {
    getMousePos ({ x, y }) {
      this.mouse.x = x
      this.mouse.y = y
    },
    onResize () {
      this.bounds = []

      this.menuItems.forEach((item, key) => {
        const bounds = this.$refs.button[key].$el.getBoundingClientRect()

        this.bounds.push(bounds)
      })
    },
    render () {
      this.menuItems.forEach((item, key) => {
        const distanceMouseButton = distance(this.mouse.x + window.scrollX, this.mouse.y + window.scrollY, this.bounds[key].left + this.bounds[key].width / 2, this.bounds[key].top + this.bounds[key].height / 2)

        let x = 0
        let y = 0

        if (distanceMouseButton < this.bounds[key].width * 0.7) {
          x = (this.mouse.x + window.scrollX - (this.bounds[key].left + this.bounds[key].width / 2)) * 0.3
          y = (this.mouse.y + window.scrollY - (this.bounds[key].top + this.bounds[key].height / 2)) * 0.3
        }

        this.menuItems[key].pos.x = x
        this.menuItems[key].pos.y = y
      })
    },
    playAnimation () {
      this.animation.restart()
    },
    mouseHoverAnimation (key, themeClass) {
      if (this.menuIsOpen) {
        document.body.classList.add(themeClass)
      }
      this.menuItems[key].isActive = true
    },
    mouseOutAnimation (key, themeClass) {
      if (this.menuIsOpen) {
        document.body.classList.remove(themeClass)
      }
      this.menuItems[key].isActive = false
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

<style lang="scss" scoped>
.menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  // cursor: none;
  visibility: hidden;
  background: theme-color(forest);
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
    height: calc(100% / 5);
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

.preview-img {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  width: 50%;
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
    visibility: visible;
    opacity: 1;
    transform: translate3d(0, 0, 0) scaleX(1);
  }
}
</style>
