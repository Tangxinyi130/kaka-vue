<template>
  <div id="homeWall">
    <div class="wall-box">
      <div class="wall-nav"><span class="wall-nav-text">近期明信片</span></div>
      <div class="wall-item-box">
        <div class="row">
          <div v-for="item in recentPic" class="col-xs-6 col-sm-4 col-md-3">
            <div class="thumbnail">
              <a href="">
                <img :src="item.cardPic" class="cardPic" alt="">
              </a>
              <div class="caption">
                <span class="like"><span @click="addLike(item.cardId)" class="glyphicon glyphicon-heart"></span>&nbsp;&nbsp;{{item.cardLike}}</span>
                <span class="text-cardid">{{item.cardId}}</span>
                <a href="">
                  <span class="collSty" @click="collectionAdd(item.cardId)">收藏</span>
                </a>
              </div>
            </div>
          </div>
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
          likeNum:0,
        }
      },
      methods:{
        picsrc(recentPic) {
          for (let i in recentPic) {
            recentPic[i].cardPic = `${axios.defaults.baseURL}${recentPic[i].cardPic}`;
          }
        },
        addLike(cardId){
          this.$ajax.get(`${axios.defaults.baseURL}/postcards/like/${cardId}`)
            .then(function (result) {
            },function (err) {
              console.log(err);
            });
          this.$router.replace('')
          this.getRecentCard()
        },
        dislike(cardId){

        },
        getRecentCard(){
          let _this = this;
          this.$ajax.post(`${axios.defaults.baseURL}/recentPostcards`
          ).then(function(result){
            _this.recentPic = result.data.data[0];
            _this.picsrc(_this.recentPic);
          },function (err) {
            console.log(err);
          })
        }
      },
      mounted(){
        this.getRecentCard();
      },
    }
</script>

<style scoped>
  #homeWall{
    margin-top:15px;
  }
  .wall-box{
    max-width: 1140px;
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
    margin: 0 auto;
  }

  @media  screen and (max-width: 483px) {
    .cardPic{
      width: 178px;
      max-height: 84px;
    }
    .text-cardid,.like,.collSty{
      display: inline-block;
      height: 27px;
      text-align: left;
      line-height: 27px;
    }
    .caption .text-cardid{
     display: none;
    }
    .caption .like{
      max-width: 150px;
      color: #3c868a;
      font-size: 18px;
      line-height: 14px;
    }
    .caption{
      position: relative;
    }
    .caption .collSty{
      max-width: 35px;
      color: #3a8ee6;
      text-align: right;
      font-size: 16px;
      position: absolute;
      right: 5%;
    }

  }
  @media screen and (min-width: 484px) and (max-width: 767px){
    .cardPic{
      width: 300px;
      min-height: 130px;
      max-height: 130px;
    }
    .text-cardid,.like,.collSty{
      display: inline-block;
      height: 30px;
      text-align: left;
      line-height: 30px;
    }
    .caption .text-cardid{
      display: none;
    }
    .caption .like{
      width: 75px;
      color: #3c868a;
      font-size: 18px;
      line-height: 14px;
    }
    .caption{
      position: relative;
    }
    .caption .collSty{
      width: 35px;
      color: #3a8ee6;
      text-align: right;
      font-size: 16px;
      position: absolute;
      right: 5%;
    }
  }
  @media screen and (min-width:768px) and (max-width:991px ){
    .cardPic{
      width: 220px;
      height: 100px;
    }
    .text-cardid,.like,.collSty{
      display: inline-block;
      height: 26px;
      text-align: left;
      line-height: 28px;
    }
    .caption .text-cardid{
      width: 76px;
      color: #5e5e5e;
      font-size: 14px;
    }
    .caption .like{
      width: 75px;
      color: #3c868a;
      font-size: 18px;
      line-height: 14px;
    }
    .caption .collSty{
      width: 35px;
      color: #3a8ee6;
      text-align: right;
      font-size: 16px;
    }
  }
  @media screen and (min-width:992px) and (max-width:1199px ){
    .cardPic{
      width: 210px;
      height: 130px;
    }
    .text-cardid,.like,.collSty{
      display: inline-block;
      height: 28px;
      text-align: left;
      line-height: 28px;
    }
    .caption .text-cardid{
      width: 80px;
      color: #5e5e5e;
      font-size: 14px;
    }
    .caption .like{
      width: 70px;
      color: #3c868a;
      font-size: 18px;
      line-height: 17px;
    }
    .caption .collSty{
      width: 30px;
      color: #3a8ee6;
      font-size: 13px;
    }
  }
  @media screen and (min-width: 1200px){
    .cardPic{
      width: 250px;
      height: 150px;
    }
    .text-cardid,.like,.collSty{
      display: inline-block;
      height: 30px;
      text-align: left;
      line-height: 30px;
    }
    .caption .text-cardid{
      width: 100px;
      color: #5e5e5e;
      font-size: 16px;
    }
    .caption .like{
      width: 80px;
      color: #3c868a;
      font-size: 20px;
      line-height: 20px;
    }
    .caption .collSty{
      width: 30px;
      color: #3a8ee6;
      font-size: 15px;
    }
  }
</style>
