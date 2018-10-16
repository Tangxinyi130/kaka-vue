<template>
  <div style="width:100%;height:590px;background-color:#fafafa">
    <div class="container" style=" height: 500px;background-color:#ebf6df">
      <div class="row" style="height:53px;background-color:#528970">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">发送明信片
        </div>
      </div>
      <div class="row" style="height:447px;">
        <div class="container col-sm-10 col-sm-offset-1" style="  height:400px;background-color:#fafafa">
          <div class="row" style="font-size: 18px;margin-top: 30px">
            <div class="col-sm-2 col-sm-offset-5">接收一张明信片</div>
          </div>
          <div class="row" style="margin-top: 20px">
            <div class="col-sm-10 col-sm-offset-5">
              <form class="form-inline">
                <div class="form-group">
                  <span style="font-size: 18px">请输入明信片的ID:</span>
                  <input type="text" class="form-control" id="exampleInputPassword1" placeholder="请输入明信片的ID">
                </div>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-10 col-sm-offset-5" style="height:35px;margin-top: 10px;font-size: 18px;">
              <span>给对方的一段话：</span>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-8 col-sm-offset-3 text-center" style="height:35px;margin-top: 10px">
              <form>
                <textarea rows="6" cols="40"></textarea>
              </form>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-10 col-sm-offset-1" style="height:120px;"></div>
          </div>
          <div class="row">
            <div class="col-sm-10 col-sm-offset-5" style="height:30px;">
              <button type="submit" class="btn btn-default">
                <router-link to="/">提交</router-link>
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
    name: "PostcardsReceiveInterface"
  }
</script>
<style scoped>
</style>
