<template>
    <div class="container con"v-if="$store.state.setPassword">
      <div class="row" style="height:447px;">
        <div class="container col-sm-10 col-sm-offset-1 con-co">
              <div class="row before-top"></div>
              <div class="row con-top">
                <div class="col-sm-2 col-sm-offset-2 text-center">1.手机号注册</div>
                <div class="col-sm-2 col-sm-offset-1 text-center col-top-co2">2.填写基本信息</div>
                <div class="col-sm-2  col-sm-offset-1 text-center">3.注册成功</div>
              </div>
              <div class="row" style="height:30px"></div>
                <form style="margin-top: 20px">
                        <div class="row col-sm-4  text-center col-sm-offset-4">
                          <div class="col-sm-10 col-sm-offset-1 formStyle1">
                            <input type="password" class="form-control leftStyle" placeholder="请输入密码" v-model="Pwd1">
                            <span :Pwd1="Pwd1">{{tiShi4}}</span>
                          </div>
                          <div class="col-sm-10 col-sm-offset-1 formStyle1" style="margin-top: 30px">
                            <input type="password" class="form-control leftStyle" placeholder="再次输入密码" v-model="Pwd2">
                            <span :Pwd2="Pwd2">{{tiShi5}}</span>
                          </div>
                          <div class="col-sm-10  col-sm-offset-1" style="margin-top: 20px;">
                            <button type="button" class="btn bt btn-lg " style="width:130px;" @click="submit">
                              <span style="color: white">保存密码</span>
                            </button>
                          </div>
                        </div>
                      </form>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      data(){
        return {
          Pwd1:'',
          Pwd2:'',
          tiShi4:'',
          tiShi5:'',
          pw:0,
          same:0
        }
      },
      watch:{
        Pwd1(){
          const _this = this;
          const reg = /^([a-zA-Z0-9]|[._]){6,12}$/;
          if(!reg.test(_this.Pwd1)){
            _this.tiShi4 = '请输入6-12个数字、字母或者带“_”、“.”的密码';
            _this.pw=0;
          }else {
            _this.tiShi4 = '';
            _this.pw=1;
            _this.same=0;
          }
        },
        Pwd2(){
          const _this = this;
          console.log("在输入密码判断的时候的第一个密码"+_this.Pwd1)
          if(_this.Pwd1 != _this.Pwd2){
            _this.tiShi5 = '请输入相同的密码'
            _this.same=0;
          }else {
            _this.tiShi5 = ''
            _this.same=1;
          }
        },
      },
      methods:{
        submit:function () {
          console.log("下一步前密码"+this.pw);
          console.log("下一步前是否一致"+this.same);
         if(this.pw==1&&this.same==1){
           let _this = this;
           console.log("注册的手机号"+this.$store.state.userPhone);
           console.log("注册的密码是:"+_this.Pwd1)
           this.$ajax.get(`${axios.defaults.baseURL}/users/insertUser/` + (this.$store.state.userPhone) + '/' + (_this.Pwd1)
           ).then(function (result) {
           }, function (err) {
             console.log(err);
           });
           this.$store.state.setPassword=false;
           this.$store.state.success=true;
         }else {
           alert("请保持密码格式正确和两次密码一致");
           console.log("请保持密码格式正确和两次密码一致")
         }
        }
      },
        name: "RegisterPassword"
    }
</script>

<style scoped>
  .con{
    height: 500px;
    background-color:#fafafa
  }
  .con-co{
    height:380px;
    background-color:#fafafa;
    margin-top:30px;
  }
  .before-top{
    height: 80px;
  }
  .con-top{
    font-size:18px;
    /*border: 1px solid red;*/
    height: 35px;
    border-bottom: 2px solid #ccc;
  }
  .col-top-co2{
    color: orangered;
    font-weight: bold;
    /*border: 1px solid red*/
  }
  span{color: red;}
  .bt{
    background-color: #9e9e9e;
  }
</style>
