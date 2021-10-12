<template>
  <div class="back">
     <div class="container">
        <div class="row">
            <div class="col-6">
                <router-link to="/Account"><font-awesome-icon :icon="['fas', 'address-card']" size='8x' style="color: tomato;"/><br>我的帳戶</router-link>
            </div>
            <div class="col-6">
                <router-link to="/Wallet"><font-awesome-icon :icon="['fas', 'wallet']" size='8x' style="color: #D94600;"/><br>我的錢包</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <router-link to="/History"><font-awesome-icon :icon="['fas', 'history']" size='8x' style="color: #46A3FF;"/><br>消費紀錄</router-link>
            </div>
            <div class="col-6">
                <router-link to="/Login" v-show="!login"><font-awesome-icon :icon="['fas', 'sign-in-alt']" size='8x' style="color: #02F78E;"/><br>登入</router-link>
                <a type="button" v-on:click="logout" v-show="login" class="accbu"><font-awesome-icon :icon="['fas', 'sign-out-alt']" size='8x' style="color: #02F78E;"/><br><font color="blue">登出</font></a>
            </div>
        </div>
    </div> 
  </div>
</template>

<script>
import { db } from '../db'
export default {
    name: 'Member',
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
    methods:{
        logout(){
            db.auth().signOut();
            const options = {
                            position: 'bottom-center',
                            duration : 4000,
                        }
            this.$toasted.show('您已成功登出!!', options)
        }
    }
}
</script>

<style lang="css" scoped>
.back {
    background-color: beige;
    height: 100%;
}
.accbu {
    background-color: beige;
}
</style>