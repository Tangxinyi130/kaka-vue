<template>
  <div id="homeRanking">
    <div class="ranking-box">
      <div class="ranking-nav"><span class="ranking-nav-text">排行榜</span></div>
      <div class="ranking-info">
        <div class="ranking-title">
          <span class="ranking-index">排名</span>
          <span class="ranking-user"></span>
          <span class="ranking-recever">总收件数</span>
        </div>
          <div v-for="item in rankingInfo" class="ranking-item">
            <span v-if="item.ranking<=3" :title="item.ranking" class="ranking-index"><i class="list"></i></span>
            <span v-if="item.ranking>3" class="ranking-index">{{item.ranking}}</span>
            <a :href="'/user/' + item.userId + '/aboutme'"><img class="ranking-headepic" :src="item.userHeadPic" alt=""></a>

            <span class="ranking-username">{{item.userNickname}}</span>
            <span class="ranking-bron">{{item.userProvince}}</span>
            <span class="ranking-recever">{{item.receiverNum}}</span>
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
      methods:{
        rHeadPic(rankingData){
          for(let i in rankingData){
            rankingData[i].userHeadPic = `${axios.defaults.baseURL}${rankingData[i].userHeadPic}`
          }
        }
      },
      created(){
        let _this = this;
        this.$ajax.post(`${axios.defaults.baseURL}/rankingSend`
        ).then(function(result){
            _this.rankingInfo =result.data.data[0];
            _this.rHeadPic(_this.rankingInfo);
        },function (err) {
          console.log(err);
        })
      },

    }
</script>

<style scoped>
  #homeRanking{
    /*max-width: 360px;*/
    height: 450px;
    margin-top:15px;
  }
  .ranking-box{
    /*max-width: 360px;*/
    height: 450px;
    margin: 0 auto;
    background-color: #fafafa;
    border-radius: 5px 5px 0px 0px;
  }
  .ranking-nav{
    /*max-width: 360px;*/
    height: 45px;
    line-height: 45px;
    background-color: #d5d5ab;
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
  .ranking-nav .ranking-nav-text{
    font-size: 18px;
    color: whitesmoke;
    display: inline-block;
    padding-left: 15px;
  }
  .ranking-title{
    /*max-width: 350px;*/
    font-size: 18px;
    color: #737373;
    margin: 0 auto;
    height: 40px;
    line-height: 38px;
    border-bottom:1px solid #42a7cc;
  }
  .ranking-item{
    margin: 0 auto;
    /*max-width: 350px;*/
    height: 60px;
    border-bottom:1px solid #ccc;
    margin-top:5px;
  }

  .ranking-item span,.ranking-title span{
    display: inline-block;
    vertical-align: middle;
    text-align: center;
  }
  .ranking-user{
    width: 160px;
  }
  .ranking-title .ranking-recever{
    width: 80px;
  }
  .ranking-index{
    width: 60px;
  }
  .ranking-index .list{
    display: inline-block;
    width: 30px;
    height: 30px;
    background-image: url("../../assets/images/rankingList/top.png");
    background-size: 30px 30px;
  }
  span.ranking-index[title='2'] .list{
    background-image: url("../../assets/images/rankingList/second.png");
  }
  span.ranking-index[title='3'] .list{
    background-image: url("../../assets/images/rankingList/third.png");
  }
  .ranking-item .ranking-index{
    font-size: 15px;
    font-family: Algerian;
    color: #cc1d18;
  }
  .ranking-headepic{
    width: 48px;
    height: 48px;
    margin-top: 5px;
  }
  .ranking-username{
    width: 70px;
    font-size: 18px;
    color: #4194ff;
  }
  .ranking-bron{
    width: 40px;
    font-size: 15px;
    color: #5E5E5E;
  }
  .ranking-recever{
    width: 80px;
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
