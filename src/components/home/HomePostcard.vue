<template>
    <div id="homeUser">
      <div class="row">
        <div id="dynamic" style="background-color: bisque;height: 100px;">
          状态栏
        </div>
      </div>
      <div class="row">
        <div class="col-xs-6" style="background-color: lightgreen">
          <div id="sendCard">
            发送明信片
          </div>
        </div>
        <div class="col-xs-6" style="background-color: lightsalmon">
          <div id="receiveCard" >
            收到明信片
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HomePostcard"
    }
</script>

<style scoped>
  #homeUser{
    height: 200px;
  }
  #dynamic{
    height: 100px;
  }
  #sendCard,#receiveCard{
    height: 100px;
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
