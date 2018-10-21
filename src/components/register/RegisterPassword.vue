<template>
    <div class="container" style=" height: 500px;background-color:lightgoldenrodyellow" v-if="$store.state.setPassword">
      <div class="row" style="height:447px;">
        <div class="container col-sm-10 col-sm-offset-1"style="height:380px;background-color:#fafafa;margin-top:30px;">
          <div class="row">
            <div class="container">
              <div class="row" style="height: 80px"></div>
              <div class="row" style="font-size: 18px">
                <div class="col-sm-3  col-sm-offset-1">1.手机号注册</div>
                <div class="col-sm-3"style="color: red">2.填写基本信息</div>
                <div class="col-sm-3  col-sm-offset-1">3.注册成功</div>
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
                          <div class="col-sm-4">
                            请设置密码:
                          </div>
                          <div class="col-sm-2">
                              <input type="password" placeholder="请设置密码"/>
                          </div>
                        </div>
                        <div class="row" style="height:30px"></div>
                        <div class="row">
                          <div class="col-sm-4">
                            请确认密码:
                          </div>
                          <div class="col-sm-2">
                            <input type="password" placeholder="请确认密码"/>
                          </div>
                        </div>
                        <div class="row" style="height:30px"></div>
                        <div class="row">
                          <div class="col-sm-4  col-sm-offset-2">
                            <button type="button" class="btn btn-primary btn-lg" style="width:180px;" @click="submit">
                              <span style="color: white">下一步</span>
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
          this.$store.state.setPassword=false;
          this.$store.state.success=true;
        }
      },
        name: "RegisterPassword"
    }
</script>

<style scoped>

</style>
