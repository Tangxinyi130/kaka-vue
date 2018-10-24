<template>
  <div id="homeLogin">
    <div class="login-box">
      <nav>
        <span>登录</span>
      </nav>
      <form role="form-horizontal">
        <div class="form-group" style="margin-top: 20px">
          <input type="text" class="form-control" v-model="username"  id="login" placeholder="请输入手机号">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" v-model="password" id="password" placeholder="请输入密码">
        </div>
        <div class="row" style="height: 30px">
          <div class="col-sm-6 ">
              <!--<input type="checkbox"> 记住密码-->
          </div>
          <div class="col-sm-4 col-sm-offset-2" style="text-align: right ">
              <!--<router-link to="/" style="">忘记密码?</router-link>-->
          </div>
        </div>
        <button type="submit" @click="toLogin" class="btn btn-default btn-info form-control" style="margin-top: -20px">登录</button>
      </form>
      <div style="height: 1px; border-top:1px solid #ccc; margin-top: 12px "></div>
      <div style="height: 30px; line-height: 30px">
        <!--其他登录：<router-link to="/" style="">QQ</router-link>&nbsp;&nbsp;<router-link to="/" style="">微信</router-link>-->
      </div>
    </div>
  </div>
</template>

<script>
    //将用户id存到localStorage中
    function save(tel) {
      $.ajax({
        url: "http://localhost:3000/users/getUserId",
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
      name: "HomeLogin",
      computed: mapGetters([
        "isLogin",
        "userId"
      ]),
      data() {
        return {
          username: "",
          password: "",
        }
      },
      methods: {
        toLogin: function () {
          let _this =this;
          axios.post("http://localhost:3000/users/doLogin",
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
  nav{
    height: 30px;
    color: rgba(24, 24, 24, 0.92);
    font-size: 20px;
    border-bottom: 1px solid salmon;
    margin-bottom: 10px;
  }

  #homeLogin{
    width: 360px;
    height: 300px;
    border-radius: 1px;
    background-color: #c5dff5;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .login-box{
    width: 300px;
    height: 265px;
    background-color: white;
    position: absolute;
    padding: 10px 15px 5px 15px ;
  }
  @media  screen and (max-width: 479px) {
    #homeLogin{
      visibility:hidden;
    }
  }
  @media screen and (min-width: 480px) and (max-width: 767px){
    #homeLogin{
      visibility:hidden;
    }
  }
  @media screen and (min-width:768px) and (max-width:991px ){
    #homeLogin{
      visibility:hidden;
    }
  }
  @media screen and (min-width:992px) and (max-width:1199px ){
    .form-control{
      width: 85%;
    }
    .login-box hr{
      width: 85%;
    }

  }
  @media screen and (min-width: 1200px){

  }
</style>
