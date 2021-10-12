import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Point from '../views/Point.vue'
import Member from '../views/Member.vue'
import Wallet from '../views/Wallet.vue'
import Sale from '../views/Sale.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import History from '../views/History.vue'
import Account from '../views/Account.vue'
import firebase from "firebase";
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Point',
    name: 'Point',
    component: Point
  },
  {
    path: '/Member',
    name: 'Member',
    component: Member
  },
  {
    path: '/Wallet',
    name: 'Wallet',
    component: Wallet
  },
  {
    path: '/Sale',
    name: 'Sale',
    component: Sale
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/History',
    name: 'History',
    component: History,
    meta: { requiresAuth: true}
  },
  {
    path: '/Account',
    name: 'Account',
    component: Account,
    meta: { requiresAuth: true}
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if(requiresAuth && !currentUser){
    next('/Login')
  }else if(requiresAuth && currentUser){
    next()
  }else{
    next()
  }
});

export default router
