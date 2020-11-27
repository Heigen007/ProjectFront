<template>
  <div class="home">
    <Header/>
    <router-view></router-view>
    <theFooter/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import theFooter from '@/components/theFooter.vue'
export default {
  name: 'Home',
  components: {
    Header,
    theFooter
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
*{
  box-sizing: border-box;
}
body{
  margin:0;
  padding:0;
}
html{
  font-size: 14px;
  scroll-behavior: smooth;
}
.home{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
