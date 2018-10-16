<template>
  <div style="width: 250px" >
    <div style="height: 30px"></div>
    <form action="" method="post">
      <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">
            <span class="glyphicon glyphicon-user"></span>
          </span>
        <input type="text" name="username" class="form-control" placeholder="请输入手机号:" aria-describedby="basic-addon1">
      </div>
      <div style="height: 30px "></div>
      <div class="input-group ">
          <span class="input-group-addon" id="basic-addon2">
            <span class="glyphicon glyphicon-lock"></span>
          </span>
        <input type="text" name="password" class="form-control" placeholder="请输入密码:" aria-describedby="basic-addon2">
      </div>
      <div style="height: 10px"></div>
      <div style="font-size: 12px;" class="row">
        <div class="col-sm-5"><input type="checkbox"/>记住密码</div>
        <div class="col-sm-4 col-sm-offset-3">
          <router-link to="/" style="">忘记密码?</router-link>
        </div>
      </div>
      <div style="height: 30px"></div>
      <div style="" class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <button id="toLogin" type="button" class="btn btn-primary btn-lg" style="width:180px;">
            登 录
          </button>
        </div>
      </div>
      <div class="row"style="border-bottom: 1px #ccc solid;margin-top:20px"></div>
      <div class="row"style="margin-top: 10px;font-size: 12px">
        <div class="col-sm-7 col-sm-offset-5">其他登录方式 qq 微信</div>
      </div>
    </form>


  </div>
</template>

<script>
    window.onload = function () {
          $("#toLogin").click(function () {
          let user = {};
          user.username = $("[name='username']").val();
          user.password = $("[name='password']").val();
          $.ajax({
            // xhrFields: {
            //   withCredentials: true
          // },
          url: "http://localhost:3000/users/doLogin",
          type: "post",
          data: {
            username: user.username,
            password: user.password
          },
          success: function (result) {
            if (result.data == 1) {
              alert("用户名错误");
            } else if (result.data == 2) {
              alert("密码错误");
            } else if (result.data == 3) {
              alert("登录成功");

              save(user.username);

              location.href = "http://localhost:8080";
            } else {
              alert("服务器错误");
            }
          }
        })
      })
    };

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
      name: "LoginList",
      computed: mapGetters([
        "isLogin",
        "userId"
      ])
    }

</script>

<style scoped>

</style>
