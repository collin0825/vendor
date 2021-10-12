<template>
    <div class="back">
        <div id="login" class="signup">
            <div id="main"> 
                <router-link class="signrouter" to="/Login" acvtive>登入</router-link>|<router-link class="signrouter" to="/Signup">註冊</router-link>
                <table class="signupta">
                    <tr>
                        <td>&nbsp;</td>
                        <td>姓名</td>
                        <td > <input class="accin" type="text" v-model='name'  required></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>信箱</td>
                        <td > <input class="accin" type="text" v-model='email'  required></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>電話</td>
                        <td > <input class="accin" type="text" v-model='phone'  required></td>
                    </tr>
                    <tr>
                        <td>&nbsp;</td>
                        <td>密碼</td>
                        <td ><input class="accin" type="password" v-model='password'  required></td>
                    </tr>
                    <tr>
                        <td colspan="2">再次輸入</td>
                        <td ><input class="accin" type="password" v-model='repassword'  required></td>
                    </tr>
                   
                </table>
                <button class="accbu" v-on:click='signup'><router-link class="signrouterbu" to="/Signup">註冊</router-link></button>
            </div>
            <div class="error" v-if="error">{{error.message}}</div>
        </div>
    </div>
</template>
<script>
import { db } from '../db'
export default {
    name: 'Signup',
    data(){
        return{
            name: '',
            email: '',
            password: '',
            repassword: '',
            phone: '',
            error: ''
        }
    },
    methods:{
        signup(){
            if(this.repassword == this.password){
                db
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then(data => {
                    console.log(data);
                    let user = db.auth().currentUser;
                    const fdb = db.firestore();
                    fdb.collection('Users').doc().set({
                        name: this.name,
                        account: this.email,
                        point:0,
                        phone: this.phone,
                        uid: user.uid
                    }).then(()=>{
                        console.log('success!')
                    }).catch((err)=>{
                        console.log(err)
                    })
                    user.sendEmailVerification().then(()=>{
                        const options = {
                            position: 'bottom-center',
                            duration : 4000,
                        }
                        this.$toasted.show('驗證信已寄發請前往驗證!!', options)
                        this.$router.replace({ name: "Login" });
                    }).catch(err=>{
                        console.log(err);
                    })
                })
                .catch(err => {
                    this.error = err;
                });
            }
            else{
                alert("請輸入相同密碼");
            }
            
        }
    }
}
</script>

<style lang="css" scoped>
.back {
    background-color: beige;
    height: 100%;
}
.signup {
    padding-top: 50px;
    justify-content: center;
}

.accin {
    border-radius: 5px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    border-left-width: 0px;

}

.accbu {
    justify-content:right;
    margin-left:220px;
    margin-top:10px;
    border-radius: 5px;
    background-color: rgb(212, 154, 106);
    width: 50px;
    color: beige;
}

.signupta {
    height:150px;
    margin: 0 auto;
    width:70%;
    text-align: right;
}
.signrouterbu{
    color: whitesmoke;
    font-display: none;
}
.signrouter{
    color:sandybrown;
    font-weight: bolder;
    font-display: none;

}
</style>