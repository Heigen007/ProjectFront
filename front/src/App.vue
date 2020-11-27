<template>
  <div class="home">
    <Header/>
    <router-view></router-view>
    <onas/>
    <theFooter/>
    <buy/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import theFooter from '@/components/theFooter.vue'
import onas from '@/components/o-nas.vue'
import buy from '@/components/buy.vue'
export default {
  name: 'Home',
  components: {
    Header,
    theFooter,
    onas,
    buy
  },
  data: function () {
    return {
      root: 'http://localhost:3000/'
    }
  },
  computed: {},
  watch: {},
  async beforeMount () {
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
html{
  font-size: 14px;
}
.home{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
