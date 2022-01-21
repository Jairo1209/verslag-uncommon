export const PageTransition = {
  transition: {
    css: false,
    mode: 'out-in',
    leave (el, done) {
      this.$gsap.fromTo('.pagetransition', {
        y: '120%'
      }, {
        y: 0,
        duration: 1,
        ease: 'power4.inOut',
        force3D: true,
        onComplete: () => {
          this.$store.commit('setMenuState', false)
          done()
        }
      })
    },
    enter (el, done) {
      this.$gsap.fromTo('.pagetransition', {
        y: 0
      }, {
        y: '-120%',
        duration: 1,
        ease: 'power4.inOut',
        force3D: true,
        onComplete: () => {
          done()
        }
      })
    }
  }
}
