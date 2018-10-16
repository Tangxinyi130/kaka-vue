<template>
  <div style="width:100%;height:590px;background-color:#fafafa">
    <div class="container" style=" height: 500px;background-color:#ebf6df">
      <div class="row" style="height:53px;background-color:#528970">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">发送明信片
        </div>
      </div>
      <div class="row" style="height:447px;">
        <div class="container col-sm-10 col-sm-offset-1" style="height:380px;background-color:#fafafa">
          <div class="row" style="height:133px">
            <div class="col-sm-2 col-sm-offset-1" style="border: 1px solid black;height:133px;margin-top: 30px">
              <h3>头像</h3>
            </div>
            <div class="col-sm-7 col-sm-offset-1" style="border: 1px solid black;height:133px;margin-top: 30px">
              <h3>用户介绍</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1" style="height:30px;"></div>

          </div>
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1" style="border: 1px solid black;height:83px;">
              <h3>介绍</h3>
            </div>

          </div>
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1 text-center"
                 style="border: 1px solid black;height:35px;margin-top: 10px">
              您已经发送了一张明信片
            </div>
          </div>
          <div class="row">
            <div class="col-sm-10 col-sm-offset-5" style="height:30px;margin-top: 10px
">
              <button type="submit" class="btn btn-default">
                <router-link to="/">点击返回首页</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PostcardsSendInterface"
  }
</script>

<style scoped>

</style>
