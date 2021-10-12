<template>
  <div class="back">
          <div class="main">
          <img style="width:80%" src="../assets/credit_card_PNG232.png" /> 
          
          <div style="padding-top:15px">
          <table class="watab">
            <tr>
              <td style="background-color: rgb(221, 188, 116);">卡號</td>
              <td style="text-align:left">XXXXXXXXXXXXX456</td>
            </tr>
            <tr class="bu">
              <td>&nbsp;</td>
              <td colspan="" style="text-align:right">
              <button class="wallbu" type="button">新增卡片</button>
              </td>
                  <td colspan="" style="text-align:right">
              <button class="wallbu" type="button">刪除卡片</button>
              </td>
            </tr>
          </table>
          </div>
  </div>
  </div>
 
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.back {
    background-color: beige;
    height: 100%;
}
.main{
  margin: 0 auto;
  padding-top: 20px;
}
.watab{
  margin: 0 auto;
  padding-top: 30px;
  width: 80%;
}
.wallbu{
    color: beige;
    font-weight: bolder;
    font-display: none;
    background-color: rgb(212, 154, 106);
    border-radius: 5px;
}
table, th, td {
  border-radius: 5px;
  padding: 5px;
}

</style>