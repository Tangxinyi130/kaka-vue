<template>
  <div class="con">
    <div class="container con1">
        <div class="row con-nav">
            <div class="col-sm-12 con-nav-col">接收明信片</div>
        </div>
        <div class="row con-body">
            <div class="container col-sm-8 col-sm-offset-2 con-body-con">
              <div style="height:80px"></div>
                <form>
                    <div v-if="$store.state.send">
                        <!--<div class="row body-con-row1">-->
                            <!--<div class="col-sm-5 col-sm-offset-6">接收一张明信片</div>-->
                        <!--</div>-->
                        <div class="row body-con-row2">
                            <div class="col-sm-5 col-sm-offset-6">
                                <span>请输入明信片的ID:</span><br><br>
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
                          <div class="col-sm-10 col-sm-offset-1" style="height:30px;"></div>
                        </div>
                        <div class="row">
                  <div class="col-sm-10 col-sm-offset-6" style="height:30px;">
                      <button type="button" class="btn but btn-lg"  @click="submit">
                          <span style="color: white">提交</span>
                      </button>
                </div>
              </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-4" style="height:130px; margin-top:20px;">
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
            _this.$store.state.send = false;
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
        this.$store.state.send = true;
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
  .con{
    width:100%;
    height:590px;
    background-color:#ebf6df
  }
  .con1{
    height:580px;
    background-color:lightgoldenrodyellow
  }
  .con-nav{
    height:53px;
    background-color:#528970
  }
  .con-nav-col{
    width:200px;
    height:53px;
    line-height:52px;
    font-size: 18px;
    color: white
  }
  .con-body{
    height:447px;
  }
  .con-body-con{
    margin-top:30px;
    height:400px;
    background-color:#fafafa;
    /*border: 1px solid red;*/
    background-image: url("../../assets/p51.jpg");
  }
  /*.body-con-row1{*/
    /*font-size: 18px;*/
    /*margin-top: 30px*/
  /*}*/
  .body-con-row2{
    margin-top: 20px;
    font-size: 16px;
    margin-top: 60px
  }
  .but{
      width:80px;
      background-color:lightskyblue
  }
</style>
