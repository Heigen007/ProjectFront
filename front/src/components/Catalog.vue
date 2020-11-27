<template>
  <div class="wrapper">
    <div class="catalogs">
      <router-link
        v-for="(catalog, index) in Catalogs"
        :key="catalog.title + index"
        :to="`/${catalog._id}`"
        :style="{background: 'url(' + require('../assets/' + catalog.image) + ') center no-repeat'}"
        class="catalogTile"
      >
      {{ catalog.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Catalog',
  data: () => ({
    Catalogs: []
  }),
  async mounted () {
    await axios.get('http://localhost:3000/Catalog')
      .then((response) => {
        this.Catalogs = response.data
        console.log(this.Catalogs)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="sass" scoped>
  .wrapper
    width: 100vw
    height: 100vh
    background-color: darken(#fff, 6.25%)
    display: flex
    justify-content: center
    align-items: center
    perspective: 500px
  .catalogs
    width: 80%
    height: 80%
    display: flex
    flex-wrap: wrap
    justify-content: space-evenly
    align-items: center;
    grid-gap: 6%
    transform-style: preserve-3d
    .catalogTile
      transition: all 1s
      width: 25%
      height: 40%
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
