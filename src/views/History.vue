<template>
  <div class="back">
      <table class="hista">
          <thead>
              <tr class="thea">
                <th scope="col">交易日期</th>
                <th scope="col">交易品項</th>
                <th scope="col">交易金額</th>
                <th scope="col">交易方式</th>
              </tr>
          </thead>
          <tbody class="tbod">
              <tr v-for="(history, idx) in histories" :key="idx">
                <td>{{ history.date.toDate() | formatedDate }}</td>
                <td>{{ history.pname }}</td>
                <td>{{ history.price }}</td>
                <td>{{ history.way }}</td>
                
              </tr>
          </tbody>
      </table>

  </div>
</template>

<script>
import { db } from '../db'
import moment from 'moment'
const fstore = db.firestore()

export default {
    data(){
        let currentUser = db.auth().currentUser;
        let uid = ( currentUser !== undefined) ? currentUser.uid : '';
        return{
            histories:[],
            uid,
            // uid:'2222'
        }
    },
    filters:{
        formatedDate(val){
            return moment(val).format('MM/DD/YYYY,HH:mm')
        }
    },
    created() {
        console.log(this);
    },
    firestore() {
        //  uid  : db.auth().currentUser.uid,
        let histories = fstore.collection('History').where('uid', '==', this.uid);

        return{
            histories,
        }
        //  'z3LeOviIgxOV626HhKwNQlwEivI3'
         
    },
}
</script>

<style lang="css" scoped>
.back {
    background-color: beige;
    height: 100%;
}
.hista{
    margin: 0 auto;
    width: 100%;
    
}
.thea{
    background-color: rgb(221, 188, 116);
    
}
.tbod{
    background-color: wheat;
   
}
table, th, td {
line-height: 35px;
  border: 2px solid rgb(255, 246, 220);
}
</style>