<template>
  <div class="">
    <LayoutHero :src="image" />
    <div style="height: 2000px;" />
  </div>
</template>

<script>
const slugs = ['ocean', 'desert', 'forest']

export default {
  asyncData ({ params, app }) {
    if (slugs.includes(params.slug)) {
      app.head.bodyAttrs = { class: `theme-${params.slug}` }

      return {
        image: require(`~/assets/img/${params.slug}.jpg`)
      }
    } else {
      // eslint-disable-next-line
      console.log('404 komt hier')
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
