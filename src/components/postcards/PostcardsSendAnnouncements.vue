<template>
  <div class="con">
    <div class="container">
      <div class="row con-nav">
        <div class="col-sm-12 con-nav-row">发送明信片</div>
      </div>
      <div class="row con-body">
        <div class="container col-sm-8 col-sm-offset-2">
          <div class="row con-body-row"  v-if="$store.state.postSendAnn">
            <div class="text-center agreen">
              <p>发送协议</p>
             </div>
            <div class="">
              <p class="tishi">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本服务旨在为用户提供本公司商品信息，并接受购买商品的订单。本条约适用于由于本服务而产生的用户和本公司之间的所有事项本公司在未得到用户允许的情况下，对本条约拥有变更的权利。并且，本公司将使用合适的方法告知用户用户在遵守本条约前提下，承诺只使用本公司提供的服务。本服务中提供的信息及相关著作权等一些知识产权，属本公司所有。</p>
            </div>
            <div class="col-sm-offset-1 ag">第1条:服务概要/目的</div>
            <div class="col-sm-offset-1 ag">第２条:本条约的使用范围</div>
            <div class="col-sm-offset-1 ag">第3条:本服务的权利</div>
            <div class="col-sm-offset-1 ag">第4条:网站账号ID及密码</div>
            <div class="tishi">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;用户在使用本服务时，对网站提供的信息，数据，图像用作其他用途时，本公司有追究的权利。本公司对于利用本服务的用户，免费提供网站登录的账号及密码。用户对从本公司接收的账号和密码的保管，以及运营管理负有全部的责任。若因用户的保管及使用管理上的遗漏所产生的损害，本公司不承担一切法律责任。用户利用账号和密码使用本服务的的行为均视同客户的行为，由此产生的有关责任均由用户承担用户若想更换账号和密码时，必须在本公司的指导下取得本公司的许可后，按照本公司指定方式进行变更。用户在使用的账号及密码被盗，或认为有被盗嫌疑的情况下，应立即通知本公司。届时， 本公司会立即提供新的账号及密码后重新通知用户。
            </div>
            <form>
                <div class="row body-row-form">
                  <button type="button" class="btn  btn-lg body-row-form-btn"  @click="submit" >
                    <span style="color: white">同意去发送</span>
                  </button>
                </div>
              </form>
            </div>
          <!--***************************************************-->
          <div class="container col-sm-12 body-con" v-if="$store.state.postSend" style="">
           <div class="row body-con-row1" style="margin-top:30px">
             <div style="">
              <div class="text-center">
                <span class="user"> 接收方介绍 </span>
              </div>
             </div>
             <div style="height:10px"></div>
             <div style="height:150px">
               <div style="height:10px"></div>
               <div class="col-sm-2 col-sm-offset-1 body-con-row1-col1" style="">
                <img :src="userHeadPic" alt="" width="125px" height="125px" style=" border-radius:50%;">
               </div>
              <div class="col-sm-8 " style="height: 150px;">
                <div style="height:10px"></div>
                <div class="detaile" >
                  <div class="col-sm-3"> 姓名:{{userNickname}} </div>
                  <div class="col-sm-2">性别:{{xingbie}}</div>
                  <div class="col-sm-4">生日:{{ userBirthday}}</div>
                </div>
                <div class="detaile">
                  <div class="col-sm-3">粉丝:{{receiveFans}}</div>
                  <div class="col-sm-2">关注:{{receiveAttion}}</div>
                  <div class="col-sm-4">地区:{{userProvince}}&nbsp;&nbsp;{{userCity}}</div>
                  <div class="col-sm-12">邮箱:{{userEmail}}</div>
                </div>
              </div>
             </div>
             <div style="height:120px">
               <div style="height:40px"></div>
               <div style="" class="el-col-sm-offset-1">
               小提示：【{{userNickname}}】的用户信息已发送到你的邮箱
               记得寄出明信片哦！别忘了将明信片的编号写在明信片上哦！<br>
               ID：<span style="font-weight: bold">{{cardId}}</span>
               </div>
               <div class="col-sm-offset-5">
               <form>
               <button type="button" class="btn btn-lg but"  @click="tohome">
               <span style="color: white">返回首页</span>
               </button><br>
               </form>
               </div>
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
    name: "PostcardsSendAnnouncements",
    data() {
      return {
        sendemail:'',
        emailcounts:0,
        addresscounts:0,
        times:0,
        pooltimes:0,
        cardId:'',
        cardReceive:0,
        userBirthday:'',
        userCity:'',
        userEmail:'',
        userHeadPic:'',
        userNickname:'',
        userProvince:'',
        userSex:0,
        receiveFans:0,
        receiveAttion:0,
        receivemsg:{},
        xingbie: ""
      }
    },
    created() {
      this.$store.state.postSendAnn=true;
      this.$store.state.postSend=false;
      console.log(this.$store.state.postSendAnn);
      console.log(this.$store.state.postSend)
      let _this = this;
      this.$ajax.get(`${axios.defaults.baseURL}/send/limitTimes/`+(localStorage.userId)
      ).then(function (result) {
        console.log(result.data.data);
        _this.times = result.data.data.times;
        _this.pooltimes = result.data.data.pooltimes;
        _this.addresscounts=result.data.data.addresscount;
        _this.emailcounts=result.data.data.useremail;
        _this.sendemail=result.data.data.sendemail;

        console.log("我是已经发送次数的总数"+_this.times)
        console.log("我是pool池里面的数据总数"+_this.pooltimes)
        console.log("我是否有地址1，无地址。0有地址"+_this.addresscounts)
        console.log("我是否有邮箱1，无地址。0有地址"+_this.emailcounts)
        console.log("我是该用户的邮箱"+_this.sendemail)
      }, function (err) {
        console.log(err);
      })
    },
    methods: {
      tohome:function(){
        this.$router.replace({path:"/"})
      },
      sendEmail:function(){
        console.log("发邮件的时候接收方的明信片"+this.cardId);
        let thecardid=this.cardId;
        console.log("我是thecardid"+thecardid);
        // console.log(`路由：${axios.defaults.baseURL}`);
        this.$ajax({
          method:'get',
          url:`${axios.defaults.baseURL}/send/sendEmail/`+(localStorage.userId)+'/'+(thecardid)
        }).then((res)=>{
          console.log("成功")
        })
      },
      // sendEmail:function(){
      //   let _this = this;
      //   this.$ajax({
      //     method:'get',
      //     url:'http://localhost:3000/send/sendEmail/'+ _this.$store.state.userId
      //   }).then((res)=>{
      //     console.log("成功")
      //   })
      // },
      send:function(){
        let _this = this;
        this.$ajax.get(`${axios.defaults.baseURL}/send/sendPostcard/`+(localStorage.userId)
        ).then(function (result) {
          // console.log(result.data.data.userHeadPic);
          console.log(result.data.data);
          _this.receivemsg=result.data.data;
          _this.userNickname = result.data.data.userNickname;
          _this.userHeadPic = `${axios.defaults.baseURL}${result.data.data.userHeadPic}`;
          _this.userProvince = result.data.data.userProvince;
          _this.userCity = result.data.data.userCity;
          _this.userSex = result.data.data.userSex;
          _this.userEmail = result.data.data.userEmail;
          _this.cardId = result.data.data.cardId;
          _this.userBirthday = result.data.data.userBirthday.substring(0,10);
          if (result.data.data.receiveFans) {
            _this.receiveFans = result.data.data.receiveFans;
          }
          if (result.data.data.receiveAttion) {
            _this.receiveAttion = result.data.data.receiveAttion;
          }
          _this.xingbie = _this.userSex;
          // console.log(_this.userSex+'性别是'+_this.xingbie);
          console.log("接收方的粉丝是"+_this.receiveFans);
          console.log("接收方的关注数是"+ _this.receiveAttion);
          console.log("完成发送功能的时候接收方的邮箱"+_this.userEmail);
        }, function (err) {
          console.log(err);
        })
      },
      submit: function () {
        if(this.$store.state.isLogin){
          // ******************
          //如果没有设置地址将会跳到设置界面让用户先去设置地址
          if(this.addresscounts>0 || this.emailcounts>0 ){
            //去设置界面设置地址
            alert("要先设置好个人信息才能加入我们的发送哦！")
            location.href = "/userset";
          }else {
            //进行进一步的判断
            //如果次数在5次之内可以发送，如果超过5次将不会发送
            if(this.times<5){
              //如果pool池里面的数据不足将会提示用户
              if(this.pooltimes<1){
                alert("给您跪下了！我们系统目前繁忙暂时用不了，先去别处逛逛吧！")
                location.href = "/";
              }else {
                // ***********
                  this.send();
                  setTimeout(()=>{
                    this.sendEmail();
                  },3000);
                this.$store.state.postSendAnn=false;
                this.$store.state.postSend=true;
                // ***************
              }
            }else {
              alert("您发送的次数已经超过5次了，静静等待小伙伴的接收吧。");
              location.href = "/";
            }
          }
          // ******************
        }else {
          alert("请前往登录")
          this.$router.replace({path: "/login"})
        }

      },
    },
  }
