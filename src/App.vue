<template>
  <div id="app">
    <div class="wrapper">
      <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light" style="background-color: rgb(212, 154, 106);padding:5px 16px">
          <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-done d-block"></span>
            <span class="navbar-brand" style="font-size: 30px; align: center;">Vendoring</span>
            <div class="w-100 text-right" style="padding-top:6px;padding-bottom:4px">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link @click.native="closeMenu()" to="/" class="nav-link">尋找</router-link>
              </li>
              <li class="nav-item">
                <router-link @click.native="closeMenu()" to="/Point" class="nav-link">我的點數</router-link>
              </li>
              <li class="nav-item">
                <router-link @click.native="closeMenu()" to="/Sale" class="nav-link">熱銷排行</router-link>
              </li>
              <li class="nav-item">
                <router-link @click.native="closeMenu()" to="/Member" class="nav-link">會員中心</router-link>
              </li>
              <li class="nav-item">
                <router-link @click.native="closeMenu()" to="/Login" class="nav-link" v-show="!login">登入</router-link>
              </li>
              <li class="nav-item">
                <a type="button" @click="logout" v-show="login" class="nav-link">登出</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div class="main">
          <router-view/>      
      </div>
    </div>
  </div>
</template>

<script>
import { db } from './db'
import $ from 'jquery';
export default {
  created(){
        db.auth().onAuthStateChanged(user=>{
            if(user){
                this.login = true;
            }
            else{
                this.login = false;
            }
        })
    },
    data(){
        return{
            login: false
        }
    },
  methods: {
      closeMenu() {
          $('#navbarSupportedContent').collapse('hide');
      },
      logout(){
            db.auth().signOut();
            $('#navbarSupportedContent').collapse('hide');
            const options = {
                position: 'bottom-center',
                duration : 4000,
            }
            this.$toasted.show('您已成功登出!!', options)
        }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
html,body,#app {
  font-family: "Microsoft JhengHei", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #503d2c;
}
.navbar-brand{
  font-family: "Lobster", sans-serif;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #f7e6c1;
    }
  }
}
.wrapper {
  margin: auto;
  width: 100%;
  height: 100%;
  overflow: hidden;  
}

.main {
  height: calc(100vh - 60px);
}
</style>
