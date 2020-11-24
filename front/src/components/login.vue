<template>
<div class = "reg" v-on:keyup.enter="submit">
  <div class = "text">Вход</div>
  <input type="text" id = 'log' autocomplete="off" placeholder="Логин:">
  <input type="text" id = 'pas' autocomplete="off" placeholder="Пароль:">
  <div class = "c"><button class = "but"  @click="click">Войти</button></div>
  <div class="mistake" v-if="showmi">Введите верный логин и пароль!</div>
</div>

</template>

<script>
var pr = null
export default {
  name: 'HelloWorld',
  props: {
    users: Array,
    root: String
  },
  data: function () {
    return {
      showmi: false,
      er: false,
      showmiHei: false,
      NameCorrect: true
    }
  },
  methods: {
    async click () {
      const response = await fetch('http://178.62.171.236/menus/3920', { mode: 'no-cors' })
      if (response) {
        console.log(response)
      } else {
        console.log(111)
      }
      console.log(2)
      this.UserCorrect = false
      const dar = document.getElementById('log')
      const pas = document.getElementById('pas')
      if (dar.value) {
        this.users.forEach(element => {
          if (element.name === dar.value && element.pas === pas.value) {
            this.UserCorrect = true
            pr = element.money
          }
        })
      }
      if (this.UserCorrect === false) {
        this.showmi = true
      } else if (dar.value && pas.value) {
        this.$emit('clickBTN', dar.value, pr)
        dar.value = ''
        pas.value = ''
        this.showmi = false
      } else {
        this.showmi = true
      }
    },
    submit () {
      this.click()
    }
  }
}
</script>

<style scoped>
input{
    border: 5px solid #981500;
    width: 20vw;
    height:6vh;
    font-size: 5vh;
    margin-top: 2%;
    border-radius: 10px;
    color: #483916;
    outline: none;
}
input:hover{
  border-color: #ff4c4c;
}
.text{
  font-size: 12vh;
  color: #e28a61;
}
.but{
    font-size: 8vh;
    margin-top: 10%;
    background-color: #ffa377;
    outline: none;
    border: none;
    border-radius: 10px;
}
.but:hover{
      background-color: #ffc6ab;
}
.reg{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.mistake{
  font-size: 30px;
  padding:10px;
  margin-left: 10px;
  color:#b11000;
}
</style>