</script>
<style scoped>
  .con{
    width:100%;
    height:590px;
    background-color:#ebf6df
  }
  .con-nav{
    height:53px;
    background-color:#528970;
  }
  .con-nav-row{
    width:200px;
    height:53px;
    line-height:52px;
    font-size:18px;
    color: white
  }
  .con-body{
    height:480px;
    background-color:#fafafa;
    color: #5e5e5e;
  }
  .con-body-row{
    height:380px;
    margin-top:30px;
    background-color:#fafafa;
    /*border: 1px solid red;*/

  }
  .con-body-row-p{
    font-size: 18px;
    margin-left: 15px;
    font-weight: bolder;
    margin-top: 15px;
  }
  .body-row-form{
    text-align: center
  }
  .body-row-form-btn{
    width:124px;
    background-color:#9e9e9e
  }
  .body-con{
    /*border: 1px solid red;*/
    height:380px;
    background-color:#fafafa;
    margin-top:30px;
    /*background-image:url("../../assets/p31.jpg") ;*/
    border: 3px dashed #ccc;
    /*background-image: url("../../assets/reg2.jpg");*/
  }
  .body-con-row1{
    height:350px
  }
  .body-con-row1-col1{
    /*border:1px solid black;*/
    width:150px;
    height:150px;
    /*margin-top:30px;*/
    border-radius:50%;
  }
  body-con-row2{
  }
  .body-con-row2-col1{
    /*border: 1px solid black;*/
    height:30px;
  }
  .body-con-row3{
    height:30px;
    margin-top:30px
  }
  .user{
    font-weight: bold;
    margin-top: 10px;
    font-size: 16px;
  }
  .user-msg{
    /*border: 1px solid black;*/
    height:130px;
    margin-top:30px;
    color:gray;
    margin-top:100px
  }
  .but{
    width:130px;
    background-color:#9e9e9e;
    margin-top: 20px;
  }
  .ag{
    font-weight: bold;
  }
  .agreen{
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
  }
  .tishi{
    line-height: 26px;
  }
  .detaile{
    /*border: 1px solid red;*/
    height:30px;line-height: 30px
  }

</style>
