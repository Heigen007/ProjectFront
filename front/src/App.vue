<template>
  <div class="home">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/theFooter.vue'
export default {
  name: 'Home',
  components: {
    Header,
    Footer
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
