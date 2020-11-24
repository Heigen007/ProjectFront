<template>
<div class = "reg" v-on:keyup.enter="submit">
  <div class = "text">Регистрация</div>
  <input type="text" id = 'log' autocomplete="off" placeholder="Логин:"><b>Минимум 4 символа</b>
  <input type="text" id = 'pas' autocomplete="off" placeholder="Пароль:"><b>Минимум 4 символа</b>
  <div class = "c"><button class = "but"  @click="click">Зарегистрироваться</button></div>
  <div class="mistake" v-if="showmi">Введите логин и пароль!</div>
  <div class="mistake" v-if="showmiHei">Имя занято!</div>
</div>

</template>

<script>
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
    click () {
      this.NameCorrect = true
      const dar = document.getElementById('log')
      const pas = document.getElementById('pas')
      if (dar.value) {
        console.log(this.users)
        this.users.forEach(element => {
          if (element.name === dar.value) {
            console.log(1)
            this.NameCorrect = false
          }
        })
      }
      if (this.NameCorrect === false) {
        this.showmiHei = true
        this.showmi = false
      } else if (dar.value && pas.value && dar.value.length > 3 && pas.value.length > 3) {
        const user = {
          name: dar.value,
          pas: pas.value
        }
        dar.value = ''
        pas.value = ''

        fetch(`${this.root}user`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(user)
        })
        this.$emit('clickBTN', user.name, 2000)
        this.showmi = false
        this.showmiHei = false
      } else {
        this.showmi = true
        this.showmiHei = false
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
b{
  font-size: 2vh;
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
