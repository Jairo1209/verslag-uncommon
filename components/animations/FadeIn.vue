<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AnimationsFadeIn',
  mounted () {
    this.fade()
  },

  beforeDestroy () {
    this.fade()
  },
  methods: {
    fade () {
      this.tl = this.$gsap.timeline({
        scrollTrigger: {
          trigger: this.$el,
          start: 'top 800',
          end: 'top 300'
        },
        defaults: {
          stagger: 0.5,
          force3D: true,
          ease: 'power4.out',
          duration: 1.5
        }
      })
      this.tl.fromTo(this.$el, {
        y: 100,
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1
      })
    }
  }
}
</script>
