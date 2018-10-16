<template>
    <div>
      <h3>登录列表</h3>
      <form action="" method="post">
        手机号：<input type="text" name="username">
        密码：<input type="password" name="password">
        <input type="button" value="登录">
      </form>
    </div>
</template>

<script>
    window.onload = function () {
          $("input:last").click(function () {
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
