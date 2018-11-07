<template>
  <div class="container">
    <div class="row">
      <div class="col-md-offset-1 col-md-10">
        <img src="../../static/err1.png" width="100%"  alt="">
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <button class="btt" @click="toHome">返回首页</button>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "err",
      methods:{
        toHome(){
          this.$router.push({path:"/"})
        }
      }
    }
</script>

<style scoped>
.btt{
  color:#5e5e5e;
  background-color: white;
  border-radius: 10px;
  border:1px solid #cccccc;
  position: absolute;
  top:-200px;
  left:140px;
}
@media  screen and (max-width: 479px) {
  .btt{
    top:-50px;
    left:150px;
    font-size: 8px;
  }
}
@media screen and (min-width: 480px) and (max-width: 767px){
  .btt{
    top:-80px;
    left:200px;
  }
}
@media screen and (min-width:768px) and (max-width:991px ){
  .btt{
    top:-150px;
    left:400px;
  }
}
@media screen and (min-width:992px) and (max-width:1199px ){
  .btt{
   top:-150px;
    left:500px;
  }
}
@media  screen and (min-width: 1200px) {
  .btt{
    top:-200px;
    left:600px;
  }
}
</style>
