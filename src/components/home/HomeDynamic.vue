<template>
  <div id="homeDynamic">
    <div class="dynamic-box">
      <div class="dynamic-nav"><span class="dynamic-nav-text">实时动态</span></div>
      <div class="daynamic-item">
        <div v-for="item in newSend" class="send">
          <img :src="item.senderHeadPic" width="40" height="40" alt="">
          <span class="username">{{item.cardSenderName}}</span>
          <span class="region">{{item.cardSendRegion}}</span>
          <span class="state">发送一张明信片给</span>
          <img :src="item.receiverHeadPic" width="40" height="40" alt="">
          <span class="username">{{item.cardReceiverName}}</span>
          <span class="region">{{item.cardReceiveRegion}}</span>
        </div>
      </div>
      <div class="daynamic-item">
        <div v-for="item in newReceive" class="receive">
          <img :src="item.receiverHeadPic" width="40" height="40" alt="">
          <span class="username">{{item.cardReceiverName}}</span>
          <span class="region">{{item.cardReceiveRegion}}</span>
          <span class="state">收到来自</span>
          <img :src="item.senderHeadPic" width="40" height="40" alt="">
          <span class="username">{{item.cardSenderName}}</span>
          <span class="region">{{item.cardSendRegion}}</span>
          <span>发的明信片</span>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "HomeDynamic",
        data(){
          return{
            newSend:[],
            newReceive:[],
          }
        },
        mounted(){
          let _this = this;
          this.$ajax.post(`http://localhost:3000/realtimeDynamic`
          ).then(function(result){
            _this.newSend = result.data.data.newSend[0];
            _this.newReceive = result.data.data.newReceive[0];
            console.log(_this.newSend);
            console.log(_this.newReceive);
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
  background-color: honeydew;
  border-radius: 5px 5px 0px 0px;
}
.dynamic-nav{
  max-width: 750px;
  height: 45px;
  line-height: 45px;
  background-color: salmon;
  border-radius: 5px 5px 0px 0px;
}
.dynamic-nav .dynamic-nav-text{
  font-size: 18px;
  color: whitesmoke;
  display: inline-block;
  padding-left: 15px;
}

.daynamic-item .send,.daynamic-item .receive{
  height: 50px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
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
