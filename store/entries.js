/**
 * Vuex store
 * Check https://nuxtjs.org/guide/vuex-store/ for more info
 */

import contentful from '~/api/contentful'
// import { contentTypes } from '~/config/config'

const client = contentful.createClient()

const fields = {
  entry: {},
  entries: [],
  slugEntry: {},
  fetched: false,
  entriesFetched: false,
  error: null,
  isLoading: false
}

export const state = () => ({
  data: {
    home: { ...fields },
    slot: { ...fields },
    bpvPage: { ...fields },
    informationPage: { ...fields },
    footer: { ...fields },
    productOverview: { ...fields }
  }
})

export const mutations = {
  setEntry (state, payload) {
    state.data[payload.key].entry = payload.fields
    state.data[payload.key].fetched = true
  },
  setEntries (state, payload) {
    state.data[payload.key].entries = payload.items
    state.data[payload.key].entriesFetched = true
  },
  setSlug (state, payload) {
    state.data[payload.key].slugEntry = {
      fields: payload.fields,
      product: payload.product
    }
  },
  setError (state, payload) {
    state.data[payload.key].error = payload.error
  },
  setLoading (state, payload) {
    state.data[payload.key].isLoading = payload.loading
  }
}

export const actions = {
  /**
   * Getting entries from contentful client
   * https://www.contentful.com/developers/docs/references/content-delivery-api/
   */

  /**
   * Getting a single entry
   * @param {Object} data name of the page (not related to Contentful), id from Contentful, object with options

   example:

   async fetch ({ store }) {
     await store.dispatch('entries/getEntry', {
       name: 'home',
       id: 'JLYHH34lB3DiYRRYXBf65'
       options: {}
     })

   */
  async getEntry ({ commit, rootState }, data) {
    try {
      const mergedOptions = {
        include: 4,
        locale: rootState.locale,
        ...data.options
      }

      const { fields } = await client.getEntry(data.id, {
        ...mergedOptions
      })

      if (!fields) {
        commit('setEntry', {})

        return
      }

      commit('setEntry', { key: data.name, fields })
    } catch (e) {
      commit('setError', { key: data.name, error: { statusCode: 404, message: 'Could not fetch entries.' } })
    }
  },

  /**
   * Getting entry from slug (for example: news detail page)
   * @param {Object} data content_type from Contentful, slug (route.params.slug), options
   *

   async fetch ({ store, route }) {
     await store.dispatch('entries/getSlug', {
       content_type: 'news',
       slug: route.params.slug
     })
   },
   */
  async getSlug ({ commit, rootState }, data) {
    try {
      const mergedOptions = {
        include: 4,
        locale: rootState.locale,
        ...data.options
      }

      // console.log(data)

      const { items } = await client.getEntries({
        content_type: data.content_type,
        'fields.slug': data.slug,
        ...mergedOptions
      })

      const productId = items[0].fields.shopifyProductID ? items[0].fields.shopifyProductID : null

      const productsQuery = this.$shopify.graphQLClient.query((root) => {
        root.add('node', { args: { id: productId } }, (node) => {
          node.add('id')
          node.addInlineFragmentOn('Product', (product) => {
            product.add('availableForSale')
            product.add('title')
            product.add('id')
            product.addConnection('variants', { args: { first: 10 } }, (variant) => {
              variant.add('available')
              variant.add('availableForSale')
              variant.add('compareAtPrice')
              variant.add('currentlyNotInStock')
              variant.add('id')
              variant.add('price')
              variant.add('quantityAvailable')
              variant.add('sku')
              variant.add('title')
              variant.add('weight')
              variant.add('weightUnit')
            })
          })
        })
      })

      const product = data.fetchShopify ? await this.$shopify.graphQLClient.send(productsQuery) : null

      if (!items.length) {
        commit('setSlug', {})

        return
      }

      commit('setSlug', { key: data.content_type, fields: items[0].fields, product: product ? product.model.node : {} })
    } catch (e) {
      commit('setError', { key: data.content_type, error: { statusCode: 404, message: 'Could not fetch entries.' } })
    }
  },

  /**
   * Getting multiple entries from content_type (for example: news index page)
   * @param {Object} data parent (name of store), content_type
   *

   async fetch ({ store }) {
     await store.dispatch('entries/getEntries', {
       content_type: 'news',
       parent: 'news'
     })
   },
   */
  async getEntries ({ commit, rootState }, data) {
    try {
      commit('setLoading', { key: data.parent, loading: true })

      const mergedOptions = {
        include: 4,
        locale: rootState.locale,
        ...data.options
      }

      const { items } = await client.getEntries({
        content_type: data.content_type,
        ...mergedOptions
      })

      if (!items.length) {
        commit('setEntries', [])

        return
      }

      commit('setEntries', { key: data.parent, items })
    } catch (e) {
      commit('setError', { key: data.parent, error: { statusCode: 404, message: 'Could not fetch entries.' } })
    } finally {
      commit('setLoading', { key: data.parent, loading: false })
    }
  }
}
