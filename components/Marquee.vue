<template>
  <Component
    :is="htmlTag"
    class="marquee"
    :style="`--animation-speed: ${speed}s`"
    :class="[
      className,
      {
        'marquee--padding' : withBorders,
        'marquee--reversed' : reversed,
        'marquee--with-borders': withBorders
      }
    ]"
  >
    <div class="marquee__wrapper">
      <div class="marquee__inner">
        <span class="marquee__inner-item"><slot /></span>
        <span class="marquee__inner-item"><slot /></span>
      </div>
    </div>
    <div class="marquee__wrapper">
      <div class="marquee__inner">
        <span class="marquee__inner-item"><slot /></span>
        <span class="marquee__inner-item"><slot /></span>
      </div>
    </div>
  </Component>
</template>

<script>
const MODIFIERS = ['primary', 'light']
export default {
  name: 'Marquee',
  props: {
    withBorders: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 50
    },
    textModifier: {
      type: String,
      default: 'light',
      validator: v => MODIFIERS.includes(v)
    },
    htmlTag: {
      type: String,
      default: 'div'
    },
    reversed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className () {
      return `marquee--${this.textModifier}`
    }
  }
}
</script>

<style lang="scss">
.marquee {
  --animation-speed: 50s;

  position: relative;
  display: flex;
  width: 100%;
  margin: 0;
  overflow: hidden;
  color: theme-color(primary);
  text-transform: lowercase;
  pointer-events: none;

  &__wrapper {
    display: inline-flex;
    will-change: transform;
    -webkit-backface-visibility: hidden;
  }

  &__inner {
    display: inline-flex;
    white-space: nowrap;
    animation: marqueeAnimation var(--animation-speed) linear infinite;
  }

  &__inner-item {
    &::after {
      content: '\00a0';
    }
  }

  &--with-borders {
    &::before,
    &::after {
      position: absolute;
      right: 0;
      left: 0;
      width: 80%;
      max-width: rem(map-get($container-max-widths, md));
      height: rem(2px);
      margin: 0 auto;
      content: '';
      background: theme-color(light);

      @include media-breakpoint-up(md) {
        width: calc(100% - #{rem(60px)});
      }
    }

    &::before {
      top: 0;
    }

    &::after {
      bottom: 0;
    }
  }

  &--padding {
    padding-top: rem(40px);
    padding-bottom: rem(40px);
  }

  &--light {
    color: theme-color(light);
  }

  &--primary {
    color: theme-color(primary);
  }

  &--reversed {
    .marquee__inner {
      animation: marqueeAnimation 50s linear infinite reverse;
    }
  }
}

@keyframes marqueeAnimation {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-100%, 0, 0); }
}

@keyframes marqueeAnimationReversed {
  from { transform: translate3d(-100%, 0, 0); }
  to { transform: translate3d(0, 0, 0); }
}
</style>
