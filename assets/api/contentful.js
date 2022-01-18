/**
 * Contentful API
 *
 * nuxt-boilerplate
 *
 * @author Uncommon
 * @author Rutger Bakker <rutger@getuncommon.digital>
 */

const contentful = require('contentful')

const space = process.env.CTF_SPACE_ID
const accessToken = process.env.CTF_CDA_ACCESS_TOKEN
const environment = process.env.CTF_ENVIRONMENT
const host = process.env.PREVIEW_MODE === 'true' ? 'preview.contentful.com' : ''

export default {
  createClient () {
    return contentful.createClient({
      space,
      accessToken,
      environment,
      host
    })
  }
}
