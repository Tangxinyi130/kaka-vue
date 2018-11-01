<template>
    <div class="container con"v-if="$store.state.success">
        <div class=" col-sm-10 col-sm-offset-1 con-body">
          <div class="row" style="height: 80px"></div>
          <div class="row text-center con-body-co" >
            <div class="col-sm-2  col-sm-offset-2">1.手机号注册</div>
            <div class="col-sm-2  col-sm-offset-1">2.填写基本信息</div>
            <div class="col-sm-2  col-sm-offset-1 con-body-co3">3.注册成功</div>
              </div>
          <div class="row" style="height:40px;"></div>
          <form>
            <div class="row">
              <div class="col-sm-4 col-sm-offset-4 text-center wc">
                <span>恭喜你!完成注册快点我登录吧。</span>
              </div>
            </div>
            <div class="row"style="height: 30px"></div>
            <div class="row" >
              <div class="col-sm-4 col-sm-offset-5">
                <button type="button" class="btn bt bg-primary btn-lg" style="width:120px;" @click="submit">
                  <span style="color: white">点我登录</span>
                </button>
              </div>
            </div>
          </form>
        </div>
    </div>
</template>

<script>
    export default {
      methods:{
        submit:function () {
          this.$store.state.success=false;
          this.$router.replace({path:"/login"})
        }
      },
        name: "RegisterSuccess"
    }
</script>

<style scoped>
.con{
  height:500px;
  background-color:#fafafa;
  /*border: 1px solid red;*/
}
  .con-body{
    height:380px;
    background-color:#fafafa;
    margin-top:30px;
  }
  .con-body-co{
    font-size:18px;
    height: 35px;
    border-bottom: 2px solid #ccc;
  }
  .con-body-co3{
    color: orangered;
    /*border: 1px solid red;*/
    font-weight:bold;
  }
  .wc{
    font-size:18px;
    /*border: 1px solid red*/
  }
  .bt{
    background-color: #BDD1C5;
  }
</style>
