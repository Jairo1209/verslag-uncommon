<template>
  <a class="btn" href="#">{{ btnName }}</a>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  max-width: rem(300px);
  padding: rem(10px) rem(15px);
  margin: 0 auto;
  color: theme-color(light);
  border: solid rem(2px) theme-color(light);
}
</style>
