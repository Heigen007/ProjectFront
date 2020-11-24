<template>
<div>
  <div class="app" >Auccion</div>
  <div class="buttons" v-if="auc[aucId].time.minut >= 0 && auc[aucId].time.second > 0">
    <div class = "title but"><b>Название: </b>{{auc[aucId].title}}</div>
    <div class="text but"><b>Описание: </b>{{auc[aucId].text}}</div>
    <img :src="`http://localhost:3000/${auc[aucId].photo}`">
    <div class="price but"><b>Цена: </b>{{auc[aucId].price}}</div>
    <div class="step but"><b>Шаг: </b>{{auc[aucId].step}}</div>
    <div class="time but"><b>Время окончания: </b>{{auc[aucId].time.minut}}:{{auc[aucId].time.second}}</div>
    <div class="bet"><button class = "betbtn" @click="click">Поднять</button></div>
    <div class="but">Последнюю ставку сделал: {{auc[aucId].better}}</div>
    <div class="is" v-if="Is">Недостаточный баланс!!!</div>
  </div>
</div>

</template>

<script>

export default {
  name: 'MainStr',
  props: {
    auc: Array,
    aucId: Number,
    user: String,
    root: String,
    balance: Number
  },
  data: function () {
    return {
      Is: false
    }
  },
  methods: {
    click () {
      if (this.user != null && this.balance - this.auc[this.aucId].price - this.auc[this.aucId].step >= 0) {
        const Bet = {
          price: this.auc[this.aucId].price + this.auc[this.aucId].step,
          better: this.user,
          title: this.auc[this.aucId].title
        }
        fetch(`${this.root}bet`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify(Bet)
        })
      } else {
        this.Is = true
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
    auc: function (newV, oldV) {
      if (this.auc[this.aucId].time.second === 1 && this.auc[this.aucId].time.minut === 0) {
        if (this.auc[this.aucId].better === this.user && this.balance - this.auc[this.aucId].price >= 0) {
          const Buy = {
            price: this.auc[this.aucId].price,
            better: this.user,
            title: this.auc[this.aucId].title
          }
          fetch(`${this.root}buy`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(Buy)
          })
          this.$emit('money', this.balance - this.auc[this.aucId].price)
        }
      }
    }
  }
}
</script>

<style scoped>
.app{
  text-align: center;
  font-size: 400%;
  color: #e28a61;
}
.but{
  color:#8a2101;
}
.button{
    font-size: 4vh;
    background-color: #ffa377;
    outline: none;
    border: none;
    border-radius: 10px;
}
.buttons{
  text-align: center;
  font-size: 250%;
  border: 5px solid #8a2101;
  margin-top: 2vh;
  border-radius: 10px;
  padding: 1vh;
}
img{
  width: 15vw;
}
.betbtn{
  width: 15vw;
  height: 5vh;
  font-size: 2vw;
  background-color: #ffa377;
  border: 3px solid #8a2101;
  color:#8a2101;
  border-radius: 10px;
}
.betbtn:hover{
      background-color: #ffc6ab;
}
</style>
