<template>
    <div class="container con">
      <div style="height: 30px;" class="row"></div>
      <form action="" method="post">
        <div class="row con-row1">
          <div class="col-sm-10 col-sm-offset-1">
            <div class="input-group">
              <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
              <input type="text" name="username" v-model="username" class="form-control" placeholder="请输入手机号:" aria-describedby="basic-addon1">
            </div>
          </div>
        </div>
        <div style="height: 30px;" class="row"></div>
        <div class="row">
          <div class="col-sm-10 col-sm-offset-1">
            <div class="input-group ">
              <span class="input-group-addon" id="basic-addon2"><span class="glyphicon glyphicon-lock"></span></span>
              <input type="password" name="password" v-model="password" class="form-control" placeholder="请输入密码:" aria-describedby="basic-addon2">
            </div>
          </div>
          <div style="height: 10px"></div>
        </div>
        <div style="height: 20px;" class="row"></div>
        <div style="font-size: 12px;" class="row">
                  <!--<div class="col-sm-5 col-sm-offset-1"><input type="checkbox"/>记住密码</div>-->
                  <!--<div class="col-sm-4 col-sm-offset-2"><router-link to="/" style="">忘记密码?</router-link></div>-->
        </div>
        <div style="height: 30px"></div>
        <div style="" class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <button id="toLogin" @click="toLogin" type="button" class="btn bt btn-lg" style="">
              登 录
            </button>
          </div>
        </div>
        <div class="row" style="border-bottom: 1px #ccc solid;margin-top:20px;"></div>
        <div class="row" style="margin-top:5px;font-size: 12px">
                  <!--<div class="col-sm-6 col-sm-offset-7">其他方式 qq 微信</div>-->
        </div>
      </form>
    </div>
</template>

<script>
  //将用户id存到localStorage中
  function save(tel) {
    $.ajax({
      url: `${axios.defaults.baseURL}/users/getUserId`,
      type: "post",
      data: {
        userTel: tel
      },
      success: function (result) {
        if(localStorage) {
          localStorage.setItem("userId", JSON.stringify(result.data.userId));
        }
      }
    })
  }

  import {mapGetters} from "vuex"
  export default {
    name: "LoginList",
    computed: mapGetters([
      "isLogin",
      "userId"
    ]),
    data() {
      return {
        username: "",
        password: ""
      }
    },
    methods: {
      toLogin: function () {
        let _this =this;
        axios.post(`${axios.defaults.baseURL}/users/doLogin`,
          {
            username: _this.username,
            password: _this.password
          }).then(function (result) {
          if (result.data.data == 1) {
            alert("用户名错误");
          } else if (result.data.data == 2) {
            alert("密码错误");
          } else if (result.data.data == 3) {
            alert("登录成功");
            save(_this.username);
            location.href = "/";
          } else {
            alert("服务器错误");
          }
        }, function (err) {
          console.log(err);
        })
      }
    },
  }
</script>
<style scoped>
    .con{
        height:300px;
        background-color:#efefef;
    }
  .bt{
    background-color: #9e9e9e;
    width:180px;
    color: white;
  }

</style>
