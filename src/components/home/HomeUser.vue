<template>
    <div id="homeuser">
      <div class="card">
        <div class="card-header">
            <a :href="'/user/' + userId + '/aboutme'">
              <div class="pic-content">
                <img :src="headPic" class="pic-img"   alt="">
              </div>
            </a>
          <div class="header-right">
            <h4>{{userNickName}}</h4>
            <p>已发送: <span>{{sendNum}}</span>张</p>
            <p>已收到: <span>{{receiveNum}}</span>张</p>
          </div>
        </div>
        <div class="card-body">
            <ul class="user-info">
              <li class="user-info-li">
                <a href="">
                  <div class="user-item">
                    <strong>{{attentionNum}}</strong>
                    <span>我的关注</span>
                  </div>
                </a>
              </li>
              <li class="user-info-li">
                <a href="">
                  <div class="user-item">
                    <strong>{{fansNum}}</strong>
                    <span>我的粉丝</span>
                  </div>
                </a>
              </li>
              <li class="user-info-li">
                <a href="">
                  <div class="user-item">
                    <strong>{{collectionNum}}</strong>
                    <span>我的收藏</span>
                  </div>
                </a>
              </li>
            </ul>
        </div>
      </div>

    </div>

</template>

<script>
  import {mapGetters} from "vuex"
    export default {
      name: "HomeUser",
      computed: mapGetters([
        "isLogin",
        "userId"
      ]),
      data(){
        return {
          headPic:"",
          userNickName:"",
          sendNum:0,
          receiveNum:0,
          attentionNum:0,
          fansNum:0,
          collectionNum:0
        }
      },
      created(){
        let _this = this;
        this.$ajax.get(`http://localhost:3000/userCard/${this.userId}`
        ).then(function(result){
            _this.userNickName=result.data.data.nickName[0].userNickname;
            _this.headPic = result.data.data.headPic[0].userHeadPic;
            _this.sendNum = result.data.data.sendNum[0].sendNum;
            _this.receiveNum = result.data.data.receiveNum[0].receiveNum;
            _this.attentionNum = result.data.data.attentionNum[0].attentionNum;
            _this.fansNum = result.data.data.fansNum[0].fanNum;
            _this.collectionNum = result.data.data.collectionNum[0].collectionNum;

        },function (err) {
          console.log(err);
        })
      },
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .card{
    background-color: azure;
    border-radius: 5px;
  }
  .card-header{
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: url('../../assets/box.jpeg') center no-repeat ;
    position: relative;
  }
  .pic-content{
    float: left;
    position: relative;
    border-radius: 50%;
  }
  .pic-img{
    border-radius: 50%;
    width:120px;
    height:120px;
  }
  .header-right{
    color: white;
    right: 0;
    position: absolute;
  }
  .user-info{
    list-style: none;
  }
  .user-info .user-info-li{
    float: left;
    border-right: solid 1px #ccc;
  }
  .user-info .user-info-li:last-child{
    border-right: none;
  }
  .user-item{
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
  .user-item strong,.user-item>span {
    display: block;
  }
  @media  screen and (max-width: 479px) {
    #homeuser{
      display: inline-block;
    }
    #homeuser{
      width: 100%;
    }
    .card{
      width: 100%;
      max-width: 400px;
      height: 200px;
    }
    .card-header{
      width: 100%;
      max-width: 400px;
      height: 140px;
      background-size:100% 140px;
      position: relative;
    }
     .pic-content{
      max-width: 100px;
      height: 100px;
      left: 10px;
      top: 10px;
    }
    .header-right{
      width: 100%;
      max-width: 200px;
      height: 140px;
      left: 45%;
      line-height: 40px;
    }
    .header-right h4{
      font-size: 28px;
      padding-top: 20px;
    }
    .header-right p{
      font-size: 14px;
    }
    .user-info .user-info-li{
      width: 33.3%;
      height: 50px;
    }
    .user-item{
      width: 90%;
      text-align: center;
      line-height: 26px;
    }
    .user-item>span{
      font-size: 18px;
      font-weight: bold;
    }
    .user-item>strong{
      font-size: 16px;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 767px){
    #homeuser{
      display: none;
      /*visibility:hidden;*/
    }
  }
  @media screen and (min-width:768px) and (max-width:991px ){
    .card{
      width: 230px;
      height: 160px;
    }
    .card-header{
      width: 230px;
      height: 115px;
      background-size: cover;
      background-position:left;
      position: relative;
    }
    .pic-content{
      max-width: 90px;
      height: 90px;
      left: 9px;
      top: 9px;
    }
    .pic-img{
      width:90px;
      height:90px;
    }
    .header-right{
      width: 120px;
      height: 115px;
      line-height: 30px;
    }
    .header-right h4{
      font-size: 22px;
      padding-top: 15px;
    }
    .header-right p{
      font-size: 12px;
    }
    .user-info .user-info-li{
      width: 76px;
      height: 45px;
    }
    .user-item{
      width: 70px;
      height: 45px;
      text-align: center;
      line-height: 20px;
    }
    .user-item>span{
      font-size: 14px;
      font-weight: bold;
    }
    .user-item>strong{
      font-size: 12px;
    }
  }
  @media screen and (min-width:992px) and (max-width:1199px ){
    .card{
      width: 300px;
      height: 200px;
    }
    .card-header{
      width: 300px;
      height: 140px;
      background-size: 300px 140px;
      position: relative;
    }
    .pic-content{
      max-width: 110px;
      height: 110px;
      left: 15px;
      top: 10px;
    }
    .pic-img{
      width:110px;
      height:110px;
    }
    .header-right{
      width: 160px;
      height: 140px;
      line-height: 40px;
    }
    .header-right h4{
      font-size: 28px;
      padding-top: 20px;
    }
    .header-right p{
      font-size: 14px;
    }
    .user-info .user-info-li{
      width: 100px;
      height: 50px;
    }
    .user-item{
      width: 100px;
      text-align: center;
      line-height: 28px;
    }
    .user-item>span{
      font-size: 18px;
      font-weight: bold;
    }
    .user-item>strong{
      font-size: 16px;
    }
  }
  @media screen and (min-width: 1200px){
    .card{
      width: 360px;
      height: 200px;
    }
    .card-header{
      width: 360px;
      height: 140px;
      background-size: 360px 140px;
      position: relative;
    }
    .pic-content{
      max-width: 120px;
      height: 120px;
      left: 15px;
      top: 10px;
    }
    .pic-img{
      width:120px;
      height:120px;
    }
    .header-right{
      width: 190px;
      height: 140px;
      line-height: 40px;
    }
    .header-right h4{
      font-size: 28px;
      padding-top: 20px;
    }
    .header-right p{
      font-size: 14px;
    }

    .card-body{
      /*text-align: center;*/
    }
    .user-info .user-info-li{
      width: 120px;
      height: 50px;
    }
    .user-item{
      width: 100px;
      text-align: center;
      line-height: 28px;
    }
    .user-item>span{
      font-size: 18px;
      font-weight: bold;
    }
    .user-item>strong{
      font-size: 16px;
    }

  }

</style>
