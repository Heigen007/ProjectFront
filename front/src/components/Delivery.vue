<template>
  <div class="wrapper">
    <div class="container">
      <h1>Доставка и изготовление</h1>
      <div class="columns_wrapper">
        <div class="column">
          <div><img src="../assets/mest.png"></div>
          <h1>Доставка</h1>
          <h3>Отгружаем по Казахстану и странам таможенного союза. По другим странам узнавайте у оператора.
          </h3></div>
        <div class="column">
          <div><img src="../assets/graph.png"></div>
          <h1>Изготовление</h1>
        <h3>Все товары изготавливаются только на территории Республики Казахстан, под нашим чутким контролем.
          </h3></div>
        <div class="column">
          <div><img src="../assets/tell.png"></div>
          <h1>Мы всегда вам рады</h1>
          <h3>Мы очень хотим чтобы в вашем доме появилась красивая и долговечная мебель, поэтому всегда рады вашим вопросам.
          </h3></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Delivery'
}
</script>

<style lang="sass" scoped>
  .wrapper
    height: 70vh
    width: 100vw
    background-color: #F4F4F4
    text-align: center
    .container
      width: 100%
      height: 100%
      display: flex
      align-items: center
      flex-direction: column
      padding-top: 40px
      h1
        font-family: Ubuntu,sans-serif,system-ui
        font-weight: 700 !important
        color: #111
        font-size: 2.75rem
      .columns_wrapper
        width: 80%
        height: 100%
        display: flex
        flex-direction: row
        justify-content: space-around
        margin-top: 40px
        .column
          width: 22.5%
          height: 80%
          background-color: white
          padding: 2vh
          img
            margin-top: 3vh
            width: 5vw
            height: 8vh
            padding-bottom: 3vh
          h1
            font-family: CourierNew
            font-weight: 700 !important
            color: #111
            font-size: 1.75rem
          h3
            font-family: CourierNew
            font-weight: 200 !important
            color: #111
            font-size: 1.25rem
</style>
