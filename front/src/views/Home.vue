<template>
  <div class="wrapper">
    <Carousel />
    <Catalog />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Catalog from '../components/Catalog.vue'
export default {
  name: 'Home',
  components: {
    Catalog,
    Carousel
  }
}
</script>

<style lang="sass" scoped>
</style>
