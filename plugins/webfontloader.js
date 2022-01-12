/**
 * Webfont loader
 *
 * nuxt-boilerplate
 *
 * @author Uncommon
 * @author Rutger Bakker <rutger@getuncommon.digital>
 */

const WebFont = require('webfontloader')

export default () => {
  WebFont.load({
    google: {
      families: ['Cousine:400,700']
    },
    custom: {
      families: ['Druk Wide Bold'],
      urls: ['/fonts/fonts.css']
    },
    active: () => {}
  })
}
