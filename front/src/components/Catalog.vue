<template>
  <div class="wrapper">
    <div class="catalog" v-for="(Catalog, key) in Catalog" :key="key">
      <img class = "photo item"  :id = "`${key}`" :src = "`../assets/flow.png`">
      <img class = "photo item"  :id = "`${key}`" src = "../assets/flow.png">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Catalog',
  data: () => ({
    Catalog: Array
  }),
  methods: {

  },
  mounted () {
    axios.get('http://172.20.10.2:3000/Catalog')
      .then((response) => {
        console.log(response.data)
        console.log(this.Catalog)
        this.Catalog = response.data
        console.log(this.Catalog)
      })
  }
}
</script>

<style  scoped>
  .wrapper{
    width: 100%;
    height: calc(100vh - 100px);
    background-color: darken(#fff, 6.25%);
  }
  .catalog {
    border: 1px solid red;
  }
  .photo {
    width: 10vw;
    float: left;
    margin-left: 15vw;
    margin-top: 10vh;
  }
  .item{
    width: 20vw;
  }
</style>
