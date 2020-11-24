<template>
<div class = "reg">
    <div class="user but">User: {{user}}</div>
    <div class = "balance but">Balance: {{balance}}</div>
    <div class="good but" v-for="(userr, key) in users" :key="key">
      <div v-if="userr.name === user">
        <div class="name">Goods:</div>
        <div class = "goods" v-for="(good, key2) in userr.good" :key="key2">
         {{good}}
        </div>
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    user: String,
    balance: Number,
    users: Array
  },
  data: function () {
    return {
      good: ''
    }
  },
  methods: {
  },
  beforeMount () {
    this.users.forEach(element => {
      if (element.name === this.user) {
        this.good = element.good
      }
    })
  }
}
</script>

<style scoped>
.but{
    font-size: 5vh;
    margin-top: 6%;
    outline: none;
    color: #8a2101;
    border: none;
    border-radius: 10px;
}
.reg{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.good.but{
  margin-top: 0;
}
.name{
  margin-top: 5vh;
}
.goods{
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
