<template>
  <div class="wrapper">
    <div class="CarouselContainer">
      <div class="CarouselTracker">
        <CarouselItem class="theCarouselItem"
          v-for="item in carouselData"
          :key="item.id"
          :item_data="item"
          :style="{ 'transform': 'translateX(-' + 100 * currentSlideIndex + '%)','transition': 'all ease 1s'}"
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
  }
}
</script>

<style lang="sass" scoped>

</style>
