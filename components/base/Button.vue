<template>
  <a
    class="btn"
    href="#"
    :class="{ 'btn__primary' : isPrimary, 'btn__light' : isLight }"
  >{{ btnName }}</a>
</template>

<script>
export default {
  props: {
    btnName: {
      type: String,
      default: ''
    },
    isPrimary: {
      type: Boolean,
      default: false
    },
    isLight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  max-width: rem(300px);
  padding: rem(10px) rem(15px);
  text-align: center;
  transition: box-shadow .5s, color .25s;

  &__primary {
    color: theme-color(primary);
    border: solid rem(2px) theme-color(primary);
    box-shadow: inset 0 0 0 theme-color(primary);

    &:hover {
      color: theme-color(light);
      box-shadow: inset 0 -80px 0 theme-color(primary);
    }
  }

  &__light {
    color: theme-color(light);
    border: solid rem(2px) theme-color(light);

    &:hover {
      color: theme-color(dark);
      box-shadow: inset 0 -80px 0 theme-color(light);
    }
  }
}
</style>
