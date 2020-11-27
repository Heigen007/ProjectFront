<template>
  <div class="wrapper">
    <div class="top">
      <div class="first_column column">
        <h1>Контакты</h1>
        <h3>Адрес</h3>
        <h2>м. Тульская <br>г. Москва, ул. Варшавское ш. 1с6<br>ИП Шапошников Михаил Алексеевич</h2>
        <h3>Время работы</h3>
        <h2>Пн-Пт: с 9 до 18 <br> Сб: выходной<br>Вс: выходной</h2>
        <h3>+7 (777) 777-77-77</h3>
        <h2>info@flow.ru</h2>
        </div>
      <div class="second_column column">
        <div class="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d181.66160898502605!2d76.90510619330082!3d43.23914434473631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368965b9aaaaf%3A0xd069a7a565591d4e!2z0JDQutCw0LTQtdC80LjRjyDQqNCQ0JMg0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1606453357851!5m2!1sru!2skz" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="bot_wrapper">
        <div class="text">
          <h3>FLOW</h3>
          <h4>FILD YOUR SPACE</h4>
        </div>
        <div class="pictures">
          <a href="https://www.instagram.com" class="instagram"><img src="https://img.icons8.com/metro/26/000000/instagram-new.png"/></a>
          <a href="https://www.facebook.com" class="facebook"><img src="https://img.icons8.com/metro/26/000000/facebook-new--v2.png"/></a>
          <a href="https://www.youtube.com" class="youtube"><img src="https://img.icons8.com/small/32/000000/youtube.png"/></a>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'theFooter'
}
</script>

<style lang="sass" scoped>
  .wrapper
    height: 100vh
    width: 100%
    display: flex
    flex-direction: column
    background-color: #333333
    color: white
    justify-content: center
    .top
      width: 100%
      display: flex
      justify-content: center
      align-items: center
      align-self: center
      height: 60vh
      border: 1px solid red
      .column
        width: 40%
        height: 100%
        h1
          font-size: 3rem
          margin-bottom: 0px
          margin-block-end: 0.4em
        h3
          margin-block-start: 0.4em !important
          margin-block-end: 0.4em !important
          font-size: 1.75rem
        h2
          font-size: 1.25rem
          margin: 0
          padding: 0
          color: white
        h1,h2,h3
          font-family: Ubuntu,sans-serif,system-ui
          font-weight: 400
          margin-block-start: 0em
          margin-block-end: 0em
      .second_column
          display: flex
          justify-content: center
          align-items: cetner
          .map
            width: 80%
            height: 80%
            margin-top: 8vh
    .bot
      width: 100%
      height: 9%
      display: flex
      justify-content: center
      align-items: flex-end
      border: 1px solid red
      .bot_wrapper
        width: 80%
        display: flex
        flex-direction: row
        .text
          width: 80%
          h4
            margin: 0px !important
            font-size: 0.75rem
          h3
            font-size: 1rem
        .pictures
          width: 20%
          height: 20%
          margin-top: 5.5vh
          a
            margin-left: 2vw
            img
              width: 26px !important
              height: 26px !important
</style>
