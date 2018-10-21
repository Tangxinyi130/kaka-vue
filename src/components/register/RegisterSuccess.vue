<template>
    <div class="container" style=" height: 500px;background-color:lightgoldenrodyellow" v-if="$store.state.success">
      <div class="row" style="height:447px;">
        <div class="container col-sm-10 col-sm-offset-1"style="height:380px;background-color:#fafafa;margin-top:30px;">
          <div class="row">
            <div class="container">
              <div class="row" style="height: 80px"></div>
              <div class="row" style="font-size: 18px">
                <div class="col-sm-3  col-sm-offset-1">1.手机号注册</div>
                <div class="col-sm-3">2.填写基本信息</div>
                <div class="col-sm-3  col-sm-offset-1"style="color: red">3.注册成功</div>
              </div>
              <div class="row" style="height: 5px"></div>
              <div class="row">
                <div class="col-sm-8  col-sm-offset-1" style="border: 1px solid #cccccc"></div>
              </div>
              <div class="row" style="height:30px"></div>
              <div class="row" >
                <div class="container">
                  <div class="row">
                    <div class="container col-sm-4 col-sm-offset-3"style="height: 180px;">
                      <form>
                        <div class="row">
                          <div class="col-sm-7" style="font-size: 18px">
                            恭喜你完成注册！！！
                          </div>
                          <div class="col-sm-2">
                            <button type="button" class="btn btn-primary btn-lg" style="width:180px;" @click="submit">
                              <span style="color: white">点我登录</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

</style>
