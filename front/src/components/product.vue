<template>
  <div class="wrapper">
    <div class="top">
      <div class="image" :style="{background: 'url(' + require('../assets/' + product.items[0].image) + ') center no-repeat'}"></div>
      <div class="centent">
        <div class="title">{{ product.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'roduct',
  data: () => ({
    product: Object
  }),
  async mounted () {
    await axios.get('http://172.20.10.3:3000/Catalog/id/' + this.$route.params.id)
      .then(response => {
        this.product = response.data
        console.log(this.product)
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
      &:hover
        align-items: center
        color: white
</style>
