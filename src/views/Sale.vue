<template>
  <div class="back">
    <table class="table table-striped saleta">
      <thead>
        <tr class="thea">
          <th scope="col">排名</th>
          <th scope="col">商品名稱</th>
          <th scope="col">價錢</th>
        </tr>
      </thead>
      <tbody class="tbod">
        <tr v-for="(rate, idx) in rates" :key="idx">
          <td>{{rate.rate}}</td>
          <td>{{rate.product}}</td>
          <td>{{rate.price}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { db } from '../db'
const fstore = db.firestore()
export default {
  data(){
    return{
      rates:[]
    }
  },
  firestore(){
    let rates = fstore.collection('Rate').orderBy('rate');
    return{
      rates
    }
  }
};
</script>

<style lang="css" scoped>
.back {
  background-color: beige;
  height: 100%;
}
.saleta{
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
  border: 2px solid rgb(255, 246, 220);
}
</style>