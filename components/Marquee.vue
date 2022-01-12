<template>
  <Component
    :is="htmlTag"
    class="marquee"
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
    htmlTag: {
      type: String,
      default: 'div'
    },
    reversed: {
      type: Boolean,
      default: false
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
  padding: 25px 0;
  margin: 0;
  overflow: hidden;
  color: theme-color(light);
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
