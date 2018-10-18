<template>
  <div id="homeWall">
    <div class="wall-box">
      <div class="wall-nav"><span class="wall-nav-text">近期明信片</span></div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "HomeWall"
    }
</script>

<style scoped>
  #homeWall{
    height: 400px;
    margin-top:15px;
  }
  .wall-box{
    max-width: 1140px;
    height: 400px;
    margin: 0 auto;
    background-color: honeydew;
    border-radius: 5px 5px 0px 0px;
  }
  .wall-nav{
    max-width: 1140px;
    height: 45px;
    line-height: 45px;
    background-color: salmon;
    border-radius: 5px 5px 0px 0px;
  }
  .wall-nav .wall-nav-text{
    font-size: 18px;
    color: whitesmoke;
    display: inline-block;
    padding-left: 15px;
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
