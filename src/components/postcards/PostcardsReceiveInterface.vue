<template>
  <div style="width:100%;height:590px;background-color:#ebf6df">
    <div class="container" style=" height: 500px;background-color:lightgoldenrodyellow">
      <div class="row" style="height:53px;background-color:#528970">
        <div class="col-sm-12" style="width:200px;height:53px;line-height: 52px;font-size: 18px;color: white">接收明信片
        </div>
      </div>
      <div class="row" style="height:447px;">
        <div class="container col-sm-10 col-sm-offset-1" style="margin-top:30px;height:400px;background-color:#fafafa">
          <form>
            <div v-if="send">
              <div class="row" style="font-size: 18px;margin-top: 30px">
                <div class="col-sm-5 col-sm-offset-5">接收一张明信片</div>
              </div>
              <div class="row" style="margin-top: 20px">
                <div class="col-sm-5 col-sm-offset-5">
                  <span style="font-size: 18px">请输入明信片的ID:</span><br><br>
                  <input type="text" class="form-control" id="cardId" placeholder="请输入明信片的ID">
                </div>
              </div>
              <!--<div class="row">-->
              <!--<div class="col-sm-10 col-sm-offset-5" style="height:35px;margin-top: 10px;font-size: 18px;">-->
              <!--<span>给对方的一段话：</span>-->
              <!--</div>-->
              <!--</div>-->
              <!--<div class="row">-->
              <!--<div class="col-sm-8 col-sm-offset-3 text-center" style="height:35px;margin-top:2px">-->
              <!--<textarea rows="6" cols="40"></textarea>-->
              <!--</div>-->
              <!--</div>-->
              <div class="row">
                <div class="col-sm-10 col-sm-offset-1" style="height:80px;"></div>
              </div>
              <div class="row">
                <div class="col-sm-10 col-sm-offset-5" style="height:30px;">
                  <button type="button" class="btn btn-primary btn-lg" style="width:180px;" @click="submit">
                    <span style="color: white">提交</span>
                  </button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-10 col-sm-offset-4" style="height:130px; margin-top:70px">
                <app-postcardsreceiveupload></app-postcardsreceiveupload>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PostcardsReceiveUpload from "./PostcardsReceiveUpload";

  export default {
    data() {
      return {
        receivecards:0,
        send: true,
      }
    },
    mounted: function () {
      this.reset();
    },
    methods: {
      submit: function () {
        this.$store.state.cardId = $("#cardId").val();
        console.log(this.$store.state.cardId );
        let _this = this;
        this.$ajax.get(`http://localhost:3000/receive/doReceive/` + (this.$store.state.cardId)+'/'+localStorage.userId
        ).then(function (result) {
          _this.receivecards = result.data.data.receivecards;
          if( _this.receivecards>0){
            _this.send = false;
            _this.$store.state.upload = true;
          }else {
            alert("您的明信片可能不小心输入错误了，请仔细检查哦！");
          }
          console.log("成功");
          console.log("我是receivcards"+_this.receivecards);
        }, function (err) {
          console.log(err);
        });

      },
      reset: function () {
        this.$store.state.upload = false;
      }
    },
    name: "PostcardsReceiveInterface",
    components: {
      "app-postcardsreceiveupload": PostcardsReceiveUpload,
    },
  }
</script>
<style scoped>
</style>
