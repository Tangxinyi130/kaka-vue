<template>
  <div class="container">
    <div class="row wallCity">
      <div class="col-xs-2 col-md-2">
        <div class="glyphicon glyphicon-align-justify wallpublic" @click="flag=!flag"></div>
        <span v-if="flag">所有城市</span>
      </div>
      <div class="col-xs-8 col-md-7 text-center">
        <div class="wllTopic wallpublic">展示墙</div>
      </div>
      <div class="col-xs-2 col-md-3 ">
          <div class="input-group wallSearch-a">
            <div class="col-xs-7 col-md-9">
              <input type="text" class="form-control" placeholder="输入搜索...">
            </div>
            <div class="col-xs-5 col-md-3">
              <span class="glyphicon glyphicon-search"></span>
            </div>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "WallSearch",
      data(){
          return {flag:false}
      }
    }
</script>

<style scoped>
  .glyphicon{
    font-size: 30px;
    color: white;
  }
  .wllTopic{
    /*line-height: 53px;*/
    font-size: 20px;
    text-align: center;
  }
  .container>.wallCity{
    height: 52px;
    background-color: rgb(82,137,112);
  }
  .wallpublic{
    line-height: 52px;
  }
  .wallSearch-a{
    margin-top: 9px;
  }
</style>
