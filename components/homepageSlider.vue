<template>
  <div class="slider-wrap">
    <div class="slider">
      <div class="slider-item">
        <div class="img-div">
          {{ title }}
        </div>
      </div>
      <div class="slider-item">
        <div class="img-div">
          /
        </div>
      </div>
      <div class="slider-item">
        <div class="img-div">
          /
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageSlider',

  data () {
    return {
      title: 'Ik ben een titel'
    }
  },

  computed: {},

  mounted () {
    // const sliderWrap = document.querySelector('.slider-wrap')
    // const slider = document.querySelector('.slider')

    // console.log(sliderWrap)
  }
}
</script>

<style lang="scss" scoped>
.slider-wrap {
  position: fixed;
  top: 20%;
  left: 10%;
  width: 80%;
  height: 450px;
  overflow: hidden;
  border: 1px solid black;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 4000px;
  height: 100%;
  will-change: transform;
  background-color: black;
}

.slider-item {
  position: relative;
  flex: 1;
  overflow: hidden;
}

.img-div {
  position: relative;
  top: 2.5%;
  left: 1%;
  width: 98%;
  height: 95%;
  background-position: center;
  background-size: cover;
}

</style>
