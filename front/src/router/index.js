import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import auth from '../components/auth.vue'
import login from '../components/login.vue'
import auccions from '../components/auccions.vue'
import auccion from '../components/auccion.vue'
import Hello from '../components/hello.vue'
import newAuccion from '../components/newAuccion.vue'
import user from '../components/user.vue'
import game from '../components/game.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/?',
    name: 'App',
    component: App
  },
  {
    path: '/',
    name: 'hello',
    component: Hello
  },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/auccions',
    name: 'auccions',
    component: auccions
  },
  {
    path: '/newAuccion',
    name: 'newAuccion',
    component: newAuccion
  },
  {
    path: '/auccion',
    name: 'auccion',
    component: auccion
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/game',
    name: 'game',
    component: game
  }
]

const router = new VueRouter({
  routes
})

export default router
