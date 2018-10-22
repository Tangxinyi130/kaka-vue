<template>
  <div id="homeWall">
    <div class="wall-box">
      <div class="wall-nav"><span class="wall-nav-text">近期明信片</span></div>
      <div class="wall-item-box">
        <div v-for="item in recentPic" class="wall-item">
          <a :href="'/postcards/'+item.cardId">
            <img :src="item.cardPic">
          </a>
          <div>
             <span class="text-cardid">
            {{item.cardId}}
          </span>
            <a href="">
              <span class="glyphicon glyphicon-heart"></span>
            </a>
            <a href="">
              <span>收藏</span>
            </a>
          </div>
        </div>
        <div v-for="item in recentPic" class="wall-item">
          <a :href="'/postcards/'+item.cardId">
            <img :src="item.cardPic">
          </a>
          <span class="text-cardid">
            {{item.cardId}}
          </span>
          <a >
            <span class="glyphicon glyphicon-heart"></span>
          </a>
          <a>
            <span>收藏</span>
          </a>
        </div>
        <div v-for="item in recentPic" class="wall-item">
          <a :href="'/postcards/'+item.cardId">
            <img :src="item.cardPic">
          </a>
          <span class="text-cardid">
            {{item.cardId}}
          </span>
          <a>
            <span class="glyphicon glyphicon-heart"></span>
          </a>
          <a >
            <span>收藏</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeWall",
      data(){
        return {
          recentPic:{},
        }
      },
      mounted(){
        let _this = this;
        this.$ajax.post(`http://localhost:3000/recentPostcards`
        ).then(function(result){
          _this.recentPic = result.data.data[0];
          console.log(_this.recentPic);
        },function (err) {
          console.log(err);
        })
      },
    }
</script>

<style scoped>
  #homeWall{
    height: 500px;
    margin-top:15px;
  }
  .wall-box{
    max-width: 1140px;
    height: 510px;
    margin: 0 auto;
    background-color: honeydew;
    border-radius: 5px 5px 0px 0px;
  }
  .wall-nav{
    max-width: 1140px;
    height: 45px;
    line-height: 45px;
    background-color: #7C6254;
    border-radius: 5px 5px 0px 0px;
  }
  .wall-nav .wall-nav-text{
    font-size: 18px;
    color: whitesmoke;
    display: inline-block;
    padding-left: 15px;
  }
  .wall-item-box{
    max-width: 1100px;
    height: 450px;
    margin: 0 auto;
    overflow: hidden;
  }
  .wall-item{
    width: 250px;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;
    float:left;
  }
  .wall-item img{
    width:180px;
    height:135px;
  }
  @media  screen and (max-width: 479px) {
    .wall-item{
      width: 190px;
      height: 140px;
      margin: 6px;
    }
    .wall-item img{
      width:190px;
      height:98px;
    }

  }
  @media screen and (min-width: 480px) and (max-width: 767px){
    .wall-item{
      width: 200px;
      height: 150px;
      margin: 9px;
    }
    .wall-item img{
      width:200px;
      height:105px;
    }
  }
  @media screen and (min-width:768px) and (max-width:991px ){
    .wall-item{
      width: 220px;
      height: 170px;
      margin: 14px;
    }
    .wall-item img{
      width:220px;
      height:119px;
    }
  }
  @media screen and (min-width:992px) and (max-width:1199px ){
    .wall-item{
      width: 210px;
      height: 170px;
      margin: 16px;
    }
    .wall-item img{
      width:210px;
      height:119px;
    }
  }
  @media screen and (min-width: 1200px){
    .wall-item{
      width: 250px;
      height: 200px;
      margin: 12px;
    }
    .wall-item img{
      width:250px;
      height:140px;
    }
  }
</style>
