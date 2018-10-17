<template>
  <div v-if="$store.state.iphoneNumber">
      <div class="container" style=" height: 500px;background-color:lightgoldenrodyellow">
        <div class="row" style="height:447px;">
          <div class="container col-sm-10 col-sm-offset-1"style="height:380px;background-color:#fafafa;margin-top:30px">
            <div class="row">
             <div class="container">
               <div class="row" style="height: 80px"></div>
               <div class="row" style="font-size: 18px">
                   <div class="col-sm-3  col-sm-offset-1" style="color: red">1.手机号注册</div>
                   <div class="col-sm-3">2.填写基本信息</div>
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
                     <div class="container col-sm-4 col-sm-offset-3"style="height: 180px">
                        <form>
                            <div class="row">
                                <div class="col-sm-5">
                                  <select class="form-control">
                                    <option selected>中国大陆 +86</option>
                                    <option>日本     +81</option>
                                    <option>韩国     +84</option>
                                    <option>泰国     +87</option>
                                    <option>香港     +80</option>
                                 </select>
                            </div>
                              <div class="col-sm-2">
                                    <input type="text" placeholder="请输入手机号："/>
                             </div>
                            </div>
                            <div class="row" style="height:30px"></div>
                            <div class="row">
                            <div class="col-sm-5">
                              <input type="button" value="点击获取验证码"/>
                            </div>
                            <div class="col-sm-2">

                                <input type="text" placeholder="请输入验证码："/>

                            </div>
                          </div>
                            <div class="row" style="height:30px"></div>
                          <div class="col-sm-4  col-sm-offset-2">
                          <button type="button" class="btn btn-primary btn-lg" style="width:180px;" @click="submit">
                            <span style="color: white">下一步</span>
                          </button>
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
  </div>
</template>
<script>
    export default {
      methods:{
        submit:function () {
          this.$store.state.iphoneNumber=false;
          this.$store.state.setPassword=true;
        }
      },
        name: "RegisterNumber",

    }
</script>
<style scoped>

</style>
