/**
 * GSAP
 */

// eslint-disable-next-line
import Vue from 'vue'
import { Swiper, Pagination, Mousewheel, Navigation } from 'swiper'

import 'swiper/swiper-bundle.css'

Vue.prototype.$swiper = { Swiper, Pagination, Mousewheel, Navigation }
export default Vue.prototype.$swiper
