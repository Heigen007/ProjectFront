<template>
  <div class="home">
    <Header :user="user" :balance="balance"/>
    <div class = "a"></div>
    <router-view :balance="balance" :aucId="aucId" :auc="auc" :user="user" :root="root" :users="UsersList" @clickBTN="auth" @auccion="myauc" @money="money"></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  },
  data: function () {
    return {
      root: 'http://localhost:3000/',
      user: '',
      MessagesList: null,
      UsersList: [],
      auc: [],
      aucId: null,
      balance: 0
    }
  },
  computed: {},
  watch: {},
  methods: {
    auth (a, b) {
      this.user = a
      this.balance = b
    },
    myauc (id) {
      this.aucId = id
    },
    money (a) {
      this.balance = a
      console.log(this.balance)
    }
  },
  async beforeMount () {
    setInterval(async () => {
      const response = await fetch(this.root)
      if (response.ok) {
        const data = await response.json()
        this.UsersList = data.user
        this.auc = data.auc
      }
    }, 1000)
  }
}
</script>

<style>
body{
  background-color: #c0e3ff;
  margin:0;
  padding:0;
  z-index: 10;
}
.a {
  background: url(assets/img.jpg);
  width: 100%;
  background-size: cover;
  height: 100vh;
  position: fixed;
  filter: blur(5px);
  z-index: -10;
  top:0;
}
</style>
