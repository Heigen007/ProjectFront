<template>
  <div class="wrapper">
    <div class="CarouselContainer">
      <div class="CarouselTracker">
        <CarouselItem class="theCarouselItem"
          v-for="item in carouselData"
          :key="item.id"
          :item_data="item"
          :style="{ 'transform': 'translateX(-' + 100 * currentSlideIndex + '%)','transition': 'all ease 2.5s'}"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselItem from '@/components/CarouselItem.vue'

export default {
  name: 'Carousel',
  data: () => ({
    currentSlideIndex: 0
  }),
  components: {
    CarouselItem
  },
  props: {
    carouselData: {
      type: Array,
      default: () => []
    },
    interval: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    if (this.interval > 0) {
      const vm = this
      setInterval(function () {
        vm.nextSlide()
      }, vm.interval)
    }
  },
  methods: {
    nextSlide () {
      if (this.currentSlideIndex < this.carouselData.length - 1) this.currentSlideIndex++
      else this.currentSlideIndex = 0
    }
  }
}
</script>

<style lang="sass" scoped>
  $itemCount: 1
  .wrapper
    width: 100vw
    height: 100vh
    .CarouselContainer
      height: 100%
      width: 100%
      overflow: hidden
      margin: 0 auto
      position: relative
      .nextSlide
        position: absolute
        right: 0
        top: 0
        height: 100%
        width: 5%
        opacity: 0.7
        background: linear-gradient(to right, rgba(255, 255, 255, 0.0), rgba(50, 50, 50, 0.8))
        outline: none
        border: none
        font-size: 4vh
        color: white
      .prevSlide
        position: absolute
        left: 0
        top: 0
        height: 100%
        width: 5%
        opacity: 0.7
        background: linear-gradient(to left, rgba(255, 255, 255, 0.0), rgba(50, 50, 50, 0.8))
        outline: none
        border: none
        font-size: 4vh
        color: white
      .prevSlide:hover, .nextSlide:hover
        opacity: 1
      .CarouselTracker
        display: flex
        .theCarouselItem
          min-width: 100% / $itemCount
</style>
