/**
 * GSAP
 */

// eslint-disable-next-line
import Vue from 'vue';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
Vue.prototype.$gsap = gsap

export default Vue.prototype.$gsap
export { ScrollTrigger }
