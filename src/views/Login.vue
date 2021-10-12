<template>
    <div class="back">
        <div id="login" class="login">
            <div id="main"> 
                <router-link class="loginrouter" to="/Login">登入</router-link>|<router-link class="loginrouter" to="/Signup">註冊</router-link>
                <table class="loginta">
                    <tr>
                        <td>信箱</td>
                        <td colspan="2"> <input id="account" class="accin" type="em" v-model='email' required></td>

                    </tr>
                    <tr>
                        <td>密碼</td>
                        <td colspan="2"><input id="account" class="accin" type="password" v-model='password'></td>
                    </tr>
                    <tr style="height:15px;">
                        <td>&nbsp;</td>
                        <td><a type="submit" value="reset" class="forbu"  style="margin: 5px;" v-on:click='reset'>忘記密碼</a></td>
                        <td><button type="button" value="login" class="accbu"  style="margin: 5px;" v-on:click='login'>登入</button></td>
                    </tr>
                </table>
            </div>
            <div class="error" v-if="error">{{error.message}}</div>
        </div>
    </div>
</template>

<script>
import { db } from '../db'
export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login(){
            db
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then(data => {
                    console.log(data);
                    this.$router.replace({ name: "Home" });
                })
                .catch(err => {
                    this.error = err;
                });
        },
        reset(){
            db
                .auth()
                .sendPasswordResetEmail(this.email)
                .then(data => {
                    const options = {
                        position: 'bottom-center',
                        duration : 4000,
                    }
                    this.$toasted.show('請前往信箱進行密碼重設!!', options)
                    console.log(data);
                })
                .catch(err => {
                    this.error = err;
                });
        }
    }
}
</script>

<style lang="css" scoped>
.back {
    background-color: beige;
    height: 100%;
}

.login {
    text-align: center;
    justify-content: center;
    padding-top: 50px;
}

.accin {
    border-radius: 5px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    margin-top: 10px;

}

.accbu {
    border-radius: 5px;
    background-color: rgb(212, 154, 106);
    
    color: whitesmoke;
    font-display: none;

}
.forbu{
    color: rgb(212, 154, 106);
    font-display: none;
}
.loginta {
    margin: 0 auto;
}
.loginrouter{
    color:sandybrown;
    font-weight: bolder;
    font-display: none;
}

</style>