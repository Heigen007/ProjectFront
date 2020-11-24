<template>
<div class = "game" v-on:keyup.enter="click" v-if="user.length > 0">
  <div class="name but">Игра: "РАНДОМ"</div>
  <div class="disk but">Правила: Выбери число от 1 до 10, в случае выйгрыша ты выйграешь в 12 раз больше!</div>
  <input type="number" class = "number but" id = 'price' autocomplete="off" placeholder="Цифра:">
  <input type="number" class = "number but" id = 'money' autocomplete="off" placeholder="Ставка:">
  <button class = "but click" @click="click">Начать!</button>
  <div class="answer-incorrect" v-if="IsNot">Неверное число</div>
  <div class="answer-correct" v-if="Is">{{number}}</div>
  <div class="answer">{{message}}</div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    user: String,
    root: String,
    balance: Number
  },
  data: function () {
    return {
      Is: false,
      number: 0,
      IsNot: false,
      message: ''
    }
  },
  methods: {
    click () {
      this.message = ''
      var k
      const value = document.getElementById('price').value
      var check = 0
      if (value && value > 0 && value < 10) {
        this.IsNot = false
        this.Is = true
        k = setInterval(() => {
          if (check < 10) {
            this.number = Math.floor(Math.random() * 10)
          } else {
            clearInterval(k)
            this.post(value)
          }
          check++
        }, 200)
      } else {
        this.IsNot = true
      }
    },
    post (value) {
      var money = document.getElementById('money').value
      value = parseInt(value)
      if (value === this.number) {
        this.message = `ВЕРНО, ВЫ Выйграли ${money * 12}$`
        const NA = {
          better: this.user,
          price: money * 12
        }
        this.fetchh(NA)
      } else {
        const NA = {
          better: this.user,
          price: -money
        }
        this.fetchh(NA)
        this.message = `НЕВЕРНО, ВЫ ТЕРЯЕТЕ ${money}$`
      }
    },
    fetchh (valueM) {
      fetch(`${this.root}game`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(valueM)
      })
      this.$emit('money', this.balance + valueM.price)
    }
  }
}
</script>

<style scoped>
.game{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.but{
  font-size: 4vh;
  margin-top: 2%;
  outline: none;
  color: #8a2101;
  border: none;
  border-radius: 10px;
}
.click{

}
.click:hover{
  background-color: #ffc6ab;
}
.number{
  background-color: #ffa9a9;
}
.disk{
  width: 50%;
  overflow: none;
  text-align: center;
}
.answer-correct{
  font-size: 5vh;
  margin-top: 3vh;
  color: #8a2101;
  position: relative;
  left: 10px;
}
</style>
