<template>
  <div style="width:100%;height:590px;background-color:#ebf6df">
    <div class="container" style="">
      <div class="row" style="height:53px;background-color:#528970;">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">发送明信片
        </div>
      </div>
      <div class="row" style="height:447px;background-color:lightgoldenrodyellow">
        <div class="container col-sm-8 col-sm-offset-2">
          <div class="row" style="height:380px;margin-top:30px;background-color:#fafafa">
              <p style="margin:15px">
                第1条： 服务概要/目的<br>
                &nbsp;&nbsp;  本服务旨在为用户提供本公司商品信息，并接受购买商品的订单。<br>
                第２条 本条约的使用范围<br>
                &nbsp;&nbsp;    本条约适用于由于本服务而产生的用户和本公司之间的所有事项
                本公司在未得到用户允许的情况下，对本条约拥有变更的权利。并且，本公司将使用合适的方法告知用户
                第3条 本服务的权利<br>
                &nbsp;&nbsp;    用户在遵守本条约前提下，承诺只使用本公司提供的服务。本服务中提供的信息及相关著作权等一些知识产权，属本公司所有。
                用户在使用本服务时，对网站提供的信息，数据，图像用作其他用途时，本公司有追究的权利。<br>
                第4条 网站账号ID及密码<br>
                &nbsp;&nbsp;   本公司对于利用本服务的用户，免费提供网站登录的账号及密码。
                用户对从本公司接收的账号和密码的保管，以及运营管理负有全部的责任。若因用户的保管及使用管理上的遗漏所产生的损害，本公司不承担一切法律责任。
                用户利用账号和密码使用本服务的的行为均视同客户的行为，由此产生的有关责任均由用户承担
                用户若想更换账号和密码时，必须在本公司的指导下取得本公司的许可后，按照本公司指定方式进行变更。
                用户在使用的账号及密码被盗，或认为有被盗嫌疑的情况下，应立即通知本公司。届时，本公司会立即提供新的账号及密码后重新通知用户。
              </p>
            <form>
            <div class="row" style="text-align: center">
              <button type="button" class="btn btn-primary btn-lg " style="width:200px;" @click="submit" >
                <span style="color: white">阅读并同意相关事项</span>
              </button>
            </div>
          </form>
          </div>

        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    name: "PostcardsSendAnnouncements",
    data() {
      return {
        times:0,
        pooltimes:0,
      }
    },
    created() {
      let _this = this;
      this.$ajax.get(`http://localhost:3000/send/limitTimes/`+(localStorage.userId)
      ).then(function (result) {
        console.log(result.data.data);
        _this.times = result.data.data.times;
        _this.pooltimes = result.data.data.pooltimes;
        console.log("我是已经发送次数的总数"+_this.times)
        console.log("我是pool池里面的数据总数"+_this.pooltimes)
      }, function (err) {
        console.log(err);
      })
    },
    methods: {
      submit: function () {
        //如果次数在5次之内可以发送，如果超过5次将不会发送
        if(this.times<5){
          //如果pool池里面的数据不足将会提示用户
          if(this.pooltimes<1){
            alert("给您跪下了！我们系统目前繁忙暂时用不了，先去别处逛逛吧！")
            location.href = "http://localhost:8080";
          }else {
            if(this.$store.state.isLogin){
              this.$router.replace({path: "/postcardssendinterface"})
            }else {
              this.$router.replace({path: "/login"})
            }
          }
        }else {
          alert("您发送的次数已经超过5次了，静静等待小伙伴的接收吧。");
          location.href = "http://localhost:8080";
        }

      },
    },
  }
</script>
<style scoped>
</style>
