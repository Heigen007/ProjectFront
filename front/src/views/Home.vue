<template>
  <div class="wrapper">
    <Carousel :carouselData="carouselData" :interval="5000" />
    <Catalog />
    <Delivery />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Catalog from '../components/Catalog.vue'
import Delivery from '../components/Delivery.vue'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    Catalog,
    Carousel,
    Delivery
  },
  data: () => ({
    carouselData: null
  }),
  async mounted () {
    await axios.get('http://localhost:3000/HeaderCarousel')
      .then(response => {
        this.carouselData = response.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100%
</style>
