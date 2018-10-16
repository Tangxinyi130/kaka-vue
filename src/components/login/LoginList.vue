<template>
  <div style="width: 250px" >
    <div style="height: 30px"></div>
    <form action="http://localhost:3000/users/doLogin" method="post">
      <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">
            <span class="glyphicon glyphicon-user"></span>
          </span>
        <input type="text" class="form-control" placeholder="请输入用户名:" aria-describedby="basic-addon1">
      </div>
      <div style="height: 30px "></div>
      <div class="input-group ">
          <span class="input-group-addon" id="basic-addon2">
            <span class="glyphicon glyphicon-lock"></span>
          </span>
        <input type="text" class="form-control" placeholder="请输入密码:" aria-describedby="basic-addon2">
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
          <button type="button" class="btn btn-primary btn-lg" style="width:180px;">
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
  export default {
    name: "LoginList"
  }
</script>

<style scoped>

</style>
