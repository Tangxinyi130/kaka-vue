<template>
  <div id="homeWall">
    <div class="wall-box">
      <div class="wall-nav"><span class="wall-nav-text">近期明信片</span></div>
      <div class="wall-item-box">
        <div class="row">
          <div v-for="(item,index) in recentPic" class="col-xs-6 col-sm-4 col-md-3">
            <div class="thumbnail">
              <a :href="'/postcards/' + item.cardId">
                <img :src="item.cardPic" class="cardPic" alt="">
              </a>
              <div class="caption">
                <a :href="'/postcards/' + item.cardId"><span class="text-cardid">ID：{{item.cardId}}</span></a>
                <span class="like" >
                  <span  class="like-star" @click="addLike(item.cardId)">{{'❤'}}</span>
                  <span >{{item.cardLike}}</span>
                </span>

                  <!--<span v-if="item.flag"><span class="collSty btn glyphicon glyphicon-heart-empty"  @click="myLike(item.cardId,index)"></span>收藏</span>-->
                  <!--<span v-else><span class="collSty btn glyphicon glyphicon-heart" @click="unLike(item.cardId,index)"></span>已收藏</span>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import VueStar from 'vue-star'
    export default {
        name: "HomeWall",
      components:{
        VueStar,

      },
      data(){
        return {
          recentPic:{},
          likeNum:{},
          flag:true,
        }
      },
      methods:{
        handleClick(){

        },
        // cunlikeNum(){
        //   for(let i in this.recentPic ){
        //     (this.likeNum)[i].cardId= (this.recentPic)[i].cardId;
        //     (this.likeNum)[i].cardLike = (this.recentPic)[i].cardLike;
        //   }
        // },
        picsrc(recentPic) {
          for (let i in recentPic) {
            recentPic[i].cardPic = `${axios.defaults.baseURL}${recentPic[i].cardPic}`;
          }
        },
        addLike(cardId){
          var _this =this;
          this.$ajax.get(`${axios.defaults.baseURL}/postcards/like/${cardId}`)
            .then(function (result) {
              _this.getRecentCard();
            },function (err) {
              console.log(err);
            });
          // this.$router.replace({
          //   path:'/',name:'Home'
          // })
        },
        // addStar(index,cardId,count){
        //   if(this.recentPic[index].active==false){
        //     this.recentPic[index].active = true;
        //     this.likeNum[index] =count+1;
        //     console.log(`like+1`);
        //   }
        // },
        // unStar(index,cardId){
        //   this.recentPic[index].active =true;
        //   this.recentPic[index].starCount -=1;
        // },
        // dislike(cardId){
        //
        // },
        getCollection(){
          let _this =this;
          this.$ajax.get(``)
        },
        getRecentCard(){
          let _this = this;
          this.$ajax.post(`${axios.defaults.baseURL}/recentPostcards`
          ).then(function(result){
            _this.recentPic = result.data.data[0];
            _this.picsrc(_this.recentPic);
            for(let i in _this.recentPic){
              (_this.recentPic)[i].active = false;
              (_this.recentPic)[i].starCount = 0;
              (_this.recentPic)[i].starCount = (_this.recentPic)[i].cardLike;
            }
            console.log(_this.recentPic);
            // _this.cunlikeNum();
          },function (err) {
            console.log(err);
          })
        },
        myLike(cardId,index) {
          console.log(this.$store.state.userId)
          this.$ajax({
            method: 'get',
            url: `${axios.defaults.baseURL}/postcards/collect/${cardId}/${this.$store.state.userId}`
          }).then((res) => {
            console.log("收藏")
            this.recentPic[index].flag = false;
            console.log(this.recentPic[index].flag);
          })
        },
        unLike(cardId,index){
          console.log(this.$store.state.userId);
          this.$ajax({
            method:'get',
            url:`${axios.defaults.baseURL}/postcards/uncollect/${cardId}/${this.$store.state.userId}`
          }).then((res)=>{
            console.log("不收藏")
            this.recentPic[index].flag=true;
          })
        },
      },
      created(){
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
    background-color: #fafafa;
    border-radius: 5px 5px 0px 0px;
  }
  .wall-nav{
    max-width: 1140px;
    height: 45px;
    line-height: 45px;
    background-color: #528970;
    border-radius: 5px 5px 0px 0px;
    position: relative;
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
    position: relative;
    top: 10px;
  }
  .like-star{
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    color: #ccc;
  }
  .like-star:active{
    color: red;
    font-size:20px;
  }
  .caption .collSty:hover{
    cursor: pointer;
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
      max-width: 200px;
      color: #5e5e5e;
      font-size: 14px;
    }
    .caption .like{
      max-width: 150px;
      color: #3c868a;
      font-size: 18px;
      line-height: 25px;
      position: absolute;
      right: 8px;

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
    .caption .collSty:hover{
     cursor: pointer;
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
      max-width: 200px;
      color: #5e5e5e;
      font-size: 14px;
    }
    .caption .like{
      width: 75px;
      color: #3c868a;
      font-size: 18px;
      line-height: 30px;
      height: 30px;
      text-align: right;
      position: absolute;
      right: 10px;
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
      height: 28px;
      text-align: left;
      line-height: 28px;
    }
    .caption .text-cardid{
      width: 110px;
      color: #5e5e5e;
      font-size: 14px;
    }
    .caption .like{
      width: 75px;
      color: #3c868a;
      font-size: 18px;
      line-height: 14px;
      text-align: right;
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
      width: 110px;
      color: #5e5e5e;
      font-size: 14px;
    }
    .caption .like{
      width: 70px;
      color: #3c868a;
      font-size: 18px;
      line-height: 17px;
      text-align: right;
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
      width: 130px;
      color: #5e5e5e;
      font-size: 16px;
    }
    .caption .like{
      width: 80px;
      color: #3c868a;
      font-size: 20px;
      line-height: 20px;
      text-align: right;
    }
    .caption .collSty{
      width: 30px;
      color: #3a8ee6;
      font-size: 15px;
    }
  }
</style>
