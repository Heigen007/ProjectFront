<template>
<div>
  <div class = "bgtext">
    <b>АУКЦИОН</b>
    </div>
  <div class="smtext">
    <b>Мы приветствуем Вас на нашем аукционе!!!</b>
    <br>
    <b>Сдесь Вы можете поторговаться за интереснейшие товары!</b>
    <br>
    <b>Вперед - к новым товарам!</b>
    </div>
    <div class = "button">
      <router-link to="/auccions" class = "but">На аукцион!</router-link>
      <router-view></router-view>
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
.bgtext {
  font-size: 80px;
  color: #a00a0a;
  text-align: center;
  margin-top: 5vh;
}
.smtext {
  font-size: 35px;
  color: #8a2101;
  text-align: center;
  margin-top: 5vh;
}
.button {
  font-size: 60px;
  background-color: #bd7c63;
  text-align: center;
  margin-top: 5vh;
  border: 1px solid #bd7c63;
  border-radius: 25px;
  width: 46vw;
  margin-left: 28vw;
}
.button:hover{
  background-color: #a93e2d;
  border-color: #a93e2d;
  cursor: pointer;
}
.but{
  text-decoration: none;
  color:#fff935;
}
</style>
