<template>
  <div v-if="$store.state.iphoneNumber">
      <div class="container con">
          <div class="row con-row">
              <div class="container col-sm-10 col-sm-offset-1"style="height:380px;background-color:#fafafa;margin-top:30px">
                  <div class="row">
                      <div class="container">
                          <div class="row row-con-row1"></div>
                          <div class="row row-con-row2">
                              <div class="col-sm-3  col-sm-offset-1 row-con-row2-sm1">1.手机号注册</div>
                              <div class="col-sm-3">2.填写基本信息</div>
                              <div class="col-sm-3  col-sm-offset-1">3.注册成功</div>
                          </div>
                          <div class="row row-con-row3" ></div>
                          <div class="row row-con-row4">
                              <div class="col-sm-8  col-sm-offset-1 row-con-row4-sm"></div>
                          </div>
                          <div class="row row-con-row5"></div>
                          <div class="row row-con-row6" >
                              <div class="container">
                                 <div class="row">
                                      <div class="container col-sm-4 col-sm-offset-3"style="height:200px;">
                                          <form>
                                                <!--<div class="row" style="height:30px"></div>-->
                                                   <div class="row col-sm-10 formStyle col-sm-offset-1">
                                                     <input @change="countTel" type="text" id="tel" class="form-control leftStyle" placeholder="请输入手机号" v-model="mobile">
                                                     <span :mobile="mobile" >{{tiShi1}}</span>
                                                   </div>
                                                   <!--<div class="row" style="height:20px"></div>-->
                                                   <div class="row col-sm-10 buttonStyle col-sm-offset-1" style="margin-top:20px;">
                                                     <input type="text" class="form-control col-xs-6 formStyle3" placeholder="请输入验证码" v-model="vCode">
                                                     <button type="button" class="btn btn-default  formStyle3 col-xs-6" @click="sendCode">获取短信验证码</button><br>
                                                     <span :vCode="vCode" class="spanW"style="margin-top: 20px">{{tiShi3}}</span>
                                                   </div>
                                                    <div class="row col-sm-10  col-sm-offset-1"style="margin-top: 20px;">
                                                        <button type="button" class="btn btn-primary btn-lg col-xs-6 col-xs-offset-3" style="" @click="submit">
                                                          <span style="color: white">下一步</span>
                                                        </button>
                                                    </div>
                                          </form>
                                      </div>
                                 </div>
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
  import axios from 'axios'
    export default {
      data() {
        return {
          vCode:'',
          mobile:'',
          Num:'',
          telnum:0,
          inputTel:'',
          pwd:'',
          tiShi1:'',
          tiShi3:'',
         teltrue:1,
        }
      },
      methods:{
        sendCode(){
          this.Num = '';
          let num = this.Num;      //容器
          for(let i =0;i<6;i++){   //循环六次
            num += Math.floor(Math.random()*10);
          }
          this.Num = num;
          console.log(this.Num)
          // axios.get('/proxy?mobile=13812865905&tpl_id=109157&tpl_value=%23code%23%3D'+this.Num+'&key=f6c00dd68ea7dd48830de054cab57d8a')
          //   .then((res)=>{
          //     console.log(res)
          //   }).catch(err=>{console.log(err)})
        },
        submit:function () {
          this.$store.state.iphoneNumber=false;
          this.$store.state.setPassword=true;
        },
        tologin:function(){
          this.$router.replace({path:"/login"})
        },
        countTel: function () {
          this.inputTel = $("#tel").val();
          const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
          console.log("输入的手机号是"+this.inputTel);
          let _this = this;
          this.$ajax.get(`${axios.default.baseURL}/users/getTel/` + (_this.inputTel)
          ).then(function (result) {
            console.log(_this.inputTel);
            console.log("输入的手机号在数据库中的数量为"+ result.data.data[0].sum)
            if(!(reg.test(_this.inputTel))){
              alert("对不起您的手机号输入错误");
              this.teltrue=0;
            }else if(result.data.data[0].sum>0){
              alert("您已经注册过了，点击去登录");
              _this.tologin();
            }
          }, function (err) {
            console.log(err);
          });
        },
        send:function () {
          //判断手机号的格式是否正确，如果不正确将会提示手机号输出错误
          if(this.tishi1=''){
            console.log('手机格式正确了')
          }

        }
      },
        name: "RegisterNumber",
       watch:{
        mobile(newmobile,oldmobile){
          const ha = this;
          const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
          if(!(reg.test(ha.mobile))){
              ha.tiShi1 = '手机号不正确！';
            }else{
              ha.tiShi1 = ''
            }

        },
        vCode(newmobile,oldmobile){
          const ha = this;
          if(ha.vCode != ha.Num){
            ha.tiShi3 = '验证码不正确！'
          }else {
            ha.tiShi3 = ''
          }
        },
      },

    }
</script>
<style scoped>
  .con{
    height:500px;
    background-color:lightgoldenrodyellow
  }
  .con-row{
    height:447px;
  }
  .row-con-row1{
    height: 80px
  }
  .row-con-row2{
    font-size: 18px
  }
  .row-con-row2-sm1{
    color: red
  }
  .row-con-row3{
    height: 5px
  }
  .row-con-row5{height:30px}
  .row-con-row4-sm{
    border: 1px solid #cccccc
  }
  /*******/
  span{color: red;}
</style>
