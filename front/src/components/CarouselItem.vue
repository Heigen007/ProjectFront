<template>
  <div class="wrapper">
    <div class="img" v-bind:style="{background: 'url(' + require('../assets/' + item_data.imageName) + ') center no-repeat'}"></div>
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  data: () => ({
  }),
  props: {
    item_data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Mulish:ital@1&display=swap')
  .wrapper
    .img
      height: 65vh
      background-size: cover !important
      display: flex
      flex-direction: column
      justify-content: space-around
</style>
