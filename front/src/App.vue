<template>
  <div class="home">
    <Header/>
    <router-view></router-view>
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import Footer from '@/components/theFooter.vue'
export default {
  name: 'Home',
  components: {
    Header
    // Footer
  }
}
</script>

<style>
body{
  margin:0;
  padding:0;
}
.home{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
