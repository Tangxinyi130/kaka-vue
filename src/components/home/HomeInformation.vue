<template>
  <div id="homeInfomation">
    <span>已有{{usersCount}}用户加入我们的网站</span>
    <span>有{{travelingCardNum}}明信片正在漂流</span>
    <span>总收到的明信片数量：{{receivedNum}}</span>
    <span>最近一小时收到的明信片数量：{{recentReceivedNum}}</span>
    <span>已经有{{cityTotal}}个省份已经加入</span>
    <span>明信片漂流总距离：{{distanceTotal}}</span>
  </div>
</template>

<script>
    export default {
        name: "HomeInformation",
      data(){
          return{
            receivedNum:0,
            recentReceivedNum:0,
            travelingCardNum:0,
            distanceTotal:0,
            usersCount:0,
            cityTotal:0
          }
      },
      mounted(){
        let _this = this;
        this.$ajax.get('http://localhost:3000/information').then(function (result) {
          let info= result.data.data;
          _this.receivedNum = info.receivedNum[0].receivedNum;
          _this.recentReceivedNum = info.recentReceivedNum[0].receivedNum;
          _this.travelingCardNum = info.travelingCardNum[0].travelingCardNum;
          _this.distanceTotal = info.distanceTotal[0].distanceTotal;
          _this.usersCount = info.usersNum[0].usersCount;
          _this.cityTotal = info.cityTotal[0].cityTotal;


        },function (err) {
          console.log(err);
        })
      },
    }
</script>

<style scoped>
  #homeInfomation{
    height: 200px;
  }
  #homeInfomation span{
    display: block;
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
