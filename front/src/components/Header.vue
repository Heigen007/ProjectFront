<template>
<div class = "header">

  <div class = "buttons">
      <div class="inner-width">
        <nav class="navigation-menu">
          <a href="#"><i class="fas fa-home home"></i> Home</a>
          <a href="#"><i class="fas fa-align-left about"></i> About</a>
          <a href="#"><i class="fab fa-buffer works"></i> Works</a>
        </nav>
          <router-link to="/">
            <div class="logo"><img src="../assets/flow.png" alt=""></div>
          </router-link>
        <nav class="navigation-menu">
          <a href="#"><i class="fas fa-users team"></i> Team</a>
          <a href="#"><i class="fas fa-headset contact"></i> Contact</a>
        </nav>
      </div>
  </div>
</div>

</template>

<script>

export default {
  name: 'MainStr',
  props: {
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
*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Monotype Corvisa",sans-serif;
}
.header{
  height: 90px;
  background: #8a8a8a;
}

.inner-width{
  max-width: 100vw;
  padding: 0 10px;
  margin: auto;
}

.logo{
  padding: 20px 0;
  float: left;
  width: 20%;
  text-align:center;
}

.logo img{
  height: 70px;
}

.navigation-menu{
  width: 40%;
  float: left;
  display: flex;
  align-items: center;
  min-height: 90px;
}

.navigation-menu a{
  margin-left: 10px;
  color: #ddd;
  text-transform: uppercase;
  font-size: 14px;
  padding: 12px 20px;
  border-radius: 4px;
  transition: .3s linear;
  width: 33%;
  text-align:center;
}

.navigation-menu a:hover{
  background: #fff;
  color: #2f3640;
  transform: scale(1.1);
}

.navigation-menu i{
  margin-right: 10px;
  font-size: 25px;
}

.home{
  color: #ff6b6b;
}

.about{
  color: #0abde3;
}

.works{
  color: #feca57;
}

.team{
  color: #5f27cd;
}

.contact{
  color: #1dd1a1;
}

.menu-toggle-btn{
  float: right;
  height: 90px;
  line-height: 90px !important;
  color: #fff;
  font-size: 26px;
  display: none !important;
  cursor: pointer;
}

@media screen and (max-width:700px) {
  .menu-toggle-btn{
    display: block !important;
  }

  .navigation-menu{
    position: fixed;
    width: 100%;
    max-width: 400px;
    background: #172b4d;
    top: 90px;
    right: 0;
    display: none;
    padding: 20px 40px;
    box-sizing: border-box;
  }

  .navigation-menu::before{
    content: "";
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #172b4d;
    position: absolute;
    top: -10px;
    right: 10px;
  }

  .navigation-menu a{
    display: block;
    margin: 10px 0;
  }

  .navigation-menu.active{
    display: block;
  }
}
</style>
