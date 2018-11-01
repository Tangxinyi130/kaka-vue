<template>
    <div class="container col-sm-10 col-sm-offset-1 con"v-if="flag">
        <div class="row">
            <div class="col-sm-12 con-row">
                <div>
                    <div style="height:40px;"></div>
                     <div class="text-center"><p class="agreenment">注册协议</p></div>
                  <div class="col-sm-offset-1">
                    <p>
                      <span class="tishi-sp">【审慎阅读】</span>您在申请注册流程中点击同意前，应当认真阅读以下协议。请您务必审慎阅读、充分理解协议中相关条款内容，其中包括：
                    </p>
                  </div>
                    <div class="col-sm-offset-2 agreenmentf"><p>1、与您约定免除或限制责任的条款；</p></div>
                    <div class="col-sm-offset-2 agreenmentf"><p>2、与您约定法律适用和管辖的条款；</p> </div>
                   <div class="col-sm-offset-2 agreenmentf"><p>3、其他以粗体下划线标识的重要条款。如您对协议有任何疑问，可向平台客服咨询。</p></div>
                  <div class="col-sm-offset-1">
                    <p class="tishi"><span class="tishi-sp">【特别提示】</span>当您按照注册页面提示填写信息、阅读并同意协议且完成全部注册程序后，即表示您已充分阅读、理解并接受协议的全部内容。如您因平台服务与淘宝发生争议的，适用《小可爱平台服务协议》处理。如您在使用平台服务过程中与其他用户发生争议的，依您与其他用户达成的协议处理。阅读协议的过程中，如果您不同意相关协议或其中任何条款约定，您应立即停止注册程序。</p><br>
                  </div>
                  <div style="height: 30px"></div>
                  <div class="text-center">
                    <button type="button" class="btn bt  btn-lg " style="width:200px;" @click="submit">
                      <span>注册阅读并同意条款 </span>
                    </button>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
      data(){
        return{
          flag:true,
        }
      },
      mounted:function(){
        this.reset();
      },
      methods:{
        submit:function () {
          this.flag=false;
          this.$store.state.iphoneNumber=true;
        },
        reset:function () {
          this.$store.state.iphoneNumber=false;
          this.$store.state.setPassword=false;
          this.$store.state.success=false;
        }
      },
        name: "ReginsterAgreementContent"
    }
</script>
<style scoped>
  .con{
    height:380px;
    background-color:#fafafa;
    margin-top:30px;
  }
  .con-row{
    height:35px;
    height:380px;
    color: #5e5e5e;
    /*background-color:#d5d5ab;*/
  }
  .agreenment{
    font-weight: bold;
    font-size: 18px;
  }
  .agreenmentf{
    font-weight: bold;
  }
  .tishi{
    line-height:26px;
  }
  .tishi-sp{
    font-weight: bold;
  }
  .bt{
    background-color:  #BDD1C5;
    color: white;
  }
</style>
