<template>
  <div id="homeRanking">
    <div class="ranking-box">
      <div class="ranking-nav"><span class="ranking-nav-text">排行榜</span></div>
      <div class="ranking-info">
        <div class="ranking-info-box">
          <div v-for="item in rankingInfo" class="ranking-item">
            <span class="ranking-index">{{item.ranking}}</span>
            <img :src="item.userHeadPic" width="50" height="50" alt="">
            <span>{{item.userNickname}}</span>
            <span class="ranking-bron">{{item.userProvince}}</span>
            <span class="ranking-bron">{{item.receiverNum}}</span>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "HomeRanking",
      data(){
        return {
          rankingInfo:{},
        }
      },
      created(){
        let _this = this;
        this.$ajax.post(`http://localhost:3000/rankingSend`
        ).then(function(result){
            _this.rankingInfo =result.data.data[0];
            console.log(_this.rankingInfo)
        },function (err) {
          console.log(err);
        })
      },

    }
</script>

<style scoped>
  #homeRanking{
    height: 450px;
    margin-top:15px;
  }
  .ranking-box{
    max-width: 360px;
    height: 450px;
    margin: 0 auto;
    background-color: honeydew;
    border-radius: 5px 5px 0px 0px;
  }
  .ranking-nav{
    max-width: 360px;
    height: 45px;
    line-height: 45px;
    background-color: salmon;
    border-radius: 5px 5px 0px 0px;
  }
  .ranking-info{
    height: 400px;
    overflow-y: scroll;
  }
  /*滚动条样式*/
  .ranking-info::-webkit-scrollbar {/*滚动条整体样式*/
    width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
    height: 4px;
  }
  .ranking-info::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    background: rgba(0,0,0,0.2);
  }
  .ranking-info::-webkit-scrollbar-track {/*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
    border-radius: 0;
    background: rgba(0,0,0,0.1);
  }

  .ranking-item{
    width: 340px;
    margin: 0 auto;
    padding-right: 10px;
  }

  .ranking-nav .ranking-nav-text{
    font-size: 18px;
    color: whitesmoke;
    display: inline-block;
    padding-left: 15px;
  }
  .ranking-info ul li{
    list-style: none;
  }
  .ranking-item{
    margin: 0 auto;
    max-width: 350px;
    height: 60px;
    border-bottom:1px solid #685dcc;
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
