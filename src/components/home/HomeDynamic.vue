<template>
  <div id="homeDynamic">
    <div class="dynamic-box">
      <div class="dynamic-nav"><span class="dynamic-nav-text">实时动态</span></div>
      <div class="daynamic-item">
        <div class="send">
          <img src="../../assets/user.jpg" width="40" height="40" alt="">
          <span class="username">迪丽热巴</span>
          <span class="region">新疆</span>
          <span class="state">发送一张明信片给</span>
          <img src="../../assets/user.jpg" width="40" height="40" alt="">
          <span class="username">MARY</span>
          <span class="region">浙江</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "HomeDynamic"
    }
</script>

<style scoped>
#homeDynamic{
  height: 450px;
  margin-top:15px;
}
.dynamic-box{
  max-width: 750px;
  height: 450px;
  margin: 0 auto;
  background-color: honeydew;
  border-radius: 5px 5px 0px 0px;
}
.dynamic-nav{
  max-width: 750px;
  height: 45px;
  line-height: 45px;
  background-color: salmon;
  border-radius: 5px 5px 0px 0px;
}
.dynamic-nav .dynamic-nav-text{
  font-size: 18px;
  color: whitesmoke;
  display: inline-block;
  padding-left: 15px;
}

.daynamic-item .send{
  height: 50px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}


@media  screen and (max-width: 479px) {

}
@media screen and (min-width: 480px) and (max-width: 767px){

}
@media screen and (min-width:768px) and (max-width:991px ){

}
@media screen and (min-width:992px) and (max-width:1199px ){

}
@media screen and (min-width: 1200px){

}
</style>
