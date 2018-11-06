<template>
  <div id="homeDynamic">
    <div class="dynamic-box">
      <div class="dynamic-nav"><span class="dynamic-nav-text">实时动态</span></div>
      <div class="dynamic-item-box">
        <div  v-for="item in realDynamic" class="dynamic-item">
          <div v-if="item.state=='发送'" class="dynamic-item-detail">
            <a :href="'/user/' + item.cardSenderId + '/aboutme'">
              <img class="headPic" :src="item.senderHeadPic" width="40" height="40" alt="">
              <span class="username">{{item.cardSenderName}}</span>
            </a>
            <span class="region">{{item.cardSendRegion}}</span>
            <span class="state">{{item.state}}了一张明信片给</span>
            <a :href="'/user/' + item.cardReceiverId + '/aboutme'">
              <img class="headPic" :src="item.receiverHeadPic" width="40" height="40" alt="">
              <span class="username">{{item.cardReceiverName}}</span>
            </a>
            <span class="region">{{item.cardReceiveRegion}}</span>
          </div>
          <div v-if="item.state=='收到'" class="dynamic-item-detail">
            <a href="">
              <img class="headPic" :src="item.receiverHeadPic" width="40" height="40" alt="">
              <span class="username">{{item.cardReceiverName}}</span>
            </a>
            <span class="region">{{item.cardReceiveRegion}}</span>

            <span class="state">{{item.state}}了来自</span>
            <a href="">
              <img  class="headPic" :src="item.senderHeadPic" width="40" height="40" alt="">
              <span class="username">{{item.cardSenderName}}</span>
            </a>
            <span class="region">{{item.cardSendRegion}}</span>
            <span class="state">寄的一张明信片</span>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
  $(function() {
    //获得当前<ul>
    var $ibDynamic = $("div.dynamic-item-box");
    var timer = null;
    //触摸清空定时器
    $ibDynamic.hover(function() {
        clearInterval(timer);
      },
      function() { //离开启动定时器
        timer = setInterval(function() {
            scrollList($ibDynamic);
          },
          2000);
      }).trigger("mouseleave"); //自动触发触摸事件
    //滚动动画
    function scrollList(obj) {
      //获得当前<li>的高度
      var scrollHeight = $(".dynamic-item-box .daynamic-item:first").height();
      //滚动出一个<li>的高度
      $ibDynamic.stop().animate({
          marginTop: -scrollHeight
        },
        600,
        function() {
          //动画结束后，将当前<ul>marginTop置为初始值0状态，再将第一个<li>拼接到末尾。
          $ibDynamic.css({
            marginTop: 0
          }).find(".dynamic-item-detail:first").appendTo($ibDynamic);
        });
    }
  });
    export default {
        name: "HomeDynamic",
        data(){
          return{
            realDynamic:{},
          }
        },
        methods:{
          picsrc(realDynamic){
            for(let i in realDynamic){
              realDynamic[i].senderHeadPic = `${axios.defaults.baseURL}${realDynamic[i].senderHeadPic}`;
              realDynamic[i].receiverHeadPic = `${axios.defaults.baseURL}${realDynamic[i].receiverHeadPic}`;
            }
          }
        },
        mounted(){
          let _this = this;
          this.$ajax.post(`${axios.defaults.baseURL}/realtimeDynamic`
          ).then(function(result){
            _this.realDynamic = result.data.data;
            _this.picsrc(_this.realDynamic);
          },function (err) {
            console.log(err);
          })
        }
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
  background-color: #fafafa;
  border-radius: 5px 5px 0px 0px;
}
.dynamic-nav{
  max-width: 750px;
  height: 45px;
  line-height: 45px;
  background-color: #91bfbf;
  border-radius: 5px 5px 0px 0px;
}
.dynamic-nav .dynamic-nav-text{
  font-size: 18px;
  color: whitesmoke;
  display: inline-block;
  padding-left: 15px;
}
.dynamic-item-box{
  max-width: 700px;
  height: 400px;
  margin: 0 auto;
  overflow: hidden;
}
.dynamic-item-detail {
  height: 50px;
  width: 100%;
  line-height: 50px;
  font-size: 15px;
  color: #5E5E5E;
  /*vertical-align: middle;*/
  /*border: 1px solid #ccc;*/
  border-radius: 4px;
}
/*.dynamic-item-detail:hover{*/
  /*border: 1px solid #ccc;*/
  /*box-shadow: #c1a174;*/
/*}*/
.dynamic-item-detail .username{
  font-size:16px;
  font-weight: bold;
  color: #1db0ff;
}
.dynamic-item-detail .region{
  color: #535e5a;
}
.dynamic-item-detail .state{
  font-size: 15px;
}
.dynamic-item-detail a{
  text-decoration: none;
}
.dynamic-item-detail .headPic{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

@media  screen and (max-width: 479px) {
  .dynamic-item-detail {
    height: 45px;
    width: 100%;
    line-height: 45px;
    font-size: 13px;
    color: #5E5E5E;
    text-overflow:ellipsis;
    /*vertical-align: middle;*/
    /*border: 1px solid #ccc;*/
    border-radius: 4px;
  }
  /*.dynamic-item-detail:hover{*/
  /*border: 1px solid #ccc;*/
  /*box-shadow: #c1a174;*/
  /*}*/
  .dynamic-item-detail .username{
    font-size:14px;
    font-weight: bold;
    color: #1db0ff;
  }
  .dynamic-item-detail .region{
    color: #535e5a;
  }
  .dynamic-item-detail .state{
    font-size: 13px;
  }
  .dynamic-item-detail a{
    text-decoration: none;
  }
  .dynamic-item-detail .headPic{
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
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
