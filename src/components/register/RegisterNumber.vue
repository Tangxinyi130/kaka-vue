<template>
  <div v-if="$store.state.iphoneNumber">
    <div class="container con" >
      <div class="row con-row">
        <div class="container c-con col-sm-10 col-sm-offset-1">
          <div class="row">
            <div class=" row-con-row1"></div>
            <div class=" row-con-row2">
                <div class="col-sm-2 col-1  text-center col-sm-offset-2">1.手机号注册</div>
                <div class="col-sm-2  text-center col-sm-offset-1">2.填写基本信息</div>
                <div class="col-sm-2  col-sm-offset-1 text-center">3.注册成功</div>
            </div>
            <div class="row-con-row5"></div>
            <div class=""style="height:200px;">
              <form>
                <div class="row col-sm-4 formStyle col-sm-offset-4 "style="margin-top:30px;">
                  <input @change="countTel" type="text" id="tel" class="form-control leftStyle" placeholder="请输入手机号" v-model="mobile">
                  <!--<span :mobile="mobile" >{{tiShi1}}</span>-->
                </div>
                <div class="row col-sm-4 col-sm-offset-4"style="height:30px;">
                  <span :mobile="mobile" >{{tiShi1}}</span>
                </div>
                <div class="row col-sm-4 buttonStyle col-sm-offset-4" style="">
                  <div class="col-sm-7 " style="margin-left: -15px">
                    <input type="text" class="form-control col-xs-6 formStyle3" placeholder="请输入验证码" v-model="vCode">
                  </div>
                  <div class="col-sm-5">
                    <!--<input type="button"class="btn btn-default  formStyle3 " @click="sendCode" id="co" value="获取短信验证码"/>-->
                    <button type="button" class="btn btn-default  formStyle3 getCoBtn" @click="sendCode" id="co">{{btnName}}</button><br>
                  </div>
                  <div class="row col-sm-10"style="height:30px;">
                    <span :vCode="vCode" class="spanW"style="margin-top: 20px;">{{tiShi3}}</span>
                  </div>
                  <div class="row col-sm-10  col-sm-offset-1"style="margin-top: 20px;">
                    <button  type="button" class="btn btn-lg bt col-xs-6 col-xs-offset-3"@click="submit">
                      <span style="color: white">下一步</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      data() {
        return {
          vCode:'',
          mobile:'',
          Num:'',
          telnum:0,
          inputTel:'',
          inputCode:'',
          tiShi1:'',
          tiShi3:'',
          teltrue: 0,
          codetrue: 0,
          count:60,
          btnName: "获取验证码"
        }
      },
      methods:{
        getsecond:function(){
          var _this=this;
          $('#co').attr("disabled", true)
          _this.count=60;
          _this.btnName = _this.count+'秒后重新获取';
          var time = window.setInterval(function () {
            if(_this.count > 0){
              _this.count--;
              let btname = _this.count+'秒后重新获取';
              _this.btnName =btname;
            // console.log(_this.count)
            }
            if (_this.count == 0){
              // _this.count=''
              _this.btnName = "获取验证码";
              $('#co').attr("disabled", false);
              _this.codetrue =0;
              clearTimeout(time);
            }
          },1000)
         console.log($('#co').val());
        },
        sendCode(){
          if (this.inputTel) {
            this.Num = '';
            let num = this.Num;      //容器
            for(let i =0;i<6;i++){   //循环六次
              num += Math.floor(Math.random()*10);
            }
            this.Num = num;
            console.log(this.Num);
            console.log("给"+this.inputTel+"发送短信");
            // this.$ajax.get('/proxy?mobile='+this.inputTel+'&tpl_id=109157&tpl_value=%23code%23%3D'+this.Num+'&key=f6c00dd68ea7dd48830de054cab57d8a')
            //   .then((res)=>{
            //     console.log(res)
            //   }).catch(err=>{console.log(err)})
            this.getsecond();
          } else {
            alert("请输入手机号！")
          }
          // if(this.inputTel==''){
          //   alert('')
          // }else {

          },
        submit:function () {
          console.log("下一步之前手机号" + this.teltrue)
          console.log("下一步之前验证码" + this.codetrue)
          if(this.teltrue == 1 && this.codetrue == 1){
            this.$store.state.iphoneNumber = false;
            this.$store.state.setPassword = true;
            this.$store.state.userPhone=$("#tel").val();
            console.log("注册的手机号"+this.$store.state.userPhone);
          }else {
            alert("请检查你的手机号和验证码")
          }
        },
        tologin:function(){
          this.$router.replace({path:"/login"})
        },
        countTel: function () {
          this.inputTel = $("#tel").val();
          console.log("输入的手机号是" + this.inputTel);
          let _this = this;
          console.log(`路由：${axios.defaults.baseURL}`)
          this.$ajax.get(`${axios.defaults.baseURL}/users/getTel/`+(_this.inputTel)
          ).then(function (result) {
            console.log(_this.inputTel);
            console.log("输入的手机号在数据库中的数量为"+ result.data.data[0].sum)
              if(result.data.data[0].sum > 0){
                alert("您已经注册过了，点击去登录");
                _this.tologin();
              }
          }, function (err) {
            console.log(err);
          });
        }
      },
        name: "RegisterNumber",
       watch:{
        mobile(){
          const _this = this;
          const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
            if(!(reg.test(_this.mobile))){
              _this.tiShi1 = '手机号不正确！';
              _this.teltrue=0;
            }else{
              console.log("即将注册的手机号"+$("#tel").val());
              _this.tiShi1 = '';
              _this.teltrue=1;
              this.codetrue=0;
            }
            if(_this.mobile==''){
              _this.tiShi1 = '';
              _this.teltrue=0;
            }
        },
        vCode(){
          const ha = this;
          if(ha.vCode != ha.Num){
            this.codetrue=0;
            ha.tiShi3 = '验证码不正确！'
          }else {
            ha.tiShi3 = '';
            this.codetrue=1;
          }
        },
      },

    }
</script>
<style scoped>
  /*.getCoBtn {*/
    /*!*disabled: disabled;*!*/
  /*}*/
  #co {
    width: 123px;
    color: #5e5e5e;
  }
  .con{
    height:500px;
    color: #5e5e5e;
  }
  .c-con{
    height:380px;
    background-color:#fafafa;
    margin-top:30px;
  }
  .con-row{
    height:447px;
  }
  .row-con-row1{
    height: 80px
  }
  .row-con-row2{
    font-size: 18px;
  }
  .col-1{
    color: orangered;
    font-weight: bold;
  }
  .row-con-row5{
    height:30px;
    border-bottom: 2px solid #ccc;
  }
  span{
    color: red;
  }
  .bt{
    background-color: #9e9e9e;
  }
</style>
