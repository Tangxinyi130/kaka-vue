<template>
    <div>
      <h3>登录列表</h3>
      <form action="http://localhost:3000/users/doLogin" method="post">
        手机号：<input type="text" name="username">
        密码：<input type="password" name="password">
        <input type="submit" value="登录">
      </form>
      <!--<form class="form-horizontal">-->
        <!--<div class="form-group">-->
          <!--<label for="inputEmail3" class="col-sm-2 control-label">用户名</label>-->
          <!--<div class="col-sm-10">-->
            <!--<input type="email" class="form-control" id="inputEmail3" placeholder="用户名">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="form-group">-->
          <!--<label for="inputPassword3" class="col-sm-2 control-label">密码</label>-->
          <!--<div class="col-sm-10">-->
            <!--<input type="password" class="form-control" id="inputPassword3" placeholder="密码">-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="form-group">-->
          <!--<div class="col-sm-offset-2 col-sm-10">-->
            <!--<div class="checkbox">-->
              <!--<label>-->
                <!--<input type="checkbox"> 记住密码-->
              <!--</label>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="form-group">-->
          <!--<div class="col-sm-offset-2 col-sm-10">-->
            <!--<button type="submit" class="btn btn-default"><router-link to="/">登录</router-link></button>-->
          <!--</div>-->
        <!--</div>-->
      <!--</form>-->

    </div>
</template>

<script>
    export default {
        name: "LoginList"
    }
</script>

<style scoped>

</style>
