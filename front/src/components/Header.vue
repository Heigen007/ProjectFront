<template>
<div class = "header">
  <div>
    <router-link to="/">
    <img class = "logo" src = "../assets/icon.png">
    </router-link>
  </div>
  <div class = "buttons">
    <router-link to="/auth" class = "but">Auth</router-link>
    <router-link to="/login" class = "but">Login</router-link>
    <router-link to="/auccions" class = "but">Auccions</router-link>
    <router-link to="/newAuccion" class = "but" >NA</router-link>
    <router-link to="/game" class="but bal">{{balance}}</router-link>
    <router-link to="/user" class = "but but1" >User</router-link>
  </div>
</div>

</template>

<script>

export default {
  name: 'MainStr',
  props: {
    user: String,
    balance: Number
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
.header{
  height:50px;
  background-color: #bd7c63 ;
}
.logo{
  margin-left: 5vw;
  height: 50px;
  float: left;
}
.buttons{
  margin-left: 15vw;
  display: flex;
  flex-direction: row;
}
.but{
  font-size: 200%;
  margin-left: 6vw;
  padding:6px;
  color: #ffe588;
  text-decoration: none;
}
.but1{
color: #b30000;
}
.but:hover{
  background-color: #ad704d;
  border-radius: 20px;
}
.bal{
  font-size: 210%;
  padding:6px;
  color: #ff9691;
  text-decoration: none;
}

</style>
