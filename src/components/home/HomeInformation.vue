<template>
  <div id="homeInfomation">
    <div class="info-nav"><span class="info-text">本站数据量统计</span></div>
    <table>
      <tr>
        <td><img width="30px" height="30px" src="../../assets/images/home/users.png" alt=""></td>
        <td>:&nbsp;&nbsp;<span> {{usersCount}}</span>:&nbsp;&nbsp;用户加入我们的网站</td>
      </tr>
      <tr>
        <td><img width="30px" height="30px" src="../../assets/images/home/send.png" alt=""></td>
        <td>:&nbsp;&nbsp;<span>{{travelingCardNum}}</span>:&nbsp;&nbsp;明信片正在漂流</td>
      </tr>
      <tr>
        <td><img width="30px" height="30px" src="../../assets/images/home/receive.png" alt=""></td>
        <td>:&nbsp;&nbsp;<span>{{receivedNum}}</span>:&nbsp;&nbsp;张总收到明信片</td>
      </tr>
      <tr>
        <td> <img width="30px" height="30px" src="../../assets/images/home/time.png" alt=""></td>
        <td>::&nbsp;&nbsp;<span>{{recentReceivedNum}}</span>:&nbsp;&nbsp;最近一小时收到的明信片</td>
      </tr>
      <tr>
        <td><img width="30px" height="30px" src="../../assets/images/home/china.png" alt=""></td>
        <td>:&nbsp;&nbsp;<span>{{cityTotal}}</span>:&nbsp;&nbsp;个省份已经加入</td>
      </tr>
      <tr>
        <td>
          <img width="30px" height="30px" src="../../assets/images/home/distance.png" alt="">
        </td>
        <td>:&nbsp;&nbsp;<span>{{distanceTotal}}</span>:&nbsp;&nbsp;的明信片漂流总距离</td>
      </tr>
    </table>
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
        this.$ajax.get(`${axios.defaults.baseURL}/information`).then(function (result) {
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
    margin-top: 15px;
    height: 305px;
    /*max-width: 360px;*/
    background-color: #fafafa;
  }
  .info-nav{
    max-width: 1140px;
    height: 45px;
    line-height: 45px;
    background-color: #d5d5ab;
    border-radius: 5px 5px 0px 0px;
  }
  .info-nav .info-text{
    font-size: 18px;
    color: whitesmoke;
    display: inline-block;
    padding-left: 15px;
  }
  #homeInfomation table{
    margin: 0 auto;
  }
  #homeInfomation table tr{
    height: 38px;
  }
  #homeInfomation table tr:first-child{
    width: 90px;
  }
  #homeInfomation table tr:last-child{
    max-width: 260px;
  }
  table tr td span{

    color: skyblue;
    font-size: 20px;
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
