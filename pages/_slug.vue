<template>
  <div class="">
    <LayoutHero :src="image" />
    <div
      style="height: 2000px;"
      class=""
    />
  </div>
</template>

<script>
import forestTxt from '~/content/forest.md'
import oceanTxt from '~/content/ocean.md'
import desertTxt from '~/content/desert.md'
const slugs = ['home', 'bpv-1', 'bpv-2', 'slot']
export default {
  asyncData ({ params, app }) {
    if (slugs.includes(params.slug)) {
      app.head.bodyAttrs = { class: `theme-${params.slug}` }

      return {
        image: require(`~/assets/img_slug/${params.slug}.jpg`)
      }
    } else {
      // eslint-disable-next-line
      console.log('404 komt hier')
    }
  },

  data () {
    return {
      txtItems: [
        { file: 'forestTxt' },
        { file: 'oceanTxt' },
        { file: 'desertTxt' }
      ]
    }
  },

  computed: {
    forestTxt () {
      return forestTxt
    },
    oceanTxt () {
      return oceanTxt
    },
    desertTxt () {
      return desertTxt
    }
  }

  // watch: {
  //   $route (params, app) {
  //     if (slugs.includes(params.slug)) {
  //       app.head.bodyAttrs.classList.remove(`theme-${params.slug}`)
  //     }
  //   }
  // }
}
</script>
