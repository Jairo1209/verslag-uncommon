<template>
  <div
    class="cursor"
    :class="{'medium': sizeMedium, 'cursor--active' : cursorEnable, 'cursor--disabled': cursorDisable}"
  >
    <div
      ref="cursorInner"
      class="cursor__inner"
      :class="{'cursor__inner--medium': sizeMedium, 'cursor__inner--large': cursorEnable}"
    >
      <div
        ref="wrapperArrows"
        class="cursor__wrapper"
      >
        <div class="cursor__arrow cursor__arrow--left" />
        <div class="cursor__arrow cursor__arrow--right" />
      </div>
      <p>
        {{ buttonText }}
      </p>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'

export default {
  name: 'CustomCursor',

  data () {
    return {
      mouse: { x: 0, y: 0 },
      pos: { x: 0, y: 0 }
    }
  },

  computed: {
    buttonText () {
      return this.$store.state.buttonText
    },
    cursorDisable () {
      return this.$store.state.cursorDisable
    },
    cursorEnable () {
      return this.$store.state.cursorEnable
    },
    sizeMedium () {
      return this.$store.state.sizeMedium
    }
  },

  beforeDestroy () {
    document.removeEventListener('pointermove', this.onPointerMove)
    gsap.ticker.remove(this.onTicker)
  },

  mounted () {
    this.cursor = this.$el
    document.addEventListener('pointermove', this.onPointerMove)

    this.xSet = gsap.quickSetter(this.cursor, 'x', 'px')
    this.ySet = gsap.quickSetter(this.cursor, 'y', 'px')

    gsap.ticker.add(this.onTicker)
  },

  methods: {
    onPointerMove ({ pageX, pageY }) {
      this.mouse.x = pageX
      this.mouse.y = pageY
    },

    onTicker () {
      const dt = 1.0 - Math.pow(1.0 - 0.1, gsap.ticker.deltaRatio())

      this.pos.x += (this.mouse.x - this.pos.x) * dt
      this.pos.y += (this.mouse.y - this.pos.y) * dt

      this.xSet(this.mouse.x)
      this.ySet(this.mouse.y)
    }
  }
}
</script>

<style lang="scss">
.cursor {
  position: fixed;
  // top: -50px;
  // left: -50px;
  z-index: 99999999999999;
  pointer-events: none;

  &.medium {
    mix-blend-mode: difference;
  }

  p {
    margin: 0;
    opacity: 0;
  }

  &__arrow {
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    opacity: 0;
    transition: transform 250ms ease-in;

    &--left {
      background-image: img-path('arrow-prev.svg');
      background-position: left;
      transform: translate3d(rem(50px), 0, 0);
    }

    &--right {
      background-image: img-path('arrow-next.svg');
      background-position: right;
      transform: translate3d(rem(-50px), 0, 0);
    }
  }

  &--active & {
    &__arrow {
      opacity: 1;
      transition: transform 250ms ease-in;

      &--left {
        transform: translate3d(0, 0, 0);
      }

      &--right {
        transform: translate3d(0, 0, 0);
      }
    }
  }

  &--disabled & {
    &__arrow {
      transition: transform 250ms ease-out;

      &--left {
        transform: translate3d(50px, 0, 0);
      }

      &--right {
        transform: translate3d(-50px, 0, 0);
      }
    }
  }

  &__wrapper {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 200px;
    height: 100px;
  }

  &__inner {
    width: rem(30px);
    height: rem(30px);
    background: #fff;
    border-radius: 50%;
    transition: 200ms (ease-in-out);
    transform: translate(-50%, -50%);

    &--medium {
      width: rem(60px);
      height: rem(60px);
    }

    &--large {
      display: flex;
      align-items: center;
      justify-content: center;
      width: rem(100px);
      height: rem(100px);
      text-align: center;

      p {
        opacity: 1;
        transition-delay: 250ms;
      }
    }
  }
}

@include media-breakpoint-down(sm) {
  .cursor {
    display: none;
  }
}
</style>
