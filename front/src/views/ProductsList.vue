<template>
  <div class="wrapper">
    <div class="productTile"
      v-for="(product, index) in products.items"
      :key="product.body._id + index"
      :style="{background: 'url(' + require('../assets/' + product.image) + ') center no-repeat'}"
    >
      {{ product.body.title }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProductsList',
  data: () => ({
    products: Array
  }),
  async mounted () {
    console.log(this.$route.params.id)
    await axios.get('http://172.20.10.4:3000/Catalog/id/' + this.$route.params.id)
      .then(response => {
        this.products = response.data
      })
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 80vw
    height: 80vh
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    align-items: center
    grid-gap: 2%
    margin-top: 90px
    .productTile
      transition: all 1s
      width: 40%
      height: 45%
      color: white
      text-decoration: none
      border-radius: 6%
      font-size: 3rem
      color: black
      display: flex
      justify-content: center
      padding-top: 2%
      cursor: pointer
      &:hover
        align-items: center
        color: white
</style>
