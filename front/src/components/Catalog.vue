<template>
  <div class="wrapper">
    <div class="catalogs"
      v-for="catalog in Catalogs"
      :key="catalog.title">
      <router-link :to="`/${Catalog.id}`" class="catalogTile" :style="{background: 'url(' + require('../assets/' + catalog.image) + ') center no-repeat'}">
        <div class="title">{{ catalog.title }}</div>
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
  .catalogs
    width: 100%
    height: 100%
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    grid-template-rows: 1fr 1fr
</style>
