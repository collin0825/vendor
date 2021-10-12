<template>
  <div class="back">
  <!---  <img src="../assets/people.jpg">   --->
  <div class="img">
      <font-awesome-icon :icon="['fas', 'user']" size='7x' style="color:black;margin:10px 0px 10px 151px;"/>
  </div>
      <table class="accta" v-for="(user, idx) in users" :key="idx">
        <tr>
          <td id="tit">姓名</td>
          <td id="con">{{user.name}}</td>
        </tr>
        <tr>
          <td id="tit">電話</td>
          <td id="con">{{user.phone}}</td>
        </tr>
        <tr>
          <td id="tit">電子信箱</td>
          <td id="con">{{user.account}}</td>
        </tr>
        <tr>
          <td id="tit">我的點數</td>
          <td id="con">{{user.point}}</td>
        </tr>
      </table>
  </div>
</template>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCeTVzZzpVTfEyoBXNehmsnEQ-RFQ0rmhU"></script>

<script>
import { db } from '../db'
const fstore = db.firestore()
export default {
  data(){
    let currentUser = db.auth().currentUser;
    let uid = ( currentUser !== undefined) ? currentUser.uid : '';
    return{
      users:[],
      uid
    }
  },
  firestore() {
        let users = fstore.collection('Users').where('uid', '==', this.uid);
        return{
            users,
        }
        //  'z3LeOviIgxOV626HhKwNQlwEivI3'
         
    },
}
</script>

<style lang="css" scoped>
.back {
    background-color: beige;
    height: 100%;
    text-align:left;
    margin: 0 auto;
}
.accta{
    margin:0 auto;
    width: 80%;
    line-height: 35px;
    padding-top: 200px;
}
#tit{ 
  border-radius: 5px;
  text-align:center;
  text-decoration: underline rgb(221, 188, 116);
  font-weight: bold;
}
#con{
  text-align:left;
}

</style>