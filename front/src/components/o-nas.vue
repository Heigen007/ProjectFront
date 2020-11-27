<template>
  <div class = "o-nas">
        <div class="text2">
          <b>О НАС</b>
          <h3>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de</h3>
        </div>
      <div class="text">
          <img src="../assets/Worker.jpg">
          <img class = "img2" src="../assets/Worker2.jpg">
          <div class = "o">
          <b>ПОЧЕМУ МЫ?</b>
          <h2>Потому что: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more</h2>
          </div>
      </div>
       </div>
</template>

<script>

export default {
  name: 'MainStr',
  props: {
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
*{
    background-color: #efefef;
}
img{
    width: 20vw;
    float:left;
}
.o{
    text-align: center;
    float: right;
    width: 50%;
}
b{
    font-size: 50px;
}
.img2{
    margin-left: -20px;
    margin-top: 40px;
}
.text{
    width: 100%;
}
.text2{
    text-align:center;
    width: 50%;
}
</style>
