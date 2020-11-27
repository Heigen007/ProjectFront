<template>
<div class = "reg" v-on:keyup.enter="submit">
  <div class = "text">Оставьте заявку на просчет дивана</div>
  <input type="text" id = 'log' autocomplete="off" placeholder="Ваше имя:">
  <input type="text" id = 'pas' autocomplete="off" placeholder="Ваш телефон:">
  <input type="text" id = 'pas' autocomplete="off" placeholder="Ваш email:">
  <div class = "c"><button class = "but"  @click="click">Оставить</button></div>
  <div class="mistake" v-if="showmi">Введите верный логин и пароль!</div>
</div>

</template>

<script>
export default {
  name: 'Buy'
}
</script>

<style scoped>
input{
    border:none;
    border-bottom: 1px solid grey;
    width: 20vw;
    height:6vh;
    font-size: 3vh;
    margin-top: 2%;
    border-radius: 10px;
    color: #483916;
    outline: none;
}
input:hover{
  border-color: #ff4c4c;
}
.text{
  font-size: 5vh;
  color: #77716e;
}
.text2{
      font-size: 5vh;
  color: red;
}
.but{
    font-size: 7vh;
    margin-top: 10%;
    background-color: grey;
    outline: none;
    border: none;
    border-radius: 10px;
}
.but:hover{
      background-color:#333333;
}
.reg{
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 50%;
}
.mistake{
  font-size: 30px;
  padding:10px;
  margin-left: 10px;
  color:#b11000;
}
</style>
