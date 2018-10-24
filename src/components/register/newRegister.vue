<template>
  <div class="con">
    <div class="container con1">
      <div class="row con-nav">
        <div class="col-sm-12 con-nav-col">注册</div>
      </div>
      <div class="row con-body">
        <div class="container col-sm-8 col-sm-offset-2 con-body-con text-center">
          <div style="height: 50px"></div>
          <div class="row col-sm-5 col-sm-offset-6 col-list">
              <div class="row">
                <div style="height: 50px"></div>
                <form>
                  <div class="input-group col-sm-8 col-sm-offset-2">
                    <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
                    <input id="tel" type="text" @change="countTel"  class="form-control" placeholder="请输入手机号:" aria-describedby="basic-addon1">
                  </div>
                  <div style="height:30px"></div>
                  <div class="input-group col-sm-8 col-sm-offset-2 ">
                    <span class="input-group-addon" id="basic-addon2"><span class="glyphicon glyphicon-lock"></span></span>
                    <input type="password" id="pwd"  class="form-control" placeholder="请输入密码:" aria-describedby="basic-addon2">
                  </div>
                 <!--*******************************-->
                  <!--<div class="row buttonStyle">-->
                    <!--<input type="text" class="form-control col-xs-6 formStyle3" placeholder="请输入验证码" v-model="vCode">-->
                    <!--<button type="button" class="btn btn-default col-xs-6 col-xs-offset-1 formStyle3" @click="sendCode">获取短信验证码</button>-->
                    <!--<span :vCode="vCode" class="spanW">{{tiShi3}}</span>-->
                  <!--</div>-->
                  <!--****************************************-->
                  <div style="height:50px"></div>
                  <div class="col-sm-8 col-sm-offset-2">
                    <button  type="button" @click="register" class="btn btn-primary btn-lg" style="width:190px;">
                      注册
                    </button>
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
        name: "newRegister",
      data() {
        return {
          vCode:'',
          tiShi3:'',
          Num:'',
          // **************
          telnum:0,
          inputTel:'',
          pwd:''
        }
      },
      // **********************
      watch:{
        vCode(newmobile,oldmobile){
          const ha = this;
          if(ha.vCode != ha.Num){
            ha.tiShi3 = '验证码为空或者输入的验证码不正确！'
          }else {
            ha.tiShi3 = ''
          }
        },
      },

      // **********************
      //   methods:{
      //     sendCode(){
      //       this.Num = '';
      //       let num = this.Num;      //容器
      //       for(let i =0;i<6;i++){   //循环六次
      //         num += Math.floor(Math.random()*10);
      //       }
      //       this.Num = num;
      //       console.log(this.Num)
      //       axios.get('/proxy?mobile=13812865905&tpl_id=107464&tpl_value=%23code%23%3D'+
      //       this.Num + '&key=f6c00dd68ea7dd48830de054cab57d8a')
      //         .then((res)=>{
      //           console.log(res);
      //           console.log(this.num);
      //         }).catch(err=>{console.log(err)})
      //     },
          // *****************************
          tologin:function(){
            this.$router.replace({path:"/login"})
          },
         countTel: function () {
          this.inputTel = $("#tel").val();
          console.log("输入的手机号是"+this.inputTel);
          let _this = this;
          this.$ajax.get(`${axios.default.baseURL}/users/getTel/` + (_this.inputTel)
          ).then(function (result) {
            _this.telnum = result.data.data[0].sum;
            console.log("输入的手机号在数据库中的数量为"+_this.telnum)
            if(_this.telnum>0){
              alert("您已经注册过了，点击去登录");
              _this.tologin();
            }
          }, function (err) {
            console.log(err);
          });
        },
          register:function () {
            this.pwd = $("#pwd").val();
            console.log("输入的密码是"+this.pwd);
            let _this = this;
            this.$ajax.get(`${axios.default.baseURL}/users/insertUser/` + (_this.inputTel)+'/'+(_this.pwd)
            ).then(function (result) {
              alert("注册成功去登录吧")
              _this.tologin();
            }, function (err) {
              console.log(err);
            });
          }

    }
</script>

<style scoped>
  .con{
    width:100%;
    height:590px;
    background-color:#ebf6df
  }
  .con1{
    height:580px;
    background-color:lightgoldenrodyellow
  }
  .con-nav{
    height:53px;
    background-color:#528970
  }
  .con-nav-col{
    width:200px;
    height:53px;
    line-height:52px;
    font-size: 18px;
    color: white
  }
  .con-body{
    height:447px;

  }
  .con-body-con{
    margin-top:30px;
    height:400px;
    background-color:#fafafa;
    /*border: 1px solid red;*/
    background-image: url("../../assets/reg2.jpg");
  }
  .col-list{
    border: 1px solid #ccc;
    height:300px;
    background-color: lavender;
    opacity: 0.7;
  }

</style>
