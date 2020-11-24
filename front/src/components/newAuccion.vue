<template>
<div class = "reg" v-on:keyup.enter="submit" v-if="user != ''">
  <div class = "text">Создание аукциона</div>
  <input type="text" class = "input" id = 'title' autocomplete="off" placeholder="Заголовок:" maxlength="20">Не больше 20 символов
  <textarea id = 'text' autocomplete="off" placeholder="Описание:" maxlength="200"></textarea>Не больше 200 символов
  <input type="number" class = "input" id = 'price' autocomplete="off" placeholder="Цена:">Не больше 1500
  <input type="number" class = "input" id = 'step' autocomplete="off" placeholder="Шаг:"> Не больше 500
  <input type="file" class = "img" name="image" id = "image" @change="change" ref = "text" required multiple accept="image/*">1 файл :(
  <input type="number" class = "input" id = 'time' autocomplete="off" placeholder="Время в минутах(не больше часа):">Не больше 60 минут
  <div class = "c"><button class = "but" @click="click">Создать</button></div>
  <div class="mistake" v-if="showmi">Введите верные данные!</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    users: Array,
    root: String,
    user: String
  },
  data: function () {
    return {
      showmi: false,
      er: false,
      showmiHei: false,
      NameCorrect: true,
      image: null
    }
  },
  methods: {
    change () {
      if (this.$refs.text.files.length === null) this.image = null
      else {
        this.image = this.$refs.text.files[0]
      }
    },
    click () {
      this.UserCorrect = false
      const title = document.getElementById('title')
      const text = document.getElementById('text')
      const price = document.getElementById('price')
      const step = document.getElementById('step')
      const time = document.getElementById('time')
      const photo = document.getElementById('image')
      const fileType = photo.value.split('\\')
      if (title.value && text.value && price.value && step.value && time.value && photo.value && time.value < 61 && step.value <= 500 && price.value <= 1500 && step.value > 0 && price.value > 0 && time.value > 0) {
        const NA = {
          title: title.value,
          text: text.value,
          price: price.value,
          step: step.value,
          time: time.value,
          photo: fileType[2],
          better: 'nobody bet'
        }
        title.value = ''
        text.value = ''
        price.value = ''
        step.value = ''
        time.value = ''
        fetch(`${this.root}na`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(NA)
        })
        if (this.image) {
          const formData = new FormData()
          formData.append('image', this.image)
          axios.post('http://localhost:3000/files', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
        }
        this.showmi = false
      } else {
        this.showmi = true
      }
    },
    submit () {
      this.click()
    }
  },
  beforeMount () {
  }
}
</script>

<style scoped>
textarea{
    border: 5px solid #981500;
    width: 40vw;
    height:10vh;
    font-size: 3vh;
    margin-top: 2%;
    border-radius: 10px;
    color: #483916;
    outline: none;
}
.input{
    border: 5px solid #981500;
    width: 20vw;
    height:7vh;
    font-size: 4vh;
    margin-top: 2%;
    border-radius: 10px;
    color: #483916;
    outline: none;
}
.input:hover{
  border-color: #ff4c4c;
}
.text{
  font-size: 10vh;
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
  text-align: center;
}
.mistake{
  font-size: 30px;
  padding:10px;
  margin-left: 10px;
  color:#b11000;
}
.img{
  margin-top: 2vh;
  border: 3px solid #981500;
}

</style>
